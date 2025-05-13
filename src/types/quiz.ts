
export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple-choice',
  TRUE_FALSE = 'true-false',
  FILL_BLANK = 'fill-blank'
}

export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  points: number;
  timeLimit: number; // in seconds
  answers: Answer[];
  explanation?: string;
  image?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  createdBy: string;
  createdAt: Date | string;
  timesPlayed: number;
  averageScore: number;
  tags: string[];
  questions: Question[];
  isPublic: boolean;
  thumbnailColor: string;
}

export interface QuizResult {
  quizId: string;
  userId: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeTaken: number; // in seconds
  completedAt: Date | string;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  score: number;
  position: number;
  completedAt: Date | string;
}
