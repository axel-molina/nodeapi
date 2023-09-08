import { Response, Request } from "express";

const handleHttp = (res: Response, errorMsg: string, errorRaw?: unknown) => {
  console.log(errorRaw);
  res.status(500);
  res.send({ errorMsg });
};

export { handleHttp };
