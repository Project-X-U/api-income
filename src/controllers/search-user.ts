import { Request, Response } from "express";
import { handleHttp } from "../utils/response.handle";
import responseApi from "../lang/response-api";
import { findUser } from "../services/search-user";

const searchByIdentificationCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { identification } = body;

    if (typeof identification === "undefined") {
      return handleHttp(res, 400, responseApi.general.notFound);
    }

    await findUser({ identification }, res);
  } catch (e) {
    console.log("Error searchByIdentificationCtrl", e);
    return handleHttp(res, 500, responseApi.general.serverError);
  }
};

export { searchByIdentificationCtrl };
