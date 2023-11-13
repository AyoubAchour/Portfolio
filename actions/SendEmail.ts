"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

    const message = formData.get("message");
    const senderEmail = formData.get("senderEmail");


    if (!message || !senderEmail || typeof message !== "string" || typeof senderEmail !== "string") {
        return {
            error: "Invalud message"
        }
    }

    try {
        await resend.emails.send({
            from: " Contact Form <onboarding@resend.dev>",
            to: "medayoubachour69@gmail.com",
            subject: "Contact Form",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail
            })
        })

    } catch (error) {
        console.log(error);
    }

};
