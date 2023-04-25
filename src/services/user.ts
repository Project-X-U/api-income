import { SaveUsers } from "../interface/save-users";
import UserModel from "../models/user";

const saveUser = async (item: SaveUsers) => {
  try {
    const responseUser = await UserModel.create(item);
    return responseUser;
  } catch (e) {
    console.log(e);
    throw new Error("Error savingUser");
  }
};

export { saveUser };
