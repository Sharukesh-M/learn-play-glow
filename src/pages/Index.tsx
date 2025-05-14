
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, BookOpen, Trophy, ChartBarIcon, GraduationCap } from "lucide-react";
import QuizCard from "@/components/quiz/QuizCard";
import { generateMockQuizzes, CATEGORIES } from "@/utils/mockData";
import { examSlots } from "@/pages/ExamSlots";
import ExamSlotCard from "@/components/exam/ExamSlotCard";

const Index = () => {
  const [quizzes] = useState(generateMockQuizzes());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      (selectedCategory === "All" || quiz.category === selectedCategory) &&
      (quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Get popular exam slots (those with fewer available seats)
  const popularExamSlots = [...examSlots]
    .sort((a, b) => a.availableSeats - b.availableSeats)
    .slice(0, 3);

  // Filter entrance exam slots
  const entranceExams = examSlots.filter(slot => 
    ["JEE", "NEET", "CAT", "GATE"].includes(slot.examType)
  ).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-16">
        <div className="rounded-3xl gradient-bg py-12 px-8 md:py-16 md:px-12 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Learn, Play, Create <br className="hidden sm:block" />
            <span className="bg-white text-primary px-2 rounded">Interactive Quizzes</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Create engaging quizzes, challenge your friends, and track your progress
            with our interactive learning platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/create">
                <Plus className="mr-2 h-4 w-4" />
                Create Quiz
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="bg-primary/20 border border-white/20" asChild>
              <Link to="/my-quizzes">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Quizzes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search quizzes..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All Categories</SelectItem>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Exam Slots Section */}
      <section className="mb-12 pb-6 border-b">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <GraduationCap className="mr-2 h-5 w-5" />
            Upcoming Exams
          </h2>
          <Button variant="outline" asChild>
            <Link to="/exam-slots">View All Exams</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {entranceExams.map((slot) => (
            <ExamSlotCard key={slot.id} slot={slot} />
          ))}
        </div>
      </section>

      {/* Quiz Tabs */}
      <section>
        <Tabs defaultValue="featured" className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Explore Quizzes</h2>
            <TabsList>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured" className="mt-0">
            {filteredQuizzes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No quizzes found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="popular" className="mt-0">
            {filteredQuizzes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No quizzes found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[...filteredQuizzes]
                  .sort((a, b) => b.timesPlayed - a.timesPlayed)
                  .map((quiz) => (
                    <QuizCard key={quiz.id} quiz={quiz} />
                  ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="new" className="mt-0">
            {filteredQuizzes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No quizzes found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[...filteredQuizzes]
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                  )
                  .map((quiz) => (
                    <QuizCard key={quiz.id} quiz={quiz} />
                  ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>

      {/* Features Section */}
      <section className="mt-16 mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Why QuizMaster?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="quiz-card text-center p-6 flex flex-col items-center">
            <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create & Share</h3>
            <p className="text-muted-foreground">
              Create interactive quizzes with multiple question types and share them with your class or friends.
            </p>
          </div>

          <div className="quiz-card text-center p-6 flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-quiz-green to-green-400 flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Compete & Learn</h3>
            <p className="text-muted-foreground">
              Challenge yourself with timed quizzes, earn points, and climb the leaderboard as you learn.
            </p>
          </div>

          <div className="quiz-card text-center p-6 flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-quiz-blue to-blue-400 flex items-center justify-center mb-4">
              <ChartBarIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-muted-foreground">
              Monitor your learning journey with detailed statistics and progress tracking for each subject.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
