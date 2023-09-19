import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  if (responseUser === "ALREADY_EXISTS") {
    res.status(403).send(responseUser);
  } else {
    res.send(responseUser);
  }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "INVALID_USER" || responseUser === "DATA_INCORRECT") {
    res.status(403).send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerCtrl, loginCtrl };
