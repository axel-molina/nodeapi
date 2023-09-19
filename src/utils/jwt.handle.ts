import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "8h",
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const dataJwt = verify(jwt, JWT_SECRET);
  return dataJwt;
};

export { generateToken, verifyToken };
