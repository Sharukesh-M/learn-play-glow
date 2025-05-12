
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Clock, Trophy } from "lucide-react";
import QuestionCard from "@/components/quiz/QuestionCard";
import { generateMockQuizzes } from "@/utils/mockData";

const PlayQuiz = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const quizzes = generateMockQuizzes();
  const quiz = quizzes.find((q) => q.id === quizId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  // If no quiz found, redirect to home page
  useEffect(() => {
    if (!quiz) {
      toast.error("Quiz not found!");
      navigate('/');
    } else if (!quizStarted) {
      // Initialize the timer when starting quiz
      setTimeLeft(quiz.questions[currentQuestionIndex]?.timeLimit || 30);
    }
  }, [quiz, navigate, quizStarted, currentQuestionIndex]);

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
    if (!quizStarted || !quiz || quizCompleted || showResult) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          // Time's up for this question
          if (currentQuestionIndex < quiz.questions.length - 1) {
            // Don't modify state directly in the timer callback
            // Instead, set a flag to handle in the next render cycle
            clearInterval(timer);
            setCurrentQuestionIndex(prev => prev + 1);
            return quiz.questions[currentQuestionIndex + 1]?.timeLimit || 30;
          } else {
            // Quiz ended due to time
            clearInterval(timer);
            const { totalScore } = calculateScore();
            setScore(totalScore);
            setQuizCompleted(true);
            setShowResult(true);
            return 0;
          }
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, currentQuestionIndex, quiz, quizCompleted, showResult, calculateScore]);

  const startQuiz = () => {
    setQuizStarted(true);
    toast.success("Quiz started! Good luck!");
  };

  const handleAnswerSelected = (answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [quiz!.questions[currentQuestionIndex].id]: answerId,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quiz!.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      // Update timeLeft in a separate effect that responds to currentQuestionIndex changes
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
      // Update timeLeft in a separate effect that responds to currentQuestionIndex changes
    }
  };

  // Effect to update the timer whenever currentQuestionIndex changes
  useEffect(() => {
    if (quiz && quizStarted && !quizCompleted && !showResult) {
      setTimeLeft(quiz.questions[currentQuestionIndex]?.timeLimit || 30);
    }
  }, [currentQuestionIndex, quiz, quizStarted, quizCompleted, showResult]);

  if (!quiz) return null;

  if (!quizStarted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="quiz-card text-center p-8">
          <div className={`h-24 w-24 rounded-full bg-gradient-to-br ${quiz.thumbnailColor} flex items-center justify-center mx-auto mb-6`}>
            <h2 className="text-white text-3xl font-bold">{quiz.title.charAt(0)}</h2>
          </div>
          <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
          <p className="text-muted-foreground mb-6">{quiz.description}</p>
          
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
          
          <Button onClick={startQuiz} size="lg" className="w-full">
            Start Quiz
          </Button>
        </div>
      </div>
    );
  }

  if (showResult) {
    const { totalScore, correctAnswers } = calculateScore();
    const percentage = Math.round((correctAnswers / quiz.questions.length) * 100);
    
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="quiz-card text-center p-8">
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
          
          <h2 className="text-2xl font-bold mb-6">Quiz Completed!</h2>
          
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
            <Button className="flex-grow" onClick={() => navigate(`/play/${quiz.id}`)}>
              Play Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className={timeLeft < 5 ? "text-quiz-red font-bold animate-ping-once" : ""}>
              {timeLeft}s
            </span>
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
        <Button onClick={nextQuestion} className="gap-2">
          {currentQuestionIndex < quiz.questions.length - 1 ? (
            <>
              Next <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            "Finish Quiz"
          )}
        </Button>
      </div>
    </div>
  );
};

export default PlayQuiz;
