"use client";

import React from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/solid";

import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Button from "@components/Button";

interface Milestone {
  year: string;
  title: string;
  description: string;
  details: string;
  achievements: string[];
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    year: "2023-Present",
    title: "Full-Stack Developer at Proof of ID",
    description: "Delivered SaaS solutions with a focus on efficiency and innovation.",
    details:
      "Optimized applications, reducing render times by 30%, while building scalable software.",
    achievements: ["Reduced render times by 30%.", "Built scalable SaaS software solutions."],
    icon: <BriefcaseIcon className="h-10 w-10 text-green-500" />,
  },
  {
    year: "2023",
    title: "Completed Postgraduate Certificate in Web Design and Development",
    description: "Humber College, Toronto",
    details:
      "Strengthened skills in web design and multimedia, focusing on front-end and responsive development techniques.",
    achievements: [
      "Learned advanced responsive development techniques.",
      "Specialized in multimedia design.",
    ],
    icon: <AcademicCapIcon className="h-10 w-10 text-blue-500" />,
  },
  {
    year: "2022",
    title: "University Innovation Fellow at Stanford University",
    description: "Fostered innovation and entrepreneurship.",
    details:
      "Participated in the Stanford UIF program. Organized workshops and developed interdisciplinary projects impacting the university ecosystem.",
    achievements: [
      "Organized workshops on innovation.",
      "Developed impactful interdisciplinary projects.",
    ],
    icon: <SparklesIcon className="h-10 w-10 text-purple-500" />,
  },
  {
    year: "2021-2023",
    title: "Frontend Developer at BitsProof",
    description: "Enhanced user interface designs and optimized task completion speeds.",
    details:
      "Collaborated with cross-functional teams to improve UI and enhance productivity.",
    achievements: ["Improved UI designs.", "Optimized task completion speeds by 20%."],
    icon: <BriefcaseIcon className="h-10 w-10 text-yellow-500" />,
  },
  {
    year: "2021",
    title: "Graduated from Saint Joseph University",
    description: "Earned a BA in Computer Science with a Minor in Business.",
    details:
      "Graduated with a strong foundation in programming, algorithms, and business principles. Actively engaged in student initiatives and innovation programs.",
    achievements: [
      "Actively participated in student initiatives and innovation programs.",
    ],
    icon: <AcademicCapIcon className="h-10 w-10 text-pink-500" />,
  },
  {
    year: "2020",
    title: "Full-Stack Developer at CMA CGM",
    description: "Developed a Virtual Business Card management system for HR.",
    details:
      "Automated workflows and created a seamless interface for employees.",
    achievements: [
      "Automated HR workflows.",
      "Created a virtual business card management system.",
    ],
    icon: <BriefcaseIcon className="h-10 w-10 text-purple-500" />,
  },
  {
    year: "2019",
    title: "Co-Founder and CEO of UChange Community",
    description: "Founded a junior enterprise to address student challenges.",
    details:
      "Led initiatives, including networking events and mentorship programs, in collaboration with the USJ Alumni Federation.",
    achievements: [
      "Organized mentorship programs.",
      "Strengthened the university community.",
      "Inspired student-led projects.",
    ],
    icon: <RocketLaunchIcon className="h-10 w-10 text-teal-500" />,
  },
  {
    year: "2019",
    title: "Co-Founder of Likalo App",
    description: "Designed and developed a tourism app connecting travelers with local guides.",
    details:
      "Enabled locals to monetize knowledge while offering tourists authentic cultural experiences.",
    achievements: [
      "Designed a tourism app.",
      "Enabled locals to monetize knowledge.",
      "Provided authentic cultural experiences to tourists.",
    ],
    icon: <RocketLaunchIcon className="h-10 w-10 text-blue-500" />,
  },
  {
    year: "2019",
    title: "Assistant Sales and Project Manager at Netiks International",
    description: "Coordinated project timelines and implemented CI/CD pipelines.",
    details:
      "Demonstrated teamwork and problem-solving capabilities across multiple projects.",
    achievements: ["Implemented CI/CD pipelines.", "Coordinated project timelines."],
    icon: <BriefcaseIcon className="h-10 w-10 text-orange-500" />,
  },
];

const SnapshotTimeline: React.FC = () => {
  return (
    <div className="relative w-full px-6">
      {/* Header Section */}
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto py-12 px-6"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue-primary)] to-[var(--pink-primary)]">
          <TextGeneratedEffect words="Milestones in the Making..."/>
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-[var(--color-gray-darker)]">
        From curious beginnings to crafting innovative solutions, this timeline showcases 
        the key moments that shaped my journey as a developer and entrepreneur. Dive into 
        the highlights that define where I&apos;ve been and where I&apos;m headed.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative max-w-5xl mx-auto flex flex-col px-6">
        {/* Left-Aligned Vertical Line */}
        <div className="absolute left-[60px] h-full w-1 bg-gradient-to-b from-blue-500 via-pink-500 to-transparent"></div>

        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="relative flex items-center gap-8 mb-12"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center bg-gray-800 p-4 rounded-full shadow-lg">
                {milestone.icon}
              </div>
            </div>

            {/* Milestone Content */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-gray-800 text-sm text-left h-[100%] sm:max-w-[150px]">
                {milestone.year}
                <h3 className="text-gray-900 text-lg font-semibold">{milestone.title}</h3>
              </span>
              <div>
                <p className="text-gray-700 text-sm text-start">{milestone.description}</p>
                {milestone.achievements.length > 0 && (
                  <ul className="text-gray-500 text-sm mt-2">
                    {milestone.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <span className="text-gray-400">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center flex-col items-center gap-4 mt-6">
        <p className="mt-2 italic text-[var(--color-gray-darker)] text-center">
          Have a story to add?
          <br />
          Explore the journey and uncover the innovations behind the code.
        </p>
        <Button
          text="Let’s create something together"
          variant="secondary"
          link="/contact" />
      </div>
    </div>
  );
};

export default SnapshotTimeline;
