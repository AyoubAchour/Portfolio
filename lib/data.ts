import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hilink from "@/public/hilink.png";
import pricewise from "@/public/pricewise.png";
import snapgram from "@/public/snapgram.png";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Front-end Developer intern",
        location: "Leoni, Sousse",
        description:
            "I Updated the UI of a web app to make it more user-friendly. I also helped build a landing page for a camping app.",
        icon: React.createElement(FaReact),
        date: "2021",
    },
    {
        title: "Computer Science Graduate",
        location: "ISIGK, Kairouan",
        description:
            "",
        icon: React.createElement(LuGraduationCap),
        date: "2022",
    },
    {
        title: "Back-End Developer Intern",
        location: "Forevermo, Kairouan",
        description:
            "I worked as a back-end developer and helped build a dropshipping platform in my end of studies project. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2022",
    },
    {
        title: "Microsoft Club Lead Designer",
        location: "EPI, Sousse",
        description:
            "I Delivered innovative and captivating visual solutionsfor a wide range of club events",
        icon: React.createElement(CgWorkAlt),
        date: "2022-2023",
    },

] as const;

export const projectsData = [
    {
        title: "Hilink",
        description:
            "Landing page for a camping app, experimenting next.js capabilities with tailwind css.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind"],
        imageUrl: hilink,
    },
    {
        title: "PriceWise",
        description:
            "Products analysis and tracking utilizing advanced web scraping techniques to provide real-time insights into products prices through specified links.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "WebScraping"],
        imageUrl: pricewise,

    },
    {
        title: "SnapGram",
        description:
            "A Social media app that allows you to share posts and interact with other users.",
        tags: ["React", "Appwrite", "Tailwind", "Vite",],
        imageUrl: snapgram,

    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Vite",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Express",
    "PostgreSQL",
    "Framer Motion",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
] as const;