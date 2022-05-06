import { sendMail } from '../config/email.js';

const contactService = {};

contactService.sendcode = ({ email, code }) => {
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
};

contactService.resetPassword = ({ email }) => {
  let mailOptions = {
    from: process.env.SUPPORT_ADDRESS, //support address from env file
    to: email,
    subject: `${process.env.SITE_NAME} - Password reset notification`,
    html: `
        
        <h2>
        The password for your account has been reset!
        </h2>
        
        <p>
        A password reset request has been made for email: ${email}. If this email was sent in error, please ignore it or call our service line at xxx-xxx-xxxx. 
        </p>
        
        `,
  };

  //Call sendMail function and pass user parameters
  sendMail(mailOptions);
};

contactService.resetCode = ({ email, code }) => {
  let mailOptions = {
    from: process.env.SUPPORT_ADDRESS, //support address from env file
    to: email,
    subject: `${process.env.SITE_NAME} account authorization code`,
    html: `
        
        <h2>
        Password reset authorization code
        </h2>
        
        <p>
        Your one-time authorization code is ${code}. This code will expire in 10 minutes!
        </p>
        
        `,
  };

  //Call sendMail function and pass user parameters
  sendMail(mailOptions);
};

contactService.contactForm = async ({ email, name, topic }) => {
  let mailOptions = {
    from: email, //support address from env file
    to: process.env.SUPPORT_ADDRESS,
    subject: `${process.env.SITE_NAME} - Inquiry from contact form`,
    html: `
        
        <h2>
        Contact form inquiry!
        </h2>
        
        <p>
        From: ${name}
        </p>
        
        <p>
        Topic: ${topic}
        </p>
        
        `,
  };

  //Call sendMail function and pass user parameters
  const mailer = await sendMail(mailOptions);

  if (mailer.status === 'sent') {
    return { status: 'success' };
  }

  return { status: 'failed' };
};

export default contactService;
