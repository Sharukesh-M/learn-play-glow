
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Layout from './components/Layout';
import Index from './pages/Index';
import PlayQuiz from './pages/PlayQuiz';
import CreateQuiz from './pages/CreateQuiz';
import MyQuizzes from './pages/MyQuizzes';
import Leaderboards from './pages/Leaderboards';
import NotFound from './pages/NotFound';
import ExamSlots from './pages/ExamSlots';
import ExamSlotDetail from './pages/ExamSlotDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: 'play/:quizId', element: <PlayQuiz /> },
      { path: 'create', element: <CreateQuiz /> },
      { path: 'my-quizzes', element: <MyQuizzes /> },
      { path: 'leaderboards', element: <Leaderboards /> },
      { path: 'exam-slots', element: <ExamSlots /> },
      { path: 'exam-slots/:slotId', element: <ExamSlotDetail /> },
      { path: '*', element: <NotFound /> }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
