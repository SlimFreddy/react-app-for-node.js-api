import Axios from "../config/Axios";
import { POSTS, USER_POSTS } from "../config/Endpoints";
import IPost from "../models/Home";
import { IError } from "../models/IError";

class PostService {
  public async getAllPost(): Promise<IPost[] | IError> {
    try {
      const response = await Axios.get(POSTS);
      return response.data;
    } catch (error) {
      const errorData = error.response.data;
      return Promise.reject({
        status: errorData.status,
        message: errorData.message,
      });
    }
  }

  public async getAllPostByUser(userId: string) {
    try {
      const response = await Axios.get(USER_POSTS + "/" + userId);
      return response.data;
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
