import {SaveUsers} from '../interface/save-users'
import UserModel from '../models/user';

const saveUser = async (item: SaveUsers) => {
    const responseUser = await UserModel.create(item);
    return responseUser;
}

export {saveUser};