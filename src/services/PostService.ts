import Axios from "../config/Axios";
import { POSTS } from "../config/Endpoints";
import IPost from "../models/Home";
import { IError } from "../models/IError";

class PostService {
  public async getAllPost(): Promise<IPost[] | IError> {
    try {
      const response = await Axios.get(POSTS);
      return response.data
    } catch (error) {
      const errorData = error.response.data;
      return Promise.reject({
        status: errorData.status,
        message: errorData.message,
      });
    }
  }
}
export default new PostService();
