import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => (
  <nav className="bg-black text-white p-5 flex justify-between items-center shadow-lg fixed w-full z-10">
    <h1 className="text-3xl font-bold tracking-wide">Sambit's Portfolio</h1>
    <div className="space-x-6 text-lg">
      <Link className="hover:text-gray-400" to="/">Home</Link>
      <Link className="hover:text-gray-400" to="/projects">Projects</Link>
      <Link className="hover:text-gray-400" to="/certifications">Certifications</Link>
      <Link className="hover:text-gray-400" to="/experience">Experience</Link>
    </div>
  </nav>
);

const Home = () => (
  <motion.div className="p-20 text-white bg-gray-900 min-h-screen flex flex-col items-center text-center justify-center"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <img src="WhatsApp Image 2025-03-26 at 9.06.31 PM.jpeg" alt="Profile" className="rounded-full mb-6 shadow-lg w-40 h-40" />
    <h2 className="text-5xl font-extrabold">Sambit Kumar Ghosh</h2>
    <p className="mt-6 text-xl max-w-3xl">Software Developer proficient in Java, JavaScript, C++, and PHP with expertise in ReactJS, NodeJS, and database management.</p>
  </motion.div>
);

const Projects = () => (
  <div className="p-20 text-white bg-gray-900 min-h-screen">
    <h2 className="text-4xl font-bold text-center">Projects</h2>
    <ul className="mt-10 space-y-6 text-lg text-center">
      <li className="bg-gray-800 p-6 rounded-lg shadow-md">CRUD Website - A full-stack CRUD application for managing data efficiently. (Tech: ReactJS, NodeJS, MongoDB)</li>
      <li className="bg-gray-800 p-6 rounded-lg shadow-md">Note App - A digital note-taking web app with user authentication. (Tech: ReactJS, Firebase)</li>
      <li className="bg-gray-800 p-6 rounded-lg shadow-md">Bookmark Manager - A web-based app for organizing and managing bookmarks. (Tech: PHP, MySQL)</li>
    </ul>
  </div>
);

const Certifications = () => (
  <div className="p-20 text-white bg-gray-900 min-h-screen">
    <h2 className="text-4xl font-bold text-center">Certifications</h2>
    <ul className="mt-10 space-y-6 text-lg text-center">
      <li className="bg-gray-800 p-6 rounded-lg shadow-md">Full-Stack Web Development - Cypher School</li>
      <li className="bg-gray-800 p-6 rounded-lg shadow-md">Cloud Computing - NPTEL</li>
      <li className="bg-gray-800 p-6 rounded-lg shadow-md">Data Structures & Algorithms - Udemy</li>
    </ul>
  </div>
);

const Experience = () => (
  <div className="p-20 text-white bg-gray-900 min-h-screen">
    <h2 className="text-4xl font-bold text-center">Experience</h2>
    <ul className="mt-10 space-y-6 text-lg text-center">
      <li className="bg-gray-800 p-6 rounded-lg shadow-md">Software Developer Intern - Cypher School (Developed Full-Stack Applications)</li>
      <li className="bg-gray-800 p-6 rounded-lg shadow-md">Community Service - Dr. Shambhunath Singh Research Foundation</li>
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-black text-white p-6 text-center">
    <p>&copy; 2025 Sambit Kumar Ghosh | Software Developer | Passionate about creating efficient digital solutions.</p>
  </footer>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
