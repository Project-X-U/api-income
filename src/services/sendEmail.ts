import { sendMail } from "../utils/mail.handle";
import { Mail } from "../interface/mail";

export const sendEmail = async ({ email }: Mail) => {
  try {
    await sendMail(email);
  } catch (e) {
    console.log(e);
    throw new Error("Error sendEmail");
  }
};
