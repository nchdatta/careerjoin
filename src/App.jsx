import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/ErrorPage/NotFound";
import Home from "./pages/home/Home";
import Job from "./pages/job/Job";
import Jobs from "./pages/jobs/Jobs";
import Recruiter from "./pages/Recruiter/Recruiter";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<Job />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
