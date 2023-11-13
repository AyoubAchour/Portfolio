"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/ThemeContextProvider";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="" visible>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : " rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border:
                  theme === "light"
                    ? "1px solid rgba(0,0,0,0.05)"
                    : "0.4rem solid rgba(255,255,255,0.05)",
                textAlign: "left",
                padding: "1.3 rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid  #9ca3af",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize vertical-timeline-element-title">
                {experience.title}
              </h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 0font-normal text-gray-700 dark:text-white/70 ">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
