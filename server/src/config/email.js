import nodemailer from 'nodemailer';
import { log } from "./log.js";
export async function sendMail(options) {

    const transporter = nodemailer.createTransport({
        service: "FastMail",
        auth: {
            user: process.env.mail_user,
            pass: process.env.mail_pass,
        }
    });

    const mail = await transporter.sendMail(options);

    if (mail.accepted !== '') {
        log.info("Authorization code sent to user");
        return { status: "sent" };
    }
    else {
        log.info("Authorization code failed to send");
        return { status: "failed" };
    }
}


