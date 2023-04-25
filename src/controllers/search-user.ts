import { Request, Response } from "express";
import { response, responseError } from "../utils/response.handle";
import responseApi from "../lang/response-api";
import { findUser } from '../services/search-user';

const searchByIdentificationCtrl = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;

        const user = await findUser(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({
                statusCode: 404,
                message: responseApi.user.notFound
            })
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

export { searchByIdentificationCtrl };