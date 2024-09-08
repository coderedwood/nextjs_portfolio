"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectsSection from "./ProjectsSection";
import { motion, useInView, AnimatePresence, animate } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      bullletText: "01",
      title: "OldHarbourNews.com",
      role: "Website Admin &nbsp; • &nbsp; Support",
      description:
        "A news site that is dedicated to providing news about Old Harbour and other areas of Jamaica to Jamaica and the Jamaican diaspora",
      contentType: "Website",
      imageUrl: "/images/projects/macbook_ohn.png",
      gitUrl: "",
      projectUrl: "https://www.oldharbournews.com/",
    },
    {
      id: 2,
      bullletText: "02",
      title: "DrKurtWaulFoundation.com",
      role: "Website Admin &nbsp; • &nbsp; Support",
      description: "Deployed site for a foundation",
      contentType: "Website",
      imageUrl: "/images/projects/macbook_DKWF.png",
      gitUrl: "",
      projectUrl: "https://www.drkurtwaulfoundation.com",
    },
    {
      id: 3,
      bullletText: "03",
      title: "Urgedservices.com",
      role: "Website Admin &nbsp; • &nbsp; Support",
      description:
        "Collaborative development on a commercial food delivery service website",
      contentType: "Website &nbsp; • &nbsp; Delivery App",
      imageUrl: "/images/projects/macbook_urged.png",
      gitUrl: "https://github.com/jammelOSjohnson/urgedinternational.com",
      projectUrl: "https://urgedservices.com",
    },
  ];
  return (
    <>
      {projectData.slice(0, 1).map((project) => (
        <ProjectsSection key={project.id} project={project} />
      ))}
    </>
  );
};

export default Projects;
