import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Clock, Trophy, AlertCircle, ChartBar, CircleCheck, CircleX } from "lucide-react";
import QuestionCard from "@/components/quiz/QuestionCard";
import { generateMockQuizzes } from "@/utils/mockData";
import { Quiz, QuestionType } from "@/types/quiz";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PlayQuiz = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const quizzes = generateMockQuizzes();
  const [quiz, setQuiz] = useState<Quiz | undefined>(quizzes.find((q) => q.id === quizId));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeWarning, setTimeWarning] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  
  // Configuration options before quiz starts
  const [configQuestionCount, setConfigQuestionCount] = useState<number | null>(null);
  const [configQuestionTypes, setConfigQuestionTypes] = useState<Record<QuestionType, boolean>>({
    "multiple-choice": true,
    "true-false": true,
    "fill-blank": true
  });
  const [configDifficulty, setConfigDifficulty] = useState("all"); // "all", "easy", "medium", "hard"
  const [configTimePerQuestion, setConfigTimePerQuestion] = useState(30); // in seconds
  
  // If no quiz found, redirect to home page
  useEffect(() => {
    if (!quiz) {
      toast.error("Quiz not found!");
      navigate('/');
    } else if (!quizStarted) {
      // Initialize the timer when starting quiz
      setTimeLeft(quiz.questions[currentQuestionIndex]?.timeLimit || configTimePerQuestion);
    }
  }, [quiz, navigate, quizStarted, currentQuestionIndex, configTimePerQuestion]);

  // Apply quiz configuration
  const applyQuizConfig = () => {
    if (!quiz) return;
    
    let filteredQuestions = [...quiz.questions];
    
    // Filter by question type
    filteredQuestions = filteredQuestions.filter(q => 
      configQuestionTypes[q.type as QuestionType]
    );
    
    // Filter by difficulty if not "all"
    if (configDifficulty !== "all") {
      filteredQuestions = filteredQuestions.filter(q => 
        quiz.difficulty === configDifficulty
      );
    }
    
    // Limit by question count if set
    if (configQuestionCount && configQuestionCount > 0 && configQuestionCount < filteredQuestions.length) {
      filteredQuestions = filteredQuestions.slice(0, configQuestionCount);
    }
    
    // Apply custom time limit per question
    filteredQuestions = filteredQuestions.map(q => ({
      ...q,
      timeLimit: configTimePerQuestion
    }));
    
    // Create a new quiz with the filtered questions
    const configuredQuiz: Quiz = {
      ...quiz,
      questions: filteredQuestions
    };
    
    setQuiz(configuredQuiz);
  };

  // Calculate score function moved outside of render to prevent unnecessary recalculations
  const calculateScore = useCallback(() => {
    if (!quiz) return { totalScore: 0, correctAnswers: 0 };
    
    let totalScore = 0;
    let correctAnswers = 0;
    
    quiz.questions.forEach((question) => {
      const selectedAnswerId = selectedAnswers[question.id];
      if (selectedAnswerId) {
        const correctAnswer = question.answers.find(a => a.isCorrect);
        if (correctAnswer && selectedAnswerId === correctAnswer.id) {
          totalScore += question.points;
          correctAnswers++;
        }
      }
    });
    
    return { totalScore, correctAnswers };
  }, [quiz, selectedAnswers]);

  // Timer functionality
  useEffect(() => {
    if (!quizStarted || !quiz || quizCompleted || showResult || timerPaused) return;
    
    const timer = setInterval(() => {
      // Show warning when less than 5 seconds remain
      if (timeLeft <= 6 && timeLeft > 5) {
        setTimeWarning(true);
      }
      
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          // Time's up for this question but DON'T automatically advance
          clearInterval(timer);
          
          // Instead of advancing, notify user that time is up
          toast.warning("Time's up for this question!", {
            description: "Please select an answer or move to the next question."
          });
          
          // Pause the timer instead of automatically advancing
          setTimerPaused(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, currentQuestionIndex, quiz, quizCompleted, showResult, timerPaused]);

  const startQuiz = () => {
    applyQuizConfig();
    setQuizStarted(true);
    toast.success("Quiz started! Good luck!");
  };

  const handleAnswerSelected = (answerId: string) => {
    if (!quiz) return;
    
    const currentQuestion = quiz.questions[currentQuestionIndex];
    
    // Update selected answers
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }));
    
    // Unpause timer if it was paused due to time running out
    if (timerPaused) {
      setTimerPaused(false);
    }
    
    // Reset time warning
    setTimeWarning(false);
  };

  const nextQuestion = () => {
    if (!quiz) return;
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimerPaused(false);
      setTimeWarning(false);
    } else {
      const { totalScore } = calculateScore();
      setScore(totalScore);
      setQuizCompleted(true);
      setShowResult(true);
      toast.success("Quiz completed! Let's see your results.");
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setTimerPaused(false);
      setTimeWarning(false);
    }
  };

  // Effect to update the timer whenever currentQuestionIndex changes
  useEffect(() => {
    if (quiz && quizStarted && !quizCompleted && !showResult) {
      setTimeLeft(quiz.questions[currentQuestionIndex]?.timeLimit || configTimePerQuestion);
    }
  }, [currentQuestionIndex, quiz, quizStarted, quizCompleted, showResult, configTimePerQuestion]);

  if (!quiz) return null;

  // Prepare data for the performance chart
  const prepareChartData = () => {
    if (!quiz) return [];
    
    const questionTypes: Record<string, { correct: number, incorrect: number, total: number }> = {};
    
    quiz.questions.forEach(question => {
      const type = question.type;
      const selectedAnswer = selectedAnswers[question.id];
      const isCorrect = question.answers.some(a => a.id === selectedAnswer && a.isCorrect);
      
      if (!questionTypes[type]) {
        questionTypes[type] = { correct: 0, incorrect: 0, total: 0 };
      }
      
      if (selectedAnswer) {
        questionTypes[type].total += 1;
        if (isCorrect) {
          questionTypes[type].correct += 1;
        } else {
          questionTypes[type].incorrect += 1;
        }
      }
    });
    
    return Object.entries(questionTypes).map(([type, data]) => ({
      name: type.replace('-', ' '),
      correct: data.correct,
      incorrect: data.incorrect,
      percentage: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
    }));
  };

  if (!quizStarted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          <div className={`h-24 w-24 rounded-full bg-gradient-to-br ${quiz.thumbnailColor} flex items-center justify-center mx-auto mb-6`}>
            <h2 className="text-white text-3xl font-bold">{quiz.title.charAt(0)}</h2>
          </div>
          <h1 className="text-2xl font-bold mb-4 text-center">{quiz.title}</h1>
          <p className="text-muted-foreground mb-6 text-center">{quiz.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
            <div className="rounded-lg bg-muted p-4 flex flex-col items-center">
              <span className="text-muted-foreground mb-1">Questions</span>
              <span className="text-xl font-semibold">{quiz.questions.length}</span>
            </div>
            <div className="rounded-lg bg-muted p-4 flex flex-col items-center">
              <span className="text-muted-foreground mb-1">Total Points</span>
              <span className="text-xl font-semibold">
                {quiz.questions.reduce((sum, q) => sum + q.points, 0)}
              </span>
            </div>
            <div className="rounded-lg bg-muted p-4 flex flex-col items-center">
              <span className="text-muted-foreground mb-1">Difficulty</span>
              <span className="text-xl font-semibold capitalize">{quiz.difficulty}</span>
            </div>
            <div className="rounded-lg bg-muted p-4 flex flex-col items-center">
              <span className="text-muted-foreground mb-1">Time Limit</span>
              <span className="text-xl font-semibold">
                {Math.ceil(quiz.questions.reduce((sum, q) => sum + q.timeLimit, 0) / 60)} min
              </span>
            </div>
          </div>
          
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-semibold">Quiz Configuration</h3>
            
            <div>
              <Label htmlFor="questionCount" className="mb-2 block">Number of Questions</Label>
              <Slider
                id="questionCount" 
                min={1}
                max={quiz.questions.length}
                step={1}
                value={[configQuestionCount || quiz.questions.length]}
                onValueChange={(values) => setConfigQuestionCount(values[0])}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1</span>
                <span>{configQuestionCount || quiz.questions.length}/{quiz.questions.length}</span>
              </div>
            </div>
            
            <div>
              <Label className="mb-2 block">Question Types</Label>
              <div className="space-y-2">
                {Object.keys(configQuestionTypes).map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`type-${type}`}
                      checked={configQuestionTypes[type as QuestionType]}
                      onCheckedChange={(checked) => 
                        setConfigQuestionTypes(prev => ({
                          ...prev,
                          [type]: !!checked
                        }))
                      }
                    />
                    <Label htmlFor={`type-${type}`} className="capitalize">{type.replace('-', ' ')}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="difficulty" className="mb-2 block">Difficulty</Label>
              <RadioGroup
                id="difficulty"
                value={configDifficulty}
                onValueChange={setConfigDifficulty}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">All Difficulties</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="easy" id="easy" />
                  <Label htmlFor="easy">Easy</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hard" id="hard" />
                  <Label htmlFor="hard">Hard</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label htmlFor="timePerQuestion" className="mb-2 block">Time per Question (seconds)</Label>
              <Slider
                id="timePerQuestion" 
                min={10}
                max={120}
                step={5}
                value={[configTimePerQuestion]}
                onValueChange={(values) => setConfigTimePerQuestion(values[0])}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>10s</span>
                <span>{configTimePerQuestion}s</span>
                <span>120s</span>
              </div>
            </div>
          </div>
          
          <Button onClick={startQuiz} size="lg" className="w-full">
            Start Quiz
          </Button>
        </Card>
      </div>
    );
  }

  if (showResult) {
    const { totalScore, correctAnswers } = calculateScore();
    const percentage = Math.round((correctAnswers / quiz.questions.length) * 100);
    const chartData = prepareChartData();
    
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <Card className="p-8">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full gradient-bg flex items-center justify-center">
              <Trophy className="h-16 w-16 text-white" />
            </div>
            <div className="absolute top-0 right-0 left-0 animate-bounce-in">
              <div className="badge-purple mx-auto w-min whitespace-nowrap px-3 py-1.5 text-lg font-bold">
                {percentage}% Score
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center">Quiz Completed!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg bg-muted p-4 flex flex-col items-center">
              <span className="text-muted-foreground mb-1">Total Score</span>
              <span className="text-2xl font-semibold">{totalScore}</span>
            </div>
            <div className="rounded-lg bg-muted p-4 flex flex-col items-center">
              <span className="text-muted-foreground mb-1">Correct Answers</span>
              <span className="text-2xl font-semibold">{correctAnswers} / {quiz.questions.length}</span>
            </div>
          </div>

          {chartData.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Performance by Question Type</h3>
              <div className="h-64 bg-muted rounded-lg p-4">
                <ChartContainer
                  className="h-full w-full"
                  config={{
                    correct: { 
                      color: "#22c55e",
                      label: "Correct" 
                    },
                    incorrect: {
                      color: "#ef4444",
                      label: "Incorrect"
                    }
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 20, right: 30, bottom: 50, left: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                      <Bar dataKey="correct" name="Correct" fill="var(--color-correct)" />
                      <Bar dataKey="incorrect" name="Incorrect" fill="var(--color-incorrect)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
          )}
          
          <h3 className="text-lg font-semibold mb-4">Review Questions</h3>
          
          <div className="space-y-4">
            {quiz.questions.map((question, index) => {
              const isAnswered = selectedAnswers[question.id];
              const isCorrect = question.answers.find(
                (a) => a.id === selectedAnswers[question.id] && a.isCorrect
              );
              
              return (
                <div key={question.id} className="flex items-center p-3 rounded-lg bg-muted/50">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      isAnswered
                        ? isCorrect
                          ? "bg-quiz-green text-white"
                          : "bg-quiz-red text-white"
                        : "bg-muted-foreground text-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm truncate">{question.text}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setCurrentQuestionIndex(index);
                      setShowResult(false);
                    }}
                  >
                    Review
                  </Button>
                </div>
              );
            })}
          </div>
          
          <div className="flex gap-4 mt-8">
            <Button variant="outline" className="flex-grow" onClick={() => navigate('/')}>
              Back to Home
            </Button>
            <Button className="flex-grow" onClick={() => {
              // Reset the quiz state but keep the same quiz
              setCurrentQuestionIndex(0);
              setSelectedAnswers({});
              setShowResult(false);
              setQuizCompleted(false);
              setTimeLeft(quiz.questions[0]?.timeLimit || configTimePerQuestion);
              setTimerPaused(false);
              setTimeWarning(false);
              toast.success("Let's try this quiz again!");
            }}>
              Play Again
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  const hasAnswered = Boolean(selectedAnswers[currentQuestion.id]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className={`${timeWarning || timeLeft < 5 ? "text-quiz-red font-bold animate-ping-once" : ""}`}>
              {timeLeft}s
            </span>
            {timerPaused && (
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" /> Time's up
              </span>
            )}
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <QuestionCard
        question={currentQuestion}
        onAnswerSelected={handleAnswerSelected}
        selectedAnswerId={selectedAnswers[currentQuestion.id]}
        showCorrectAnswer={quizCompleted}
      />

      <div className="flex justify-between mt-6">
        <Button
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Previous
        </Button>
        
        {hasAnswered || timerPaused ? (
          <Button onClick={nextQuestion} className="gap-2">
            {currentQuestionIndex < quiz.questions.length - 1 ? (
              <>
                Next <ArrowRight className="h-4 w-4" />
              </>
            ) : (
              "Finish Quiz"
            )}
          </Button>
        ) : (
          <Button onClick={nextQuestion} variant="outline" className="gap-2">
            {currentQuestionIndex < quiz.questions.length - 1 ? (
              <>
                Skip <ArrowRight className="h-4 w-4" />
              </>
            ) : (
              "Finish Quiz"
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PlayQuiz;
