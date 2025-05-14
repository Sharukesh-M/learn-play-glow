
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, GraduationCap, ImageIcon, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

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

// Function to get color based on exam type
const getExamTypeColors = (examType: string): { bg: string, border: string, badge: string } => {
  switch (examType) {
    case "UPSC":
      return { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-100 text-blue-700 hover:bg-blue-200" };
    case "CAT":
      return { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-700 hover:bg-purple-200" };
    case "GATE":
      return { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" };
    case "IELTS":
      return { bg: "bg-orange-50", border: "border-orange-200", badge: "bg-orange-100 text-orange-700 hover:bg-orange-200" };
    case "GMAT":
      return { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-700 hover:bg-amber-200" };
    case "TOEFL":
      return { bg: "bg-cyan-50", border: "border-cyan-200", badge: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200" };
    case "Physics":
      return { bg: "bg-red-50", border: "border-red-200", badge: "bg-red-100 text-red-700 hover:bg-red-200" };
    case "Chemistry":
      return { bg: "bg-green-50", border: "border-green-200", badge: "bg-green-100 text-green-700 hover:bg-green-200" };
    case "Biology":
      return { bg: "bg-lime-50", border: "border-lime-200", badge: "bg-lime-100 text-lime-700 hover:bg-lime-200" };
    case "Mathematics":
      return { bg: "bg-indigo-50", border: "border-indigo-200", badge: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200" };
    case "History":
      return { bg: "bg-rose-50", border: "border-rose-200", badge: "bg-rose-100 text-rose-700 hover:bg-rose-200" };
    case "GK":
      return { bg: "bg-yellow-50", border: "border-yellow-200", badge: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" };
    case "NEET":
      return { bg: "bg-pink-50", border: "border-pink-200", badge: "bg-pink-100 text-pink-700 hover:bg-pink-200" };
    case "JEE":
      return { bg: "bg-sky-50", border: "border-sky-200", badge: "bg-sky-100 text-sky-700 hover:bg-sky-200" };
    default:
      return { bg: "bg-slate-50", border: "border-slate-200", badge: "bg-primary/10 text-primary hover:bg-primary/20" };
  }
};

const ExamSlotCard: React.FC<ExamSlotCardProps> = ({ slot }) => {
  const colors = getExamTypeColors(slot.examType);
  
  return (
    <Card className={cn("overflow-hidden h-full flex flex-col transition-all hover:shadow-md", colors.bg, colors.border)}>
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
          <Badge className={cn("mb-2 border-0", colors.badge)}>
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
          <div className={cn("mb-4 rounded-md p-3", colors.bg, "border", colors.border)}>
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
            <Button asChild size="sm" className={slot.examType === "NEET" || slot.examType === "JEE" ? "bg-pink-600 hover:bg-pink-700" : ""}>
              <Link to={`/exam-slots/${slot.id}`}>Book Slot</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExamSlotCard;
