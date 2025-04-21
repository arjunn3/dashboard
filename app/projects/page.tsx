'use client'; // Marking this file as a client component

import React, { useState } from 'react';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const projectData = [
  {
    title: "Portfolio Website",
    tagline: "A personal website built to showcase my profile, skills, and projects with terminal-themed UI.",
    overview: "A personal portfolio designed using React, Tailwind CSS, and TypeScript to reflect my developer identity.",
    techStack: ["React", "Tailwind CSS", "TypeScript", "DaisyUI"],
    keyFeatures: [
      "Fully responsive design",
      "Terminal-inspired dashboard",
      "Interactive modals for resume, skills, and more",
      "Dark theme with green highlights",
      "Animated elements using Tailwind",
    ],
    howItWorks: "Visitors can navigate through terminal-like buttons to explore different sections like skills, resume, and experiences.",
    challenges: "Implementing consistent font styling across multiple modals was tricky, but customizing Tailwind and organizing components solved it.",
    learningOutcomes: "Learned about clean UI/UX principles, component-based structure in React, and dynamic styling using Tailwind and DaisyUI.",
  },
  {
    title: "Rental Management System using Blockchain",
    tagline: "Decentralized Rental System – A blockchain-based platform to streamline rental agreements securely.",
    overview: "Designed a smart contract to automate rental transactions, ensuring transparency, reduced fraud, and no middlemen.",
    techStack: ["Solidity", "Remix IDE", "Ethereum Blockchain"],
    keyFeatures: [
      "Smart contract for rental agreement",
      "Automatic payment mechanism",
      "Property verification via blockchain",
      "Immutable, tamper-proof transactions",
    ],
    howItWorks: "Landlords and tenants interact with smart contracts on Ethereum. Transactions are verified and executed based on predefined logic.",
    challenges: "Ensuring safety and accuracy in smart contract logic was crucial—solved by extensive testing in Remix IDE.",
    learningOutcomes: "Understood Ethereum architecture, Solidity programming, and how decentralized apps are structured.",
  },
  {
    title: "Water Body Detection Using Deep Learning Models from Remote Sensing",
    tagline: "Water Body Detector – Identifying water bodies from satellite imagery using AI.",
    overview: "A deep learning-based system that segments and classifies water bodies from remote sensing data for environmental monitoring and analysis.",
    techStack: ["Python", "ResNet50", "Random Forest", "Keras/TensorFlow"],
    keyFeatures: [
      "Hierarchical feature extraction",
      "Image segmentation using ResNet",
      "Classification improvement using Random Forest",
      "Automated data preprocessing pipeline",
    ],
    howItWorks: "Satellite images are passed through a ResNet model for segmentation, followed by classification using Random Forest.",
    challenges: "Data imbalance and noise were tackled using preprocessing and data augmentation techniques.",
    learningOutcomes: "Gained hands-on with deep learning architectures and learned how to fuse classical ML with CNNs for accuracy boosts.",
  },
  {
    title: "Hacker News",
    tagline: "HackerNews Server – A backend API for news stories inspired by Hacker News.",
    overview: "Created a backend clone of Hacker News using modern full-stack tools, enabling users to post, comment, and vote on stories.",
    techStack: ["Hono (Edge-first Web Framework)", "Node.js", "Prisma ORM", "SQLite"],
    keyFeatures: [
      "RESTful API with story/comment endpoints",
      "CRUD operations for users and posts",
      "Database modeled with Prisma",
      "Optimized for serverless and edge functions",
    ],
    howItWorks: "Users interact with APIs to add, fetch, and vote on posts. Prisma handles DB queries and Hono routes the logic.",
    challenges: "First-time using edge/serverless functions was confusing, but Hono's docs and examples helped structure it cleanly.",
    learningOutcomes: "Learned backend design patterns, Prisma schema modeling, and lightweight edge API frameworks.",
  },
  {
    title: "Project 5",
    tagline: "Something cool is on its way!",
    overview: "Stay tuned for this exciting project.",
    techStack: ["Coming soon..."],
    keyFeatures: ["Stay tuned..."],
    howItWorks: "Details coming soon!",
    challenges: "Stay tuned...",
    learningOutcomes: "Learning something new!",
  },
];

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState(1); // Example state to manage selected tab

  const renderProjectDetails = (project: typeof projectData[0]) => (
    <div>
      <h2 className={`text-3xl font-bold ${vt323.className} text-[#86C232]`}>{project.title}</h2>
      <p className="mt-4">
        <strong className='text-[#86C232]'>1. Project Title & Short Tagline:</strong><br />
        {project.tagline}
      </p>
      <p className="mt-4">
        <strong className='text-[#86C232]'>2. Overview:</strong><br />
        {project.overview}
      </p>
      <div className="mt-4">
        <strong className='text-[#86C232]'>3. Tech Stack:</strong>
        <ul className="list-disc list-inside ml-4">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <strong className='text-[#86C232]'>4. Key Features:</strong>
        <ol className="list-decimal list-inside ml-4">
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ol>
      </div>
      <p className="mt-4">
        <strong className='text-[#86C232]'>5. How It Works:</strong><br />
        {project.howItWorks}
      </p>
      <p className="mt-4">
        <strong className='text-[#86C232]'>6. Challenges & Solutions:</strong><br />
        {project.challenges}
      </p>
      <p className="mt-4">
        <strong className='text-[#86C232]'>7. Learning Outcomes:</strong><br />
        {project.learningOutcomes}
      </p>
    </div>
  );

  return (
    <div className="hero bg-black min-h-screen text-white">
      <div className="hero-content flex flex-col items-center justify-center text-center w-full px-4">
        <h1 className={`text-6xl md:text-7xl font-bold text-[#86C232] mb-10 ${vt323.className}`}>
          Projects
        </h1>

        <div className="tabs tabs-box mb-6 w-full sm:w-auto">
          {projectData.map((project, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                name="project_tabs"
                className="tab"
                aria-label={`Project ${index + 1}`}
                checked={selectedProject === index + 1}
                onChange={() => setSelectedProject(index + 1)}
              />
              <div className="tab-content bg-base-100 border-base-300 p-6 text-left">
                {selectedProject === index + 1 && renderProjectDetails(project)}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
