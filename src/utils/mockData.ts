
import { Quiz, QuestionType } from "../types/quiz";

// Updated categories to include entrance exam subjects
export const CATEGORIES = [
  "Science", "Math", "History", "Geography", "Language", 
  "Technology", "Sports", "Entertainment", "Art", "Literature",
  "Physics", "Chemistry", "Biology", "Computer Science", "Economics",
  "General Knowledge", "Aptitude", "Reasoning", "English", "Current Affairs"
];

// Updated tags to include exam types
export const TAGS = [
  "K-12", "College", "Professional", "Trivia", "Fun",
  "Science", "Math", "History", "Geography", "Language",
  "Technology", "Sports", "Entertainment", "Art", "Literature",
  "UPSC", "NEET", "JEE", "CAT", "IELTS", "GATE", "GRE", "GMAT"
];

// Updated with exam subcategories
export const EXAM_QUESTION_BANKS = {
  "UPSC": ["History", "Geography", "Economics", "Current Affairs", "General Knowledge"],
  "NEET": ["Biology", "Physics", "Chemistry"],
  "JEE": ["Physics", "Chemistry", "Math"],
  "CAT": ["Quantitative Aptitude", "Verbal Ability", "Logical Reasoning", "Data Interpretation"],
  "IELTS": ["Reading", "Writing", "Speaking", "Listening"],
  "GATE": ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"]
};

// Sample questions by subject
const SAMPLE_QUESTIONS = {
  "Physics": [
    "What is Newton's First Law of Motion?",
    "Define electric potential difference.",
    "What is the principle of conservation of energy?",
    "Explain Bernoulli's principle.",
    "What is the difference between scalar and vector quantities?",
    "How does a transformer work?",
    "Explain the photoelectric effect.",
    "What is the Doppler effect?",
    "Define gravitational potential energy.",
    "What is Faraday's law of electromagnetic induction?"
  ],
  "Chemistry": [
    "What is the periodic law?",
    "Define acid-base neutralization.",
    "What is the difference between organic and inorganic compounds?",
    "Explain the concept of pH.",
    "What is the octet rule?",
    "Define redox reactions.",
    "What is the difference between covalent and ionic bonds?",
    "Explain Le Chatelier's principle.",
    "What is the Aufbau principle?",
    "Define isomerism in organic chemistry."
  ],
  "Biology": [
    "What is photosynthesis?",
    "Explain the process of mitosis.",
    "What is the function of DNA?",
    "Define homeostasis.",
    "What is natural selection?",
    "Explain the structure of a cell membrane.",
    "What is the difference between arteries and veins?",
    "Define gene expression.",
    "What is the role of enzymes in digestion?",
    "Explain the process of cellular respiration."
  ],
  "Math": [
    "What is the Pythagorean theorem?",
    "Define integration in calculus.",
    "What is a prime number?",
    "Explain the concept of probability.",
    "What is the difference between permutation and combination?",
    "Define logarithmic functions.",
    "What is a polynomial equation?",
    "Explain the concept of matrices.",
    "What is the difference between mean, median, and mode?",
    "Define complex numbers."
  ],
  "History": [
    "What were the main causes of World War I?",
    "Who was Alexander the Great?",
    "Explain the significance of the Industrial Revolution.",
    "What led to the fall of the Roman Empire?",
    "Who was Mahatma Gandhi?",
    "Describe the French Revolution.",
    "What was the Renaissance period?",
    "Who were the key figures in the American Civil Rights Movement?",
    "What was the Cold War?",
    "Explain the significance of the Silk Road in ancient trade."
  ],
  "General Knowledge": [
    "What is the capital of Australia?",
    "Who wrote 'To Kill a Mockingbird'?",
    "Which is the largest ocean on Earth?",
    "What is the currency of Japan?",
    "Who painted the Mona Lisa?",
    "What is the tallest mountain in the world?",
    "Who is the founder of Microsoft?",
    "What is the chemical symbol for gold?",
    "Which planet is known as the Red Planet?",
    "Who was the first person to step on the Moon?"
  ]
};

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
      questions: generateRandomizedQuestions("Science", 5),
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
      questions: generateRandomizedQuestions("History", 8),
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
      questions: generateRandomizedQuestions("Math", 10),
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
      questions: generateRandomizedQuestions("Entertainment", 6),
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
      questions: generateRandomizedQuestions("Geography", 7),
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
      questions: generateRandomizedQuestions("Technology", 9),
      isPublic: true,
      thumbnailColor: "from-violet-500 to-purple-500"
    },
    // New entrance exam quizzes
    {
      id: "7",
      title: "JEE Physics Practice",
      description: "Prepare for JEE with these physics questions",
      category: "Physics",
      difficulty: "hard",
      createdBy: "JEE Coach",
      createdAt: new Date(2023, 10, 5).toISOString(),
      timesPlayed: 1826,
      averageScore: 58,
      tags: ["Physics", "JEE", "Educational"],
      questions: generateRandomizedQuestions("Physics", 10),
      isPublic: true,
      thumbnailColor: "from-blue-600 to-indigo-600"
    },
    {
      id: "8",
      title: "NEET Biology Concepts",
      description: "Essential biology concepts for NEET preparation",
      category: "Biology",
      difficulty: "hard",
      createdBy: "NEET Mentor",
      createdAt: new Date(2023, 9, 15).toISOString(),
      timesPlayed: 1542,
      averageScore: 62,
      tags: ["Biology", "NEET", "Educational"],
      questions: generateRandomizedQuestions("Biology", 10),
      isPublic: true,
      thumbnailColor: "from-green-600 to-teal-600"
    },
    {
      id: "9",
      title: "UPSC General Knowledge",
      description: "Test your general knowledge for UPSC preparation",
      category: "General Knowledge",
      difficulty: "medium",
      createdBy: "UPSC Explorer",
      createdAt: new Date(2023, 11, 3).toISOString(),
      timesPlayed: 2103,
      averageScore: 64,
      tags: ["General Knowledge", "UPSC", "Current Affairs"],
      questions: generateRandomizedQuestions("General Knowledge", 10),
      isPublic: true,
      thumbnailColor: "from-yellow-500 to-amber-500"
    },
    {
      id: "10",
      title: "CAT Quantitative Aptitude",
      description: "Sharpen your quantitative skills for CAT exam",
      category: "Math",
      difficulty: "hard",
      createdBy: "MBA Prep",
      createdAt: new Date(2023, 8, 22).toISOString(),
      timesPlayed: 1320,
      averageScore: 56,
      tags: ["Math", "CAT", "Aptitude"],
      questions: generateRandomizedQuestions("Math", 10),
      isPublic: true,
      thumbnailColor: "from-purple-600 to-pink-600"
    }
  ];
};

