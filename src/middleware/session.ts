import { NextFunction, Response } from "express";
import { RequestExt } from "../interface/req.ext";
import { verifyToken } from "../utils/jwt.handle";
import { response, responseError } from "../utils/response.handle";
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
      return response(
        responseError({
          statusCode: 401,
          message: "",
        }),
        res
      );
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    return response(
      responseError({
        statusCode: 500,
        message: responseApi.general.serverError,
        data: e,
      }),
      res
    );
  }
};
