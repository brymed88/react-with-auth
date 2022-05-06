import nodemailer from 'nodemailer';

export async function sendMail(options) {
  /*
   Note: The below function transporter section will change depending on your email host. See documentation
   at https://nodemailer.com/about/. The below example is currently using FastMail.
   */

  const transporter = nodemailer.createTransport({
    service: 'FastMail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mail = await transporter.sendMail(options);

  if (mail.accepted !== '') {
    console.log(`Authorization code sent to ${options.to}`);
    return { status: 'sent' };
  } else {
    console.log(`Authorization code failed to send to ${options.to}`);
    return { status: 'failed' };
  }
}
