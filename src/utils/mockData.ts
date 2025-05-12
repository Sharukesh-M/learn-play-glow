
import { Quiz, QuestionType } from "../types/quiz";

export const CATEGORIES = [
  "Science", "Math", "History", "Geography", "Language", 
  "Technology", "Sports", "Entertainment", "Art", "Literature"
];

export const TAGS = [
  "K-12", "College", "Professional", "Trivia", "Fun",
  "Science", "Math", "History", "Geography", "Language",
  "Technology", "Sports", "Entertainment", "Art", "Literature"
];

export const generateMockQuizzes = (): Quiz[] => {
  return [
    {
      id: "1",
      title: "Basic Science Quiz",
      description: "Test your knowledge of fundamental scientific concepts",
      category: "Science",
      difficulty: "easy",
      createdBy: "Science Teacher",
      createdAt: new Date(2023, 4, 15).toISOString(),
      timesPlayed: 1245,
      averageScore: 78,
      tags: ["Science", "K-12", "Educational"],
      questions: generateMockQuestions("Science", 5),
      isPublic: true,
      thumbnailColor: "from-purple-500 to-indigo-500"
    },
    {
      id: "2",
      title: "World History Trivia",
      description: "Challenge yourself with these world history questions",
      category: "History",
      difficulty: "medium",
      createdBy: "History Buff",
      createdAt: new Date(2023, 5, 22).toISOString(),
      timesPlayed: 873,
      averageScore: 65,
      tags: ["History", "Educational", "Trivia"],
      questions: generateMockQuestions("History", 8),
      isPublic: true,
      thumbnailColor: "from-amber-500 to-red-500"
    },
    {
      id: "3",
      title: "Math Challenge",
      description: "Put your mathematical skills to the test",
      category: "Math",
      difficulty: "hard",
      createdBy: "Math Professor",
      createdAt: new Date(2023, 6, 10).toISOString(),
      timesPlayed: 562,
      averageScore: 52,
      tags: ["Math", "Challenge", "Educational"],
      questions: generateMockQuestions("Math", 10),
      isPublic: true,
      thumbnailColor: "from-blue-500 to-cyan-500"
    },
    {
      id: "4",
      title: "Pop Culture Quiz",
      description: "How well do you know modern pop culture?",
      category: "Entertainment",
      difficulty: "easy",
      createdBy: "Entertainment Weekly",
      createdAt: new Date(2023, 7, 5).toISOString(),
      timesPlayed: 2341,
      averageScore: 81,
      tags: ["Entertainment", "Fun", "Trivia"],
      questions: generateMockQuestions("Entertainment", 6),
      isPublic: true,
      thumbnailColor: "from-pink-500 to-rose-500"
    },
    {
      id: "5",
      title: "Geography Quiz",
      description: "Test your knowledge of world geography",
      category: "Geography",
      difficulty: "medium",
      createdBy: "Globe Trotter",
      createdAt: new Date(2023, 8, 12).toISOString(),
      timesPlayed: 945,
      averageScore: 68,
      tags: ["Geography", "Educational", "K-12"],
      questions: generateMockQuestions("Geography", 7),
      isPublic: true,
      thumbnailColor: "from-green-500 to-emerald-500"
    },
    {
      id: "6",
      title: "Tech Knowledge Test",
      description: "Are you up to date with the latest technology?",
      category: "Technology",
      difficulty: "medium",
      createdBy: "Tech Geek",
      createdAt: new Date(2023, 9, 8).toISOString(),
      timesPlayed: 789,
      averageScore: 72,
      tags: ["Technology", "Professional", "Educational"],
      questions: generateMockQuestions("Technology", 9),
      isPublic: true,
      thumbnailColor: "from-violet-500 to-purple-500"
    }
  ];
};

function generateMockQuestions(category: string, count: number) {
  const questions = [];
  const questionTypes: QuestionType[] = ['multiple-choice', 'true-false', 'fill-blank'];

  for (let i = 1; i <= count; i++) {
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    questions.push({
      id: `${category.toLowerCase()}-q${i}`,
      type,
      text: `Sample ${category} Question ${i}`,
      points: Math.floor(Math.random() * 3 + 1) * 100,
      timeLimit: Math.floor(Math.random() * 3 + 1) * 15,
      answers: generateMockAnswers(type),
      explanation: `Explanation for ${category} question ${i}`,
    });
  }
  
  return questions;
}

function generateMockAnswers(type: QuestionType) {
  if (type === 'true-false') {
    return [
      { id: 't', text: 'True', isCorrect: Math.random() > 0.5 },
      { id: 'f', text: 'False', isCorrect: Math.random() <= 0.5 }
    ];
  } else if (type === 'multiple-choice') {
    const correctIndex = Math.floor(Math.random() * 4);
    return Array(4).fill(null).map((_, index) => ({
      id: String.fromCharCode(97 + index),
      text: `Option ${String.fromCharCode(65 + index)}`,
      isCorrect: index === correctIndex
    }));
  } else {
    // For fill-blank questions, only provide the correct answer
    return [
      { id: 'a', text: 'Correct answer for fill in the blank', isCorrect: true }
    ];
  }
}

export const generateMockLeaderboard = () => {
  const leaderboard = [];
  const usernames = [
    "QuizMaster123", "BrainiacLearner", "KnowledgeSeeker", "QuizWhiz", 
    "TriviaStar", "LearningHero", "WisdomChaser", "SmartCookie", 
    "QuizChamp", "GeniusLearner"
  ];
  
  for (let i = 0; i < 10; i++) {
    leaderboard.push({
      userId: `user-${i + 1}`,
      username: usernames[i],
      score: Math.floor(Math.random() * 5000) + 5000,
      position: i + 1,
      completedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
    });
  }
  
  // Sort by score descending
  return leaderboard.sort((a, b) => b.score - a.score);
};
