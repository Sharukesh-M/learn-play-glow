
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ExamSlotCard, { ExamSlot } from "@/components/exam/ExamSlotCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

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
  }
];

const ExamSlots: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExamType, setSelectedExamType] = useState<string>("all");
  
  const filteredSlots = examSlots.filter(slot => {
    const matchesSearch = slot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          slot.examType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedExamType === "all" || slot.examType === selectedExamType;
    
    return matchesSearch && matchesType;
  });
  
  // Get unique exam types for filter dropdown
  const examTypes = ["all", ...Array.from(new Set(examSlots.map(slot => slot.examType)))];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-3">Exam Slots</h1>
      <p className="text-muted-foreground mb-6">
        Find and book slots for upcoming competitive exams including UPSC, CAT, GATE, IELTS, and more
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for exams..."
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
            {filteredSlots.slice(0, 4).map(slot => (
              <ExamSlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="popular" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlots.slice(2, 6).map(slot => (
              <ExamSlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="new" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlots.slice(4, 8).map(slot => (
              <ExamSlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExamSlots;
