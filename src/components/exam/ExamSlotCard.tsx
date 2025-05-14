
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, GraduationCap, ImageIcon, FileText } from "lucide-react";
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
  sampleQuestions?: {
    question: string;
    options?: string[];
  }[];
}

interface ExamSlotCardProps {
  slot: ExamSlot;
}

const ExamSlotCard: React.FC<ExamSlotCardProps> = ({ slot }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <AspectRatio ratio={16/9} className="bg-muted">
        <div className="h-full w-full overflow-hidden">
          {slot.imageUrl ? (
            <img 
              src={slot.imageUrl} 
              alt={slot.name} 
              className="object-cover w-full h-full transition-transform hover:scale-105"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop";
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-muted">
              <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
            </div>
          )}
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
        
        {slot.sampleQuestions && slot.sampleQuestions.length > 0 && (
          <div className="mb-4 border rounded-md p-3 bg-muted/30">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Sample Question</span>
            </div>
            <p className="text-sm line-clamp-2">{slot.sampleQuestions[0].question}</p>
          </div>
        )}
        
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