function generateRandomizedQuestions(category: string, count: number) {
  const questions = [];
  const questionTypes: QuestionType[] = ['multiple-choice', 'true-false', 'fill-blank'];
  
  // Use sample questions if available for the category, otherwise use generic
  const questionPool = SAMPLE_QUESTIONS[category as keyof typeof SAMPLE_QUESTIONS] || 
    [`Sample ${category} Question 1`, `Sample ${category} Question 2`, `Sample ${category} Question 3`,
     `Sample ${category} Question 4`, `Sample ${category} Question 5`, `Sample ${category} Question 6`,
     `Sample ${category} Question 7`, `Sample ${category} Question 8`, `Sample ${category} Question 9`,
     `Sample ${category} Question 10`];
  
  // Shuffle the question pool to randomize questions each time
  const shuffledQuestions = [...questionPool].sort(() => Math.random() - 0.5);
  
  for (let i = 1; i <= count; i++) {
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    const questionText = shuffledQuestions[(i - 1) % shuffledQuestions.length];
    
    questions.push({
      id: `${category.toLowerCase()}-q${Math.floor(Math.random() * 1000)}`,
      type,
      text: questionText,
      points: Math.floor(Math.random() * 3 + 1) * 100,
      timeLimit: Math.floor(Math.random() * 3 + 1) * 15,
      answers: generateMockAnswers(type),
      explanation: `Explanation for this ${category} question about ${questionText.toLowerCase()}`,
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
