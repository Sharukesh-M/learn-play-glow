
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface ExamSlot {
  id: string;
  examType: string;
  name: string;
  date: string;
  time: string;
  location: string;
  availableSeats: number;
  imageUrl: string;
  registrationDeadline: string;
  tags: string[];
}

interface ExamSlotCardProps {
  slot: ExamSlot;
}

const ExamSlotCard: React.FC<ExamSlotCardProps> = ({ slot }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <AspectRatio ratio={16/9} className="bg-muted">
        <div className="h-full w-full overflow-hidden">
          <img 
            src={slot.imageUrl} 
            alt={slot.name} 
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      </AspectRatio>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-3">
          <Badge className="mb-2 bg-primary/10 text-primary border-0 hover:bg-primary/20">
            {slot.examType}
          </Badge>
          <h3 className="text-lg font-bold line-clamp-2">{slot.name}</h3>
        </div>
        
        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{slot.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{slot.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <span>{slot.location}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="text-xs text-muted-foreground mb-2">
            Registration deadline: {slot.registrationDeadline}
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {slot.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">
              {slot.availableSeats} seats available
            </span>
            <Button asChild size="sm">
              <Link to={`/exam-slots/${slot.id}`}>Book Slot</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExamSlotCard;
