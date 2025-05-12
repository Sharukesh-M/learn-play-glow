
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Trophy, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Create Quiz", path: "/create" },
    { name: "My Quizzes", path: "/my-quizzes" },
    { name: "Leaderboards", path: "/leaderboards" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-muted">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-xl">
              Q
            </div>
            <div className="font-quiz-heading font-semibold text-xl hidden sm:block">
              <span>Quiz</span>
              <span className="text-primary">Master</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium text-sm hover:text-primary transition-colors ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Menu & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden sm:flex" asChild>
              <Link to="/create">
                <BookOpen className="mr-2 h-4 w-4" />
                Create Quiz
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="User menu">
              <User className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all ${
            isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-4">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium text-sm hover:text-primary transition-colors ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
