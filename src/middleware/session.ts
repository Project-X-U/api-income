import { NextFunction, Response } from "express";
import { RequestExt } from "../interface/req.ext";
import { verifyToken } from "../utils/jwt.handle";
import { handleHttp } from "../utils/response.handle";
import responseApi from "../lang/response-api";

export const checkJwt = (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };

    if (!isUser) {
      return handleHttp(res, 401, responseApi.general.errorToken);
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log({ e });
    return handleHttp(res, 400, responseApi.general.errorSession);
  }
};
