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
export const examSlots: ExamSlot[] = [
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
  },
  
  // Academic subject exam slots
  {
    id: "physics-olympiad-2025",
    examType: "Physics",
    name: "International Physics Olympiad 2025",
    date: "April 15, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Science Academy Centers",
    availableSeats: 85,
    imageUrl: "https://images.unsplash.com/photo-1636466497217-26a42372455b?q=80&w=1974&auto=format&fit=crop",
    registrationDeadline: "February 28, 2025",
    tags: ["Physics", "Olympiad", "Competition", "Science"]
  },
  {
    id: "physics-board-2025",
    examType: "Physics",
    name: "Advanced Physics Board Examination",
    date: "May 10, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "National Testing Centers",
    availableSeats: 120,
    imageUrl: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?q=80&w=2070&auto=format&fit=crop",
    registrationDeadline: "April 1, 2025",
    tags: ["Physics", "Board Exam", "Advanced Level"]
  },
  {
    id: "chemistry-olympiad-2025",
    examType: "Chemistry",
    name: "National Chemistry Olympiad 2025",
    date: "March 25, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Chemistry Research Centers",
    availableSeats: 95,
    imageUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070&auto=format&fit=crop",
    registrationDeadline: "January 31, 2025",
    tags: ["Chemistry", "Olympiad", "Competition", "Science"]
  },
  {
    id: "chemistry-board-2025",
    examType: "Chemistry",
    name: "Organic Chemistry Certification",
    date: "June 5, 2025",
    time: "9:30 AM - 12:30 PM",
    location: "University Chemical Labs",
    availableSeats: 75,
    imageUrl: "https://images.unsplash.com/photo-1616969233920-9eea88b87555?q=80&w=1964&auto=format&fit=crop",
    registrationDeadline: "May 1, 2025",
    tags: ["Chemistry", "Organic", "Certification"]
  },
  {
    id: "biology-olympiad-2025",
    examType: "Biology",
    name: "International Biology Olympiad 2025",
    date: "April 20, 2025",
    time: "9:00 AM - 12:30 PM",
    location: "Life Sciences Centers",
    availableSeats: 110,
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2069&auto=format&fit=crop",
    registrationDeadline: "March 1, 2025",
    tags: ["Biology", "Olympiad", "Competition", "Life Sciences"]
  },
  {
    id: "biology-medical-2025",
    examType: "Biology",
    name: "Medical Biology Entrance Exam",
    date: "July 12, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Medical Universities",
    availableSeats: 200,
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop",
    registrationDeadline: "June 1, 2025",
    tags: ["Biology", "Medical", "Entrance Exam"]
  },
  {
    id: "math-olympiad-2025",
    examType: "Mathematics",
    name: "International Mathematical Olympiad 2025",
    date: "May 5, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Multiple Centers Worldwide",
    availableSeats: 90,
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    registrationDeadline: "March 15, 2025",
    tags: ["Mathematics", "Olympiad", "Competition"]
  },
  {
    id: "math-advanced-2025",
    examType: "Mathematics",
    name: "Advanced Mathematics Certification",
    date: "June 18, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "University Math Departments",
    availableSeats: 150,
    imageUrl: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1974&auto=format&fit=crop",
    registrationDeadline: "May 10, 2025",
    tags: ["Mathematics", "Advanced", "Certification"]
  },
  {
    id: "history-exam-2025",
    examType: "History",
    name: "World History Assessment 2025",
    date: "April 28, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Humanities Centers",
    availableSeats: 120,
    imageUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=2074&auto=format&fit=crop",
    registrationDeadline: "March 15, 2025",
    tags: ["History", "World History", "Assessment"]
  },
  {
    id: "history-arts-2025",
    examType: "History",
    name: "Art History Certification Exam",
    date: "May 25, 2025",
    time: "9:00 AM - 12:30 PM",
    location: "Fine Arts Institutes",
    availableSeats: 80,
    imageUrl: "https://images.unsplash.com/photo-1638609269267-f0128098a809?q=80&w=2000&auto=format&fit=crop",
    registrationDeadline: "April 15, 2025",
    tags: ["History", "Art History", "Certification"]
  },
  {
    id: "gk-exam-2025",
    examType: "GK",
    name: "General Knowledge Assessment 2025",
    date: "March 20, 2025",
    time: "10:00 AM - 12:30 PM",
    location: "Multiple Centers",
    availableSeats: 175,
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
    registrationDeadline: "February 15, 2025",
    tags: ["General Knowledge", "Current Affairs", "Assessment"]
  },
  {
    id: "gk-current-affairs-2025",
    examType: "GK",
    name: "Current Affairs & GK Competition",
    date: "June 8, 2025",
    time: "9:30 AM - 12:00 PM",
    location: "Civic Centers",
    availableSeats: 200,
    imageUrl: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop",
    registrationDeadline: "May 1, 2025",
    tags: ["General Knowledge", "Current Affairs", "Competition"]
  },
  
  // Adding NEET exam slots
  {
    id: "neet-2025-may",
    examType: "NEET",
    name: "National Eligibility cum Entrance Test 2025",
    date: "May 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Multiple Centers Across India",
    availableSeats: 180,
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop",
    registrationDeadline: "December 15, 2024",
    tags: ["Medical", "MBBS", "BDS", "AYUSH"],
    sampleQuestions: [
      {
        question: "The maximum work is obtained from a heat engine when the process is:",
        options: ["Isothermal", "Adiabatic", "Reversible", "Irreversible"]
      },
      {
        question: "Oxygen is carried by hemoglobin as:",
        options: ["Oxyhemoglobin", "Carboxyhemoglobin", "Carbaminohemoglobin", "Deoxyhemoglobin"]
      }
    ]
  },
  {
    id: "neet-2025-june",
    examType: "NEET",
    name: "NEET Special Session 2025",
    date: "June 10, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Multiple Centers Across India",
    availableSeats: 150,
    imageUrl: "https://images.unsplash.com/photo-1583911860284-88de8e798bdb?q=80&w=2070&auto=format&fit=crop",
    registrationDeadline: "April 30, 2025",
    tags: ["Medical", "MBBS", "BDS", "AYUSH"],
    sampleQuestions: [
      {
        question: "Which of the following hormones is a steroid?",
        options: ["Insulin", "Estrogen", "Oxytocin", "Glucagon"]
      },
      {
        question: "The functional unit of kidney is:",
        options: ["Neuron", "Nephron", "Axon", "Dendron"]
      }
    ]
  },
  
  // Adding JEE exam slots
  {
    id: "jee-main-2025-jan",
    examType: "JEE",
    name: "JEE Main January Session 2025",
    date: "January 15-31, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Computer-Based Test Centers",
    availableSeats: 220,
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    registrationDeadline: "November 30, 2024",
    tags: ["Engineering", "B.Tech", "B.Arch", "B.Planning"],
    sampleQuestions: [
      {
        question: "If vectors a, b, c are unit vectors such that a + b + c = 0, then the value of a·b + b·c + c·a is:",
        options: ["-3/2", "-2", "-1", "-1/2"]
      },
      {
        question: "The compound formed when ethyl magnesium bromide reacts with methanol is:",
        options: ["Ethane", "Methyl ethyl ether", "Ethanol", "Methane"]
      }
    ]
  },
  {
    id: "jee-advanced-2025",
    examType: "JEE",
    name: "JEE Advanced 2025",
    date: "June 1, 2025",
    time: "9:00 AM - 12:00 PM & 2:30 PM - 5:30 PM",
    location: "Selected Test Centers",
    availableSeats: 160,
    imageUrl: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1974&auto=format&fit=crop",
    registrationDeadline: "May 10, 2025",
    tags: ["IIT", "Advanced Engineering", "B.Tech"],
    sampleQuestions: [
      {
        question: "A particle is moving in a circular path of radius r with a constant speed v. The angular momentum of the particle about the center is:",
        options: ["mrv", "mr²v", "mv²r", "mv/r"]
      },
      {
        question: "The hybridization of carbon in fullerene (C₆₀) is:",
        options: ["sp", "sp²", "sp³", "dsp²"]
      }
    ]
  },
  
  // Adding additional CAT exam slots
  {
    id: "cat-2025-nov",
    examType: "CAT",
    name: "Common Admission Test November 2025",
    date: "November 28, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Multiple Centers Across India",
    availableSeats: 312,
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1471&auto=format&fit=crop",
    registrationDeadline: "September 20, 2025",
    tags: ["MBA", "Management", "IIM"],
    sampleQuestions: [
      {
        question: "If x² + y² = 25 and xy = 12, then the value of (x + y)² is:",
        options: ["25", "36", "49", "64"]
      },
      {
        question: "In a class of 60 students, 30 students passed in Mathematics, 32 passed in Physics and 24 passed in Chemistry. 12 students passed in Mathematics and Physics, 10 passed in Physics and Chemistry and 8 passed in Mathematics and Chemistry. If 6 students passed in all three subjects, then the number of students who failed in all three subjects is:",
        options: ["6", "8", "10", "12"]
      }
    ]
  },
  {
    id: "cat-xat-2025",
    examType: "CAT",
    name: "XAT Exam 2025",
    date: "January 5, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Multiple Centers Across India",
    availableSeats: 240,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    registrationDeadline: "December 10, 2024",
    tags: ["MBA", "XLRI", "Management"],
    sampleQuestions: [
      {
        question: "What is the difference between ethical decision-making and legal compliance?",
        options: ["They are the same", "Ethics focuses on what is right, while law focuses on what is legal", "Laws are more important than ethics", "Ethics are only relevant in philosophy"]
      }
    ]
  },
  
  // Adding additional GATE exam slots
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
    tags: ["Engineering", "Computer Science", "IT"],
    sampleQuestions: [
      {
        question: "Which of the following sorting algorithms has the best average-case time complexity?",
        options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"]
      },
      {
        question: "What is the time complexity of binary search algorithm?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"]
      }
    ]
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
    tags: ["Engineering", "Electrical", "Electronics"],
    sampleQuestions: [
      {
        question: "The thevenin equivalent voltage across terminals A and B is:",
        options: ["5V", "10V", "15V", "20V"]
      }
    ]
  },
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
            Find and book slots for upcoming exams including JEE, NEET, CAT, GATE, as well as 
            academic subjects like Physics, Chemistry, Biology, Mathematics, 
            History and General Knowledge.
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
            <p className="text-sm text-muted-foreground">New JEE and NEET dates announced</p>
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
          <TabsTrigger value="entrance">Entrance Exams</TabsTrigger>
          <TabsTrigger value="academic">Academic Subjects</TabsTrigger>
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
        
        <TabsContent value="entrance" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examSlots.filter(slot => 
              ["JEE", "NEET", "CAT", "GATE"].includes(slot.examType)
            ).map(slot => (
              <ExamSlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="academic" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examSlots.filter(slot => 
              ["Physics", "Chemistry", "Biology", "Mathematics", "History", "GK"].includes(slot.examType)
            ).map(slot => (
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
