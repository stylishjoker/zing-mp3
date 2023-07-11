import axios, { AxiosResponse } from "../axios";

export const getHome = async () => {
  try {
    const res: AxiosResponse = await axios.get("/home");
    return res;
  } catch (error) {
    throw error;
  }
};