
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Search, Plus, Edit, Copy, Trash2 } from "lucide-react";
import QuizCard from "@/components/quiz/QuizCard";
import { generateMockQuizzes, CATEGORIES } from "@/utils/mockData";
import { toast } from "sonner";
import { Quiz } from "@/types/quiz";

const MyQuizzes = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(generateMockQuizzes());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quizToDelete, setQuizToDelete] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      (selectedCategory === "All" || quiz.category === selectedCategory) &&
      (quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const draftQuizzes = filteredQuizzes.filter(quiz => !quiz.isPublic);
  const publishedQuizzes = filteredQuizzes.filter(quiz => quiz.isPublic);

  const handleDelete = (quizId: string) => {
    // In a real app, you would delete the quiz from the backend
    setQuizzes(quizzes.filter(quiz => quiz.id !== quizId));
    setQuizToDelete(null);
    toast.success("Quiz deleted successfully!");
  };

  const handleDuplicate = (quizId: string) => {
    // Find the quiz to duplicate
    const quizToDuplicate = quizzes.find(quiz => quiz.id === quizId);
    
    if (quizToDuplicate) {
      // Create a new quiz with a new ID and slightly modified title
      const newQuiz = {
        ...quizToDuplicate,
        id: `q-${Date.now()}`,
        title: `${quizToDuplicate.title} (Copy)`,
        createdAt: new Date().toISOString(),
        timesPlayed: 0,
      };
      
      // Add the new quiz to the list
      setQuizzes([...quizzes, newQuiz]);
      toast.success("Quiz duplicated successfully!");
    }
  };

  const renderQuizGrid = (quizList: Quiz[]) => {
    if (quizList.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground mb-6">
            No quizzes found matching your search
          </p>
          <Button asChild>
            <Link to="/create">Create your first quiz</Link>
          </Button>
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {quizList.map((quiz) => (
          <div key={quiz.id} className="group relative">
            <QuizCard quiz={quiz} />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 rounded-2xl">
              <Button variant="secondary" size="sm" asChild>
                <Link to={`/create?edit=${quiz.id}`}>
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Link>
              </Button>
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => handleDuplicate(quiz.id)}
              >
                <Copy className="h-4 w-4 mr-1" /> Copy
              </Button>
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={() => setQuizToDelete(quiz.id)}
              >
                <Trash2 className="h-4 w-4 mr-1" /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">My Quizzes</h1>
          <p className="text-muted-foreground">
            Manage, edit, and share your created quizzes
          </p>
        </div>
        <Button asChild>
          <Link to="/create">
            <Plus className="mr-2 h-4 w-4" /> Create Quiz
          </Link>
        </Button>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search your quizzes..."
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
            <SelectItem value="All">All Categories</SelectItem>
            {CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          {renderQuizGrid(filteredQuizzes)}
        </TabsContent>

        <TabsContent value="drafts" className="mt-0">
          {draftQuizzes.length > 0 ? (
            renderQuizGrid(draftQuizzes)
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                You don't have any draft quizzes
              </p>
              <p className="text-muted-foreground mb-6">
                Start creating a new quiz to save as draft
              </p>
              <Button asChild>
                <Link to="/create">Create Quiz</Link>
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="published" className="mt-0">
          {publishedQuizzes.length > 0 ? (
            renderQuizGrid(publishedQuizzes)
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                You don't have any published quizzes
              </p>
              <p className="text-muted-foreground mb-6">
                Publish your quizzes to see them here
              </p>
              <Button asChild>
                <Link to="/create">Create Quiz</Link>
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      {/* Confirmation Dialog for Delete */}
      <AlertDialog open={!!quizToDelete} onOpenChange={() => setQuizToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this quiz?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the quiz
              and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => quizToDelete && handleDelete(quizToDelete)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MyQuizzes;
