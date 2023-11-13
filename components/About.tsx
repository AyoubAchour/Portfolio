"use client";
import React from "react";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 13,
        duration: 0.5,
        delay: 0.6,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3 text-left space-y-6 leading-8 text-lg ]">
        <p>
          🚀 A passionate problem-solver on the path to becoming a{" "}
          <span className="font-medium">Software Engineer</span>. <br />
          My core stack is React, Next.js, Node.js, MongoDB. <br />
          I am also familiar with TypeScript and Prisma. <br />
        </p>
        <p>
          💡 The thrill of cracking code puzzles fuels my journey, and I'm
          always hungry to learn new technologies, Beyond coding, I find joy in
          gaming, movies, and books. <br />
        </p>
        <p>
          🌟 Open to exciting opportunities, I'm ready to turn challenges into
          code masterpieces. Let's create something extraordinary together!
        </p>
      </div>
    </motion.section>
  );
};

export default About;
