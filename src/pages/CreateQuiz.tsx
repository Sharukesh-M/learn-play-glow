import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { 
  Plus, 
  Trash2, 
  Check, 
  ArrowUp, 
  ArrowDown,
  Save 
} from "lucide-react";
import { CATEGORIES, TAGS } from "@/utils/mockData";
import { Quiz, Question, QuestionType, Answer } from "@/types/quiz";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");

  const [quiz, setQuiz] = useState<Partial<Quiz>>({
    title: "",
    description: "",
    category: "",
    difficulty: "medium",
    tags: [],
    questions: [],
    isPublic: true,
    thumbnailColor: "from-quiz-purple to-indigo-500"
  });

  const [currentQuestion, setCurrentQuestion] = useState<Partial<Question>>({
    type: QuestionType.MULTIPLE_CHOICE,
    text: "",
    points: 100,
    timeLimit: 30,
    answers: [
      { id: "a", text: "", isCorrect: true },
      { id: "b", text: "", isCorrect: false },
      { id: "c", text: "", isCorrect: false },
      { id: "d", text: "", isCorrect: false },
    ],
    explanation: "",
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleQuizDetailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setQuiz({
      ...quiz,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setQuiz({
      ...quiz,
      [name]: value,
    });
  };

  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCurrentQuestion({
      ...currentQuestion,
      [name]: name === "points" || name === "timeLimit" ? parseInt(value) : value,
    });
  };

  const handleQuestionTypeChange = (type: QuestionType) => {
    let answers;
    
    if (type === QuestionType.TRUE_FALSE) {
      answers = [
        { id: "a", text: "True", isCorrect: true },
        { id: "b", text: "False", isCorrect: false },
      ];
    } else if (type === QuestionType.FILL_BLANK) {
      answers = [{ id: "a", text: "", isCorrect: true }];
    } else {
      // multiple-choice
      answers = [
        { id: "a", text: "", isCorrect: true },
        { id: "b", text: "", isCorrect: false },
        { id: "c", text: "", isCorrect: false },
        { id: "d", text: "", isCorrect: false },
      ];
    }

    setCurrentQuestion({
      ...currentQuestion,
      type,
      answers,
    });
  };

  const handleAnswerChange = (id: string, text: string) => {
    setCurrentQuestion({
      ...currentQuestion,
      answers: currentQuestion.answers?.map((answer) =>
        answer.id === id ? { ...answer, text } : answer
      ),
    });
  };

  const handleCorrectAnswerChange = (id: string) => {
    setCurrentQuestion({
      ...currentQuestion,
      answers: currentQuestion.answers?.map((answer) => ({
        ...answer,
        isCorrect: answer.id === id,
      })),
    });
  };

  const addQuestion = () => {
    if (!currentQuestion.text || currentQuestion.text.trim() === "") {
      toast.error("Question text is required");
      return;
    }

    if (
      currentQuestion.type !== "fill-blank" &&
      (!currentQuestion.answers?.some((a) => a.text.trim() !== ""))
    ) {
      toast.error("At least one answer is required");
      return;
    }

    const newQuestion: Question = {
      id: `q-${Date.now()}`,
      type: currentQuestion.type as QuestionType,
      text: currentQuestion.text || "",
      points: currentQuestion.points || 100,
      timeLimit: currentQuestion.timeLimit || 30,
      answers: currentQuestion.answers as Answer[],
      explanation: currentQuestion.explanation,
    };

    setQuiz({
      ...quiz,
      questions: [...(quiz.questions || []), newQuestion],
    });

    toast.success("Question added!");

    // Reset current question
    setCurrentQuestion({
      type: QuestionType.MULTIPLE_CHOICE,
      text: "",
      points: 100,
      timeLimit: 30,
      answers: [
        { id: "a", text: "", isCorrect: true },
        { id: "b", text: "", isCorrect: false },
        { id: "c", text: "", isCorrect: false },
        { id: "d", text: "", isCorrect: false },
      ],
      explanation: "",
    });
  };

  const removeQuestion = (id: string) => {
    setQuiz({
      ...quiz,
      questions: quiz.questions?.filter((q) => q.id !== id),
    });
    toast.success("Question removed");
  };

  const moveQuestion = (id: string, direction: "up" | "down") => {
    const questions = [...(quiz.questions || [])];
    const index = questions.findIndex((q) => q.id === id);
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === questions.length - 1)
    ) {
      return;
    }

    const newIndex = direction === "up" ? index - 1 : index + 1;
    const [removed] = questions.splice(index, 1);
    questions.splice(newIndex, 0, removed);

    setQuiz({
      ...quiz,
      questions,
    });
  };

  const handleTagSelect = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      toast.error("You can select up to 5 tags");
    }

    setQuiz({
      ...quiz,
      tags: selectedTags.includes(tag) 
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag].slice(0, 5)
    });
  };

  const saveQuiz = () => {
    if (!quiz.title) {
      toast.error("Quiz title is required");
      setActiveTab("details");
      return;
    }

    if (!quiz.category) {
      toast.error("Category is required");
      setActiveTab("details");
      return;
    }

    if (!quiz.questions || quiz.questions.length === 0) {
      toast.error("At least one question is required");
      setActiveTab("questions");
      return;
    }

    // Save the quiz (in a real app, this would be an API call)
    toast.success("Quiz created successfully!");
    
    // In a real app, we would navigate to the new quiz page
    // For now, just navigate to home
    navigate('/');
  };

  const isQuizValid = () => {
    return (
      !!quiz.title &&
      !!quiz.category &&
      !!quiz.questions &&
      quiz.questions.length > 0
    );
  };

  const colorOptions = [
    { value: "from-quiz-purple to-indigo-500", label: "Purple" },
    { value: "from-quiz-blue to-cyan-500", label: "Blue" },
    { value: "from-quiz-green to-emerald-500", label: "Green" },
    { value: "from-amber-500 to-red-500", label: "Orange" },
    { value: "from-pink-500 to-rose-500", label: "Pink" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Create Quiz</h1>
      <p className="text-muted-foreground mb-6">
        Create an interactive quiz to share with students or friends
      </p>

      <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="details">Quiz Details</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="preview">Preview & Save</TabsTrigger>
        </TabsList>

        {/* Quiz Details Tab */}
        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Quiz Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={quiz.title}
                  onChange={handleQuizDetailChange}
                  placeholder="Enter a catchy title for your quiz"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={quiz.description}
                  onChange={handleQuizDetailChange}
                  placeholder="What is this quiz about?"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={quiz.category || ""}
                    onValueChange={(value) => handleSelectChange("category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select
                    value={quiz.difficulty || "medium"}
                    onValueChange={(value) =>
                      handleSelectChange("difficulty", value as "easy" | "medium" | "hard")
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Quiz Color</Label>
                <div className="grid grid-cols-5 gap-2">
                  {colorOptions.map((color) => (
                    <div
                      key={color.value}
                      className={`h-12 rounded-md bg-gradient-to-br ${color.value} cursor-pointer transition-all ${
                        quiz.thumbnailColor === color.value
                          ? "ring-2 ring-primary ring-offset-2"
                          : "hover:opacity-90"
                      }`}
                      onClick={() => handleSelectChange("thumbnailColor", color.value)}
                      aria-label={`Select ${color.label} color`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Tags (select up to 5)</Label>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <div
                      key={tag}
                      className={`rounded-full px-3 py-1 text-sm cursor-pointer transition-colors ${
                        selectedTags.includes(tag)
                          ? "bg-primary text-white"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                      onClick={() => handleTagSelect(tag)}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={() => setActiveTab("questions")}>
              Next: Add Questions
            </Button>
          </div>
        </TabsContent>

        {/* Questions Tab */}
        <TabsContent value="questions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Add a New Question</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Question Type</Label>
                <div className="flex flex-wrap gap-2">
                  {Object.values(QuestionType).map((type) => (
                    <Button
                      key={type}
                      variant={currentQuestion.type === type ? "default" : "outline"}
                      onClick={() => handleQuestionTypeChange(type)}
                      className="flex-grow"
                    >
                      {type.replace("-", " ")}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="questionText">Question Text</Label>
                <Textarea
                  id="questionText"
                  name="text"
                  value={currentQuestion.text}
                  onChange={handleQuestionChange}
                  placeholder="Enter your question"
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="points">Points</Label>
                  <Input
                    id="points"
                    name="points"
                    type="number"
                    min="100"
                    step="100"
                    value={currentQuestion.points}
                    onChange={handleQuestionChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeLimit">Time Limit (seconds)</Label>
                  <Input
                    id="timeLimit"
                    name="timeLimit"
                    type="number"
                    min="10"
                    step="5"
                    value={currentQuestion.timeLimit}
                    onChange={handleQuestionChange}
                  />
                </div>
              </div>

              {/* Answers Section */}
              <div className="space-y-3">
                <Label>Answers</Label>

                {currentQuestion.type === "multiple-choice" && (
                  <div className="space-y-3">
                    {currentQuestion.answers?.map((answer) => (
                      <div key={answer.id} className="flex items-center gap-2">
                        <Button
                          variant={answer.isCorrect ? "default" : "outline"}
                          size="icon"
                          className="h-8 w-8 shrink-0"
                          onClick={() => handleCorrectAnswerChange(answer.id)}
                          title={answer.isCorrect ? "Correct answer" : "Mark as correct"}
                        >
                          {answer.isCorrect && <Check className="h-4 w-4" />}
                        </Button>
                        <Input
                          value={answer.text}
                          onChange={(e) => handleAnswerChange(answer.id, e.target.value)}
                          placeholder={`Answer option ${answer.id.toUpperCase()}`}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {currentQuestion.type === "true-false" && (
                  <div className="space-y-3">
                    {currentQuestion.answers?.map((answer) => (
                      <div key={answer.id} className="flex items-center gap-2">
                        <Button
                          variant={answer.isCorrect ? "default" : "outline"}
                          size="icon"
                          className="h-8 w-8 shrink-0"
                          onClick={() => handleCorrectAnswerChange(answer.id)}
                          title={answer.isCorrect ? "Correct answer" : "Mark as correct"}
                        >
                          {answer.isCorrect && <Check className="h-4 w-4" />}
                        </Button>
                        <Input
                          value={answer.text}
                          readOnly
                          className="bg-muted cursor-not-allowed"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {currentQuestion.type === "fill-blank" && (
                  <div className="space-y-3">
                    <Label>Correct Answer</Label>
                    <Input
                      value={currentQuestion.answers?.[0]?.text || ""}
                      onChange={(e) => handleAnswerChange("a", e.target.value)}
                      placeholder="Enter the correct answer"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="explanation">Explanation (Optional)</Label>
                <Textarea
                  id="explanation"
                  name="explanation"
                  value={currentQuestion.explanation}
                  onChange={handleQuestionChange}
                  placeholder="Explain why the answer is correct (will be shown after answering)"
                  rows={2}
                />
              </div>

              <Button onClick={addQuestion} className="w-full gap-2">
                <Plus className="h-4 w-4" /> Add Question
              </Button>
            </CardContent>
          </Card>

          {/* Questions List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Questions ({quiz.questions?.length || 0})
            </h3>

            {quiz.questions && quiz.questions.length > 0 ? (
              <div className="space-y-3">
                {quiz.questions.map((question, index) => (
                  <Card key={question.id} className="overflow-hidden">
                    <div className="flex items-center p-4 border-b">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-3">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-sm">{question.text}</h4>
                        <div className="flex gap-2 mt-1">
                          <span className="badge badge-purple text-xs">
                            {question.type.replace("-", " ")}
                          </span>
                          <span className="badge badge-blue text-xs">
                            {question.points} pts
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => moveQuestion(question.id, "up")}
                          disabled={index === 0}
                        >
                          <ArrowUp className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => moveQuestion(question.id, "down")}
                          disabled={index === quiz.questions.length - 1}
                        >
                          <ArrowDown className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-quiz-red hover:text-quiz-red"
                          onClick={() => removeQuestion(question.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No questions added yet</p>
              </Card>
            )}
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("details")}>
              Back to Details
            </Button>
            <Button
              onClick={() => setActiveTab("preview")}
              disabled={!quiz.questions || quiz.questions.length === 0}
            >
              Next: Preview & Save
            </Button>
          </div>
        </TabsContent>

        {/* Preview Tab */}
        <TabsContent value="preview" className="space-y-6">
          <Card className="overflow-hidden">
            <div className={`h-32 bg-gradient-to-br ${quiz.thumbnailColor} flex items-center justify-center`}>
              <h2 className="text-2xl font-bold text-white">{quiz.title || "Quiz Title"}</h2>
            </div>
            <CardContent className="mt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Description</h3>
                <p className="text-muted-foreground">
                  {quiz.description || "No description provided"}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Category</h3>
                  <p>{quiz.category || "Not specified"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Difficulty</h3>
                  <p className="capitalize">{quiz.difficulty}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {quiz.tags && quiz.tags.length > 0 ? (
                    quiz.tags.map((tag) => (
                      <span key={tag} className="badge badge-purple">
                        {tag}
                      </span>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No tags specified</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Questions Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                    <span>Total questions</span>
                    <span className="font-medium">{quiz.questions?.length || 0}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                    <span>Total points</span>
                    <span className="font-medium">
                      {quiz.questions?.reduce((sum, q) => sum + q.points, 0) || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                    <span>Estimated time</span>
                    <span className="font-medium">
                      {Math.ceil((quiz.questions?.reduce((sum, q) => sum + q.timeLimit, 0) || 0) / 60)} minutes
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("questions")}>
              Back to Questions
            </Button>
            <Button onClick={saveQuiz} disabled={!isQuizValid()} className="gap-2">
              <Save className="h-4 w-4" /> Save Quiz
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreateQuiz;
