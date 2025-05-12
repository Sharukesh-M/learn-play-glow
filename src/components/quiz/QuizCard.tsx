
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/types/quiz";

interface QuizCardProps {
  quiz: Quiz;
  showStats?: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, showStats = true }) => {
  return (
    <Card className="quiz-card overflow-hidden h-full flex flex-col">
      <div className={`h-28 bg-gradient-to-br ${quiz.thumbnailColor} mb-4 -mx-6 -mt-6 flex items-center justify-center`}>
        <h3 className="text-white text-xl font-bold line-clamp-2 px-4 text-center">{quiz.title}</h3>
      </div>
      
      <div className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{quiz.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          <Badge variant="outline" className="text-xs">
            {quiz.category}
          </Badge>
          <Badge variant="outline" className="text-xs capitalize">
            {quiz.difficulty}
          </Badge>
          {quiz.tags.slice(0, 1).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {showStats && (
          <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{quiz.questions.length} questions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{quiz.timesPlayed} plays</span>
            </div>
            <div className="flex items-center gap-1.5 col-span-2">
              <BarChart className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{quiz.averageScore}% avg score</span>
            </div>
          </div>
        )}
      </div>
      
      <Button asChild className="w-full gap-2 mt-4">
        <Link to={`/play/${quiz.id}`}>
          <Play className="h-4 w-4" /> Play Quiz
        </Link>
      </Button>
    </Card>
  );
};

export default QuizCard;
