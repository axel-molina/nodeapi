import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/requestExt.interface";


const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("ACCESS_DENIED");
  }

  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ")[1];
    const isUser = verifyToken(jwt);
    if (!isUser) return res.status(401).send("NO_JWT_VALID");
    req.user = isUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("ACCESS_DENIED");
  }
};

export { checkJwt };
