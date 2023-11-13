"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      delay: index * 0.06,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 "
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            className="bg-white border border-black/[0.1] rounded-xl py-3 px-5 dark:bg-gray-700 dark:text-white/80"
            key={index}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
