import { hash, compare } from "bcryptjs";

const encrypt = async (password: string): Promise<string> => {
  const passwordHash = await hash(password, 8);
  return passwordHash;
};

const verify = async (password: string, hash: string) => {
  const isCorrect = await compare(password, hash);
  return isCorrect;
};

export { encrypt, verify };
