import { JSONContent } from "@tiptap/vue-3";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getPDF = async (req: {
  file_name: string;
  content: JSONContent[] | undefined;
}) => {
  if (!req.content) {
    throw new Error("Content is required");
  }
  const response = await axios.post(`${API_URL}/generate`, req, {
    responseType: "blob",
  });
  return response.data;
};
