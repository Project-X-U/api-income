import nodemailer from "nodemailer";
import ejs from "ejs";

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "859b2a05e2b729",
      pass: "4d312ccd29ffb1",
    },
  });
  return transport;
};

export const sendMail = async (item: any) => {
  const template = await ejs.renderFile("src/views/welcome-mail.ejs");

  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: "juan@example.com",
    to: item,
    subject: "Correo de prueba",
    html: template,
  });
  console.log("Message send: %s", info.messageId);

  return;
};
