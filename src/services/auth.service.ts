import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (authData: User) => {
  // check si user existe
  const checkIs = await UserModel.findOne({ email: authData.email });
  if (checkIs) return "ALREADY_EXISTS";

  // si no existe, encrypt password
  const { password } = authData;
  const passHash = await encrypt(password);
  authData.password = passHash;
  // save user
  const registerNewUser = await UserModel.create(authData);
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  // check si user existe
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "INVALID_USER";

  // si existe, check password
  const passwordHash = checkIs.password;
  const isCorrect = await verify(password, passwordHash);

  if (!isCorrect) return "DATA_INCORRECT";

  const token = await generateToken(checkIs._id.toString());

  const data = {
    token,
    user: checkIs,
  };

  return data;
};

export { registerNewUser, loginUser };

// 1:40:00
