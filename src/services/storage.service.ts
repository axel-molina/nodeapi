import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";
import fs from 'fs';
import path from 'path';

const deletePreviousFile = async (idUser: string) => {
  const previousFile = await StorageModel.findOne({ idUser });
  if (previousFile) {
    fs.unlinkSync(path.join(__dirname, '..', previousFile.path));
    await StorageModel.deleteOne({ idUser });
  }
};

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  await deletePreviousFile(idUser);
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };
