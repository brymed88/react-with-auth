import nodemailer from 'nodemailer';
import { log } from "./logger.js";

export async function sendMail(options) {

    /*
    * Note: The below function transporter section will change depending on your email host. See documentation 
    * at https://nodemailer.com/about/. The below example is currently using FastMail. 
    */

    const transporter = nodemailer.createTransport({
        service: "FastMail",
        auth: {
            user: process.env.mail_user,
            pass: process.env.mail_pass,
        }
    });

    const mail = await transporter.sendMail(options);

    if (mail.accepted !== '') {
        log.info(`Authorization code sent to ${options.to}`);
        return { status: "sent" };
    }
    else {
        log.info(`Authorization code failed to send to ${options.to}`);
        return { status: "failed" };
    }
}


