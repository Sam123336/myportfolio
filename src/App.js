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
    <p className="mt-6 text-xl max-w-3xl">Passionate Software Developer with expertise in Full-Stack Development, Web Technologies, and Problem Solving. Eager to innovate and build impactful digital solutions.</p>
  </motion.div>
);

const Projects = () => (
  <div className="p-20 text-white bg-gray-900 min-h-screen">
    <h2 className="text-4xl font-bold text-center">Projects</h2>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[ 
        { title: "Bookmark Manager", desc: "A web-based application for saving and organizing bookmarks efficiently.", link: "https://github.com/Sam123336/BookmarkManager" },
        { title: "Social Media App", desc: "Built using Node.js and MongoDB, featuring image and video uploads.", link: "https://sapp-2gfz.onrender.com" },
        { title: "Car Rental System", desc: "A React-based application with real-time car listing and booking.", link: "https://github.com/Sam123336/CarRental" }
      ].map((project, index) => (
        <motion.div 
          key={index} 
          className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <motion.p className="mt-4 text-lg text-gray-300" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
            {project.desc}
          </motion.p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-400 hover:underline">
            View Project
          </a>
        </motion.div>
      ))}
    </div>
  </div>
);

const Certifications = () => (
  <div className="p-20 text-white bg-gray-900 min-h-screen">
    <h2 className="text-4xl font-bold text-center">Certifications</h2>
    <ul className="mt-10 space-y-6 text-lg text-center">
      <li className="bg-gray-800 p-6 rounded-lg shadow-md">Full-Stack Web Development - Cipher Schools</li>
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
    <p>&copy; 2025 Sambit Kumar Ghosh | Software Developer | Passionate about building impactful web solutions.</p>
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
