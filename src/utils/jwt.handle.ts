import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "HHm1UJY3S7sOOg13dmI5Mm?";

export const generateToken = (id: number, expiresIn: string) => {
  const token = sign({ id }, JWT_SECRET, {
    expiresIn,
  });
  return token;
};

export const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};
