import { sendMail } from "../config/email.js";

const contactService = {};

contactService.sendcode = (data) => {

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

    //Call sendMail function and pass user parameters
    sendMail(mailOptions);

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