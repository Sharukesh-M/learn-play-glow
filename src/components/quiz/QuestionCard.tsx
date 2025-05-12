
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Question, Answer } from "@/types/quiz";
import { CheckCircle2, XCircle } from "lucide-react";

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

  const handleChange = (value: string) => {
    onAnswerSelected(value);
  };

  const handleFillBlankSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnswerSelected(fillBlankAnswer);
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
                className={`answer-option ${
                  showCorrectAnswer && answer.isCorrect
                    ? "correct"
                    : showCorrectAnswer && selectedAnswerId === answer.id && !answer.isCorrect
                    ? "incorrect"
                    : selectedAnswerId === answer.id
                    ? "selected"
                    : ""
                }`}
              >
                <RadioGroupItem value={answer.id} id={answer.id} className="peer sr-only" />
                <Label
                  htmlFor={answer.id}
                  className="flex-grow cursor-pointer flex items-center justify-between"
                >
                  <span>{answer.text}</span>
                  {showCorrectAnswer && answer.isCorrect && <CheckCircle2 className="h-5 w-5 text-quiz-green" />}
                  {showCorrectAnswer && selectedAnswerId === answer.id && !answer.isCorrect && <XCircle className="h-5 w-5 text-quiz-red" />}
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
                className={`answer-option ${
                  showCorrectAnswer && answer.isCorrect
                    ? "correct"
                    : showCorrectAnswer && selectedAnswerId === answer.id && !answer.isCorrect
                    ? "incorrect"
                    : selectedAnswerId === answer.id
                    ? "selected"
                    : ""
                }`}
              >
                <RadioGroupItem value={answer.id} id={answer.id} className="peer sr-only" />
                <Label
                  htmlFor={answer.id}
                  className="flex-grow cursor-pointer flex items-center justify-between"
                >
                  <span>{answer.text}</span>
                  {showCorrectAnswer && answer.isCorrect && <CheckCircle2 className="h-5 w-5 text-quiz-green" />}
                  {showCorrectAnswer && selectedAnswerId === answer.id && !answer.isCorrect && <XCircle className="h-5 w-5 text-quiz-red" />}
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
              disabled={showCorrectAnswer}
            />
            {showCorrectAnswer && (
              <div className="text-sm font-medium">
                <span className="mr-2">Correct answer:</span>
                <span className="text-quiz-green">{question.answers[0]?.text}</span>
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
          <div className="badge badge-purple">{question.type.replace('-', ' ')}</div>
          <div className="badge badge-blue">{question.points} pts</div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{question.text}</h3>
        {question.image && <img src={question.image} alt="Question" className="mb-4 rounded-lg max-w-full h-auto" />}
      </div>

      {renderQuestionByType()}

      {showCorrectAnswer && question.explanation && (
        <div className="mt-6 p-4 rounded-lg bg-muted/50 text-sm">
          <p className="font-semibold mb-1">Explanation:</p>
          <p>{question.explanation}</p>
        </div>
      )}
    </Card>
  );
};

export default QuestionCard;
