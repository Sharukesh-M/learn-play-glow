import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Question, Answer } from "@/types/quiz";
import { CheckCircle2, XCircle, Info, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuestionCardProps {
  question: Question;
  onAnswerSelected: (answerId: string) => void;
  showCorrectAnswer?: boolean;
  selectedAnswerId?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswerSelected,
  showCorrectAnswer = false,
  selectedAnswerId = "",
}) => {
  const [fillBlankAnswer, setFillBlankAnswer] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset fill blank answer when question changes
  useEffect(() => {
    setFillBlankAnswer("");
    setIsSubmitting(false);
    setShowExplanation(false);
  }, [question.id]);

  const handleChange = (value: string) => {
    onAnswerSelected(value);
  };

  const handleFillBlankSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fillBlankAnswer.trim()) {
      setIsSubmitting(true);
      onAnswerSelected(fillBlankAnswer);
    }
  };

  const renderQuestionByType = () => {
    switch (question.type) {
      case "multiple-choice":
        return (
          <RadioGroup
            value={selectedAnswerId}
            onValueChange={handleChange}
            className="space-y-3"
          >
            {question.answers.map((answer) => (
              <div
                key={answer.id}
                className={`answer-option rounded-lg p-3 border border-input hover:bg-accent transition-colors cursor-pointer ${
                  showCorrectAnswer && answer.isCorrect
                    ? "bg-green-50 border-green-300"
                    : showCorrectAnswer && selectedAnswerId === answer.id && !answer.isCorrect
                    ? "bg-red-50 border-red-300"
                    : selectedAnswerId === answer.id
                    ? "bg-blue-50 border-blue-300"
                    : ""
                }`}
                onClick={() => handleChange(answer.id)}
              >
                <RadioGroupItem value={answer.id} id={answer.id} className="peer sr-only" />
                <Label
                  htmlFor={answer.id}
                  className="flex-grow cursor-pointer flex items-center justify-between"
                >
                  <span>{answer.text}</span>
                  {showCorrectAnswer && answer.isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                  {showCorrectAnswer && selectedAnswerId === answer.id && !answer.isCorrect && <XCircle className="h-5 w-5 text-red-600" />}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case "true-false":
        return (
          <RadioGroup
            value={selectedAnswerId}
            onValueChange={handleChange}
            className="space-y-3"
          >
            {question.answers.map((answer) => (
              <div
                key={answer.id}
                className={`answer-option rounded-lg p-3 border border-input hover:bg-accent transition-colors cursor-pointer ${
                  showCorrectAnswer && answer.isCorrect
                    ? "bg-green-50 border-green-300"
                    : showCorrectAnswer && selectedAnswerId === answer.id && !answer.isCorrect
                    ? "bg-red-50 border-red-300"
                    : selectedAnswerId === answer.id
                    ? "bg-blue-50 border-blue-300"
                    : ""
                }`}
                onClick={() => handleChange(answer.id)}
              >
                <RadioGroupItem value={answer.id} id={answer.id} className="peer sr-only" />
                <Label
                  htmlFor={answer.id}
                  className="flex-grow cursor-pointer flex items-center justify-between"
                >
                  <span>{answer.text}</span>
                  {showCorrectAnswer && answer.isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                  {showCorrectAnswer && selectedAnswerId === answer.id && !answer.isCorrect && <XCircle className="h-5 w-5 text-red-600" />}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case "fill-blank":
        return (
          <form onSubmit={handleFillBlankSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Type your answer here..."
              value={fillBlankAnswer}
              onChange={(e) => setFillBlankAnswer(e.target.value)}
              className="w-full"
              disabled={showCorrectAnswer || isSubmitting}
              autoFocus
            />
            {!showCorrectAnswer && !isSubmitting && (
              <Button 
                type="submit" 
                className="w-full mt-2"
                disabled={!fillBlankAnswer.trim()}
              >
                Submit Answer
              </Button>
            )}
            {isSubmitting && !showCorrectAnswer && (
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-300 mt-3">
                <p className="font-medium">Your answer: <span className="text-blue-700">{selectedAnswerId}</span></p>
              </div>
            )}
            {showCorrectAnswer && (
              <div className="p-3 rounded-lg bg-green-50 border border-green-300 mt-3">
                <p className="font-medium flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-600" />
                  Correct answer:
                </p>
                <p className="text-green-700 mt-1">{question.answers[0]?.text}</p>
                
                {selectedAnswerId && selectedAnswerId.toLowerCase() !== question.answers[0]?.text.toLowerCase() && (
                  <div className="mt-2 p-2 bg-red-50 rounded">
                    <p className="font-medium flex items-center">
                      <XCircle className="h-4 w-4 mr-2 text-red-600" />
                      Your answer:
                    </p>
                    <p className="text-red-700">{selectedAnswerId}</p>
                  </div>
                )}
              </div>
            )}
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="rounded-xl p-6 shadow-md bg-white">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs font-medium">
            {question.type.replace('-', ' ')}
          </div>
          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
            {question.points} pts
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{question.text}</h3>
        {question.image && <img src={question.image} alt="Question" className="mb-4 rounded-lg max-w-full h-auto" />}
      </div>

      {renderQuestionByType()}

      {showCorrectAnswer && question.explanation && (
        <div className="mt-6">
          <Button 
            variant="outline" 
            className="flex items-center text-sm w-full justify-center"
            onClick={() => setShowExplanation(!showExplanation)}
          >
            <Info className="h-4 w-4 mr-2" />
            {showExplanation ? "Hide Explanation" : "Show Explanation"}
          </Button>
          
          {showExplanation && (
            <div className="mt-3 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm">
              <p className="font-semibold mb-1">Explanation:</p>
              <p className="text-gray-700">{question.explanation}</p>
            </div>
          )}
        </div>
      )}

      {(question.type === "fill-blank" && selectedAnswerId && !showCorrectAnswer) && (
        <div className="mt-4 flex justify-center">
          <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            Answer submitted
          </div>
        </div>
      )}
    </Card>
  );
};

export default QuestionCard;
