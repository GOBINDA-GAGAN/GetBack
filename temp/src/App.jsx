import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage"
import DashboardPage from "./pages/DashboardPage"
import DashboardLayout from "./layouts/DashboardLayout";
import InterviewPage from "./pages/InterviewPage";
import IinterviewSetupPage from "./pages/IinterviewSetupPage";

function App() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Dashboard Pages */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/interview-setup" element={<IinterviewSetupPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Route>

    </Routes>
  );
}

export default App;