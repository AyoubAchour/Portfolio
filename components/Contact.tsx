"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/SendEmail";
import SubmitFormButton from "./SubmitFormButton";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,40rem)] mt-28  text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at {""}
        <a href="mailto:medayoubachour69@gmail.com" className="underline">
          medayoubachour69@gmail.com {""}
        </a>
        or through this form.
      </p>
      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          name="senderEmail"
          type="email"
          className="h-14 rounded-lg border border-black/10 px-4 py-3 dark:bg-white dark:bg-opacity-80  dark:focus:bg-opacity-100  transition-all dark:outline-none"
          placeholder="Your Email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg border border-black/10 px-4 py-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100  transition-all  dark:outline-none"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitFormButton />
      </form>
    </motion.section>
  );
};

export default Contact;
