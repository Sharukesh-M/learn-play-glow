
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-muted py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                Q
              </div>
              <div className="font-quiz-heading font-semibold text-lg">
                <span>Quiz</span>
                <span className="text-primary">Master</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Create, share, and play interactive quizzes. Learn through fun gamification and track your progress.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/create" className="text-sm hover:text-primary transition-colors">
                Create Quiz
              </Link>
              <Link to="/leaderboards" className="text-sm hover:text-primary transition-colors">
                Leaderboards
              </Link>
              <Link to="/my-quizzes" className="text-sm hover:text-primary transition-colors">
                My Quizzes
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Have questions or feedback? Contact us at:
            </p>
            <p className="text-sm text-primary mt-2">support@quizmaster.com</p>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} QuizMaster. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
