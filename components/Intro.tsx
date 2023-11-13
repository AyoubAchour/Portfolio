"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSection";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 mx-w-[50rem] sm:mb-0 text-center scroll-mt-56"
      id="home"
    >
      <div className=" flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              type: "tween",
            }}
          >
            <Image
              src="https://media.licdn.com/dms/image/D4E03AQGmPkunOsHftQ/profile-displayphoto-shrink_800_800/0/1697279920203?e=1704931200&v=beta&t=64xkR2ReRWSPTaENGHlwOQmaMPteszbVLdigEw5buxA"
              alt="Profile_pic"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl "
            />
          </motion.div>

          <motion.span
            className=" absolute bottom-1 right-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <Image
              src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f44b.svg"
              alt="emoji"
              width={25}
              height={25}
              quality={95}
              priority={true}
            />
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.6] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="font-bold">Hello, I'm Ayoub.</span> <br />
        <span className="font-bold">
          I'm a Designer 🖌️ and a full-stack developer 👨‍💻.
        </span>{" "}
        <br /> I enjoy Designing, Building{" "}
        <span className="italic">sites & apps</span>. <br /> My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 13, duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:scal-110 hover:bg-gray-950 active:scale-105 transition
          group"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition " />
        </Link>
        <a
          href="/cv.pdf"
          download
          className="bg-white  px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 hover:scal-110 active:scale-105 transition
          group border border-black/10 dark:bg-white/10 "
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition " />
        </a>
        <a
          href="https://www.linkedin.com/in/medayoubachour/"
          target="_blank"
          className="bg-white  text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15rem] hover:scale-[1.15] hover:text-gray-950 hover:scal-110 active:scale-105 transition dark:bg-white/10  dark:text-gray-200 "
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/AyoubAchour"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15rem]  hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition dark:bg-white/10 dark:text-gray-200 "
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
