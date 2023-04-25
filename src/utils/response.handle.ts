import { Response } from "express";

const handleHttp = (
  res: Response,
  httpStatus: number,
  message: string = "OK",
  data?: any
) => {
  res.status(httpStatus).json({ message, data });
};

export { handleHttp };
