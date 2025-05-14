
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ExamSlotCard, { ExamSlot } from "@/components/exam/ExamSlotCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, BookOpen, GraduationCap, FileSearch } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample exam slot data with realistic images
const examSlots: ExamSlot[] = [
  {
    id: "upsc-cse-2025",
    examType: "UPSC",
    name: "Civil Services Examination 2025",
    date: "June 15, 2025",
    time: "9:30 AM - 12:30 PM",
    location: "Multiple Centers Across India",
    availableSeats: 245,
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "February 28, 2025",
    tags: ["Civil Services", "IAS", "IPS", "IFS"]
  },
  {
    id: "upsc-ese-2025",
    examType: "UPSC",
    name: "Engineering Services Examination 2025",
    date: "July 5, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Multiple Centers Across India",
    availableSeats: 189,
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "March 15, 2025",
    tags: ["Engineering", "ESE", "Technical"]
  },
  {
    id: "upsc-cms-2025",
    examType: "UPSC",
    name: "Combined Medical Services 2025",
    date: "August 10, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Multiple Centers Across India",
    availableSeats: 165,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "April 20, 2025",
    tags: ["Medical", "Healthcare", "Doctor"]
  },
  {
    id: "cat-2025",
    examType: "CAT",
    name: "Common Admission Test 2025",
    date: "November 28, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Multiple Centers Across India",
    availableSeats: 312,
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1471&auto=format&fit=crop",
    registrationDeadline: "September 20, 2025",
    tags: ["MBA", "Management", "IIM"]
  },
  {
    id: "cat-iift-2025",
    examType: "CAT",
    name: "IIFT MBA Entrance Exam 2025",
    date: "December 5, 2025",
    time: "10:00 AM - 12:30 PM",
    location: "Multiple Centers Across India",
    availableSeats: 178,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "October 15, 2025",
    tags: ["MBA", "International Business", "IIFT"]
  },
  {
    id: "gate-2025-cse",
    examType: "GATE",
    name: "Computer Science and Engineering 2025",
    date: "February 8, 2025",
    time: "9:30 AM - 12:30 PM",
    location: "Multiple Centers Across India",
    availableSeats: 276,
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "October 15, 2024",
    tags: ["Engineering", "Computer Science", "IT"]
  },
  {
    id: "gate-2025-eee",
    examType: "GATE",
    name: "Electrical Engineering 2025",
    date: "February 9, 2025",
    time: "2:30 PM - 5:30 PM",
    location: "Multiple Centers Across India",
    availableSeats: 198,
    imageUrl: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "October 15, 2024",
    tags: ["Engineering", "Electrical", "Electronics"]
  },
  {
    id: "gate-2025-civil",
    examType: "GATE",
    name: "Civil Engineering 2025",
    date: "February 10, 2025",
    time: "9:30 AM - 12:30 PM",
    location: "Multiple Centers Across India",
    availableSeats: 210,
    imageUrl: "https://images.unsplash.com/photo-1581092787765-e3feb951d987?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "October 15, 2024",
    tags: ["Engineering", "Civil", "Construction"]
  },
  {
    id: "gate-2025-mech",
    examType: "GATE",
    name: "Mechanical Engineering 2025",
    date: "February 11, 2025",
    time: "2:30 PM - 5:30 PM",
    location: "Multiple Centers Across India",
    availableSeats: 230,
    imageUrl: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "October 15, 2024",
    tags: ["Engineering", "Mechanical", "Manufacturing"]
  },
  {
    id: "ielts-jan-2025",
    examType: "IELTS",
    name: "IELTS Academic January 2025",
    date: "January 12, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "British Council Centers",
    availableSeats: 120,
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1528&auto=format&fit=crop",
    registrationDeadline: "December 1, 2024",
    tags: ["English Proficiency", "Academic", "Study Abroad"]
  },
  {
    id: "ielts-feb-2025",
    examType: "IELTS",
    name: "IELTS General Training February 2025",
    date: "February 8, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "IDP Education Centers",
    availableSeats: 85,
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "January 5, 2025",
    tags: ["English Proficiency", "Immigration", "Work Visa"]
  },
  {
    id: "ielts-computer-jan-2025",
    examType: "IELTS",
    name: "IELTS Computer-Based Test January 2025",
    date: "January 25, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "British Council Digital Centers",
    availableSeats: 95,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "December 20, 2024",
    tags: ["English Proficiency", "Computer-Based", "Digital"]
  },
  {
    id: "gmat-jan-2025",
    examType: "GMAT",
    name: "Graduate Management Admission Test",
    date: "January 20, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Pearson VUE Test Centers",
    availableSeats: 145,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "December 20, 2024",
    tags: ["MBA", "Business School", "Management"]
  },
  {
    id: "gmat-feb-2025",
    examType: "GMAT",
    name: "GMAT Focus Edition February 2025",
    date: "February 15, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Pearson VUE Test Centers",
    availableSeats: 120,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "January 15, 2025",
    tags: ["MBA", "Business School", "Focus Edition"]
  },
  {
    id: "toefl-jan-2025",
    examType: "TOEFL",
    name: "TOEFL iBT January 2025",
    date: "January 18, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "ETS Authorized Test Centers",
    availableSeats: 130,
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "December 18, 2024",
    tags: ["English Proficiency", "International Students", "USA"]
  }
];

