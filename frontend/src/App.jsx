import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage"
import DashboardPage from "./pages/DashboardPage"
import DashboardLayout from "./layouts/DashboardLayout";
import InterviewPage from "./pages/InterviewPage";
import IinterviewSetupPage from "./pages/IinterviewSetupPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import { QuizSetupPage } from "./pages/QuizSetupPage";
import { QuizPage } from "./pages/QuizPage";

function App() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Dashboard Pages */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/quiz-setup" element={<QuizSetupPage />} />
        <Route path="/quiz" element={<QuizPage />} />

        <Route path="/interview-setup" element={<IinterviewSetupPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />

        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Route>

    </Routes>
  );
}

export default App;