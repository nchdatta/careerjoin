import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/ErrorPage/NotFound";
import Home from "./pages/home/Home";
import Job from "./pages/job/Job";
import Jobs from "./pages/jobs/Jobs";
import PostCV from "./pages/PostCV/PostCV";
import PostJob from "./pages/PostJob/PostJob";
import Packages from "./pages/Recruiter/pages/Packages";
import Recruiter from "./pages/Recruiter/Recruiter";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) { return <Loading /> }

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/recruiter/packages" element={<Packages />} />
          <Route path="/recruiter/post-job" element={<PostJob />} />
          <Route path="/post-cv" element={<PostCV />} />
          <Route path="/login" />
          <Route path="/profile/*" element={<Dashboard />} />
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
