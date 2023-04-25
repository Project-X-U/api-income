import UserModel from '../models/user';


const findUser = async (id: any) => {
    const responseEqui = await UserModel.findOne({identification: id });
    return responseEqui;
}

export { findUser };