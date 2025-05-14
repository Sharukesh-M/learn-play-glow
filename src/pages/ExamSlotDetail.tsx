
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, GraduationCap, ArrowLeft, MapPin, Users, AlertCircle, CheckCircle } from "lucide-react";
import { examSlots } from "./ExamSlots";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ExamSlotDetail: React.FC = () => {
  const { slotId } = useParams<{ slotId: string }>();
  const slot = examSlots.find(s => s.id === slotId);

  if (!slot) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <AlertCircle className="h-12 w-12 text-destructive mb-4" />
        <h1 className="text-2xl font-bold mb-4">Exam Slot Not Found</h1>
        <p className="text-muted-foreground mb-6">The exam slot you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/exam-slots">Browse All Exam Slots</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link to="/exam-slots" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to All Exam Slots
          </Link>
        </Button>

        <Badge className="mb-4 bg-primary/10 text-primary border-0">
          {slot.examType}
        </Badge>
        <h1 className="text-3xl font-bold mb-2">{slot.name}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {slot.tags.map(tag => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8 overflow-hidden">
            <AspectRatio ratio={16/9} className="bg-muted">
              {slot.imageUrl ? (
                <img 
                  src={slot.imageUrl} 
                  alt={slot.name} 
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop";
                  }}
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-muted">
                  <ImageIcon className="h-24 w-24 text-muted-foreground/50" />
                </div>
              )}
            </AspectRatio>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Exam Details</h2>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex gap-3 items-start">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">{slot.date}</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium">{slot.time}</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{slot.location}</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Available Seats</p>
                    <p className="font-medium">{slot.availableSeats} seats</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-bold mb-2">Registration Deadline</h3>
                <p className="text-muted-foreground mb-2">You must register before <span className="font-medium text-foreground">{slot.registrationDeadline}</span> to participate in this exam.</p>
                
                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Important Notice</p>
                      <p className="text-sm text-muted-foreground">Participants must bring valid ID and admission card to the exam center. No electronic devices are allowed during the examination.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Exam Description</h2>
              <p className="text-muted-foreground mb-4">
                This comprehensive {slot.examType} examination is designed to test candidates' knowledge and understanding 
                of key concepts and applications. The exam format includes multiple choice questions, short answers, 
                and problem-solving sections.
              </p>
              
              <h3 className="font-bold mt-4 mb-2">Preparation Resources</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Official exam syllabus and guidelines</li>
                <li>Practice tests and sample questions</li>
                <li>Study materials and reference books</li>
                <li>Online tutorials and video lectures</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Book Your Slot</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Exam Fee</span>
                  <span className="font-medium">₹1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Registration Fee</span>
                  <span className="font-medium">₹300</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">₹1,500</span>
                </div>
              </div>
              
              <Button className="w-full mb-4">Book Now</Button>
              <Button variant="outline" className="w-full mb-6">Add to Wishlist</Button>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Instant Confirmation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free Rescheduling Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Study Materials Included</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExamSlotDetail;
