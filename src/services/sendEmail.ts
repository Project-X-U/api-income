import { sendMail } from "../utils/mail.handle";
import { Mail } from "../interface/mail";

export const sendEmail = async ({ email, name }: Mail) => {
  try {
    await sendMail(email, name);
  } catch (e) {
    console.log(e);
    throw new Error("Error sendEmail");
  }
};
