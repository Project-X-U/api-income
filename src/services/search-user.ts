import { Response } from "express";
import UserModel from "../models/user";
import { generateToken } from "../utils/jwt.handle";
import { Auth } from "../interface/auth";
import { handleHttp } from "../utils/response.handle";
import responseApi from "../lang/response-api";

const findUser = async ({ identification }: Auth, res: Response) => {
  try {
    const checkIs = await UserModel.findOne({ identification });
    if (!checkIs) {
      return handleHttp(res, 400, responseApi.user.notFound);
    }

    if (checkIs.state !== "active") {
      return handleHttp(res, 403, responseApi.user.inactive);
    }

    const token = generateToken(checkIs.identification, "1h");
    const data: any = {
      token,
      user: checkIs,
    };

    return handleHttp(res, 200, responseApi.user.success, data);
  } catch (e) {
    console.log("Error findUser", e);
    return handleHttp(res, 500, responseApi.general.serverError);
  }
};

export { findUser };
