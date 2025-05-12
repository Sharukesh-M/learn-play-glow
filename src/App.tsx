
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import CreateQuiz from "./pages/CreateQuiz";
import PlayQuiz from "./pages/PlayQuiz";
import Leaderboards from "./pages/Leaderboards";
import MyQuizzes from "./pages/MyQuizzes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/create" element={<CreateQuiz />} />
            <Route path="/play/:quizId" element={<PlayQuiz />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
            <Route path="/my-quizzes" element={<MyQuizzes />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
