import { sendMail } from "../config/email.js";

const contactService = {};

contactService.sendcode = async (data) => {

    const { email, code } = data;

    let mailOptions = {
        from: process.env.SUPPORT_ADDRESS, //support address from env file
        to: email,
        subject: `${process.env.SITE_NAME} account authorization code`,
        html: `
        <h2>
        Thank you for signing up with ${process.env.SITE_NAME}!
        </h2>
        <p>
        Your one-time authorization code is ${code}. This code will expire in 10 minutes!
        </p>
        `,
    };

    const mailer = await sendMail(mailOptions);
    if (mailer.status !== 'sent') {
        console.log(`Message to ${email} failed to send`)
    }

}

contactService.contactForm = (user) => {
    return user;
}

contactService.update = (user) => {
    return user;
}

contactService.remove = (user) => {
    return user;
}

export default contactService;