const ExamSlots: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExamType, setSelectedExamType] = useState<string>("all");
  
  const filteredSlots = examSlots.filter(slot => {
    const matchesSearch = slot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          slot.examType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          slot.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedExamType === "all" || slot.examType === selectedExamType;
    
    return matchesSearch && matchesType;
  });
  
  // Get unique exam types for filter dropdown
  const examTypes = ["all", ...Array.from(new Set(examSlots.map(slot => slot.examType)))];

  // Get today's date for upcoming filter
  const today = new Date();
  const upcomingSlots = examSlots
    .filter(slot => new Date(slot.date) > today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 6);

  // Popular exams based on fewer available seats (high demand)
  const popularSlots = [...examSlots]
    .sort((a, b) => a.availableSeats - b.availableSeats)
    .slice(0, 6);

  // Newly added (we'll simulate this based on registration deadline being recent)
  const newlyAddedSlots = [...examSlots]
    .sort((a, b) => 
      new Date(b.registrationDeadline).getTime() - new Date(a.registrationDeadline).getTime()
    )
    .slice(0, 6);

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-3">Exam Slots</h1>
          <p className="text-muted-foreground mb-2 max-w-2xl">
            Find and book slots for upcoming competitive exams including UPSC, CAT, GATE, IELTS, and more.
            Register early to secure your preferred testing location and date.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {Array.from(new Set(examSlots.map(slot => slot.examType))).map(type => (
              <Badge 
                key={type} 
                variant={selectedExamType === type ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedExamType(type === selectedExamType ? "all" : type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Calendar View</span>
          </Button>
          <Button className="flex items-center gap-2">
            <FileSearch className="h-4 w-4" />
            <span>Find Centers</span>
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for exams, subjects, or locations..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedExamType} onValueChange={setSelectedExamType}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Exam type" />
          </SelectTrigger>
          <SelectContent>
            {examTypes.map(type => (
              <SelectItem key={type} value={type}>
                {type === "all" ? "All Exam Types" : type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="bg-muted/30 p-4 rounded-lg mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-3 rounded-full">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold">Latest Exam Updates</h3>
            <p className="text-sm text-muted-foreground">New UPSC and GATE dates announced</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-3 rounded-full">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold">Exam Preparation</h3>
            <p className="text-sm text-muted-foreground">Access study materials and mock tests</p>
          </div>
        </div>
        <Button variant="outline" className="shrink-0">View All Resources</Button>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Exams</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="new">Newly Added</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlots.length > 0 ? (
              filteredSlots.map(slot => (
                <ExamSlotCard key={slot.id} slot={slot} />
              ))
            ) : (
              <p className="text-muted-foreground col-span-full text-center py-12">
                No exam slots match your search criteria
              </p>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingSlots.map(slot => (
              <ExamSlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="popular" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularSlots.map(slot => (
              <ExamSlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="new" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newlyAddedSlots.map(slot => (
              <ExamSlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 bg-muted/30 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Need Help Finding the Right Exam?</h3>
        <p className="mb-4 max-w-2xl mx-auto text-muted-foreground">
          Our expert counselors can guide you through the exam selection process based on your career goals and academic background.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Schedule a Consultation</Button>
          <Button variant="outline">View Exam FAQs</Button>
        </div>
      </div>
    </div>
  );
};

export default ExamSlots;
