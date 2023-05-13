import nodemailer from "nodemailer";
import ejs from "ejs";

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "sebastianrobayog@gmail.com",
      pass: "zoaaxrfavpmpctvw",
    },
  });
  return transport;
};

export const sendMail = async (item: any) => {
  const template = await ejs.renderFile("src/views/welcome-mail.ejs");

  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: "sebastianrobayog@gmail.com",
    to: item,
    subject: "Correo de prueba",
    html: template,
  });
  console.log("Message send: %s", info.messageId);

  return;
};
