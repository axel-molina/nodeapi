import { Request, Response } from "express";
// Error handle
import { handleHttp } from "../utils/error.handle";

// GET
const getUser = (req: Request, res: Response) => {
  try {
    res.send("get user");
  } catch (error) {
    handleHttp(res, "Error get user");
  }
};

// POST
const postUser = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "Error post user");
  }
};

// DELETE
const deleteUser = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error delete user");
  }
};

export { getUser, postUser, deleteUser };
