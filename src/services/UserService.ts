import Axios from "../config/Axios";
import { USER, USER_IMAGE } from "../config/Endpoints";
import { IError } from "../models/IError";
import { IUser } from "../models/User";

class UserService {
  public async uploadUserImage(userImage: File): Promise<void> {
    let formData = new FormData();
    formData.append("user-image", userImage);
    await Axios.post(USER_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  public async removeUserImage(): Promise<void | IError> {
    try {
      await Axios.delete(USER_IMAGE);
    } catch (error) {
      const errorData = error.response.data;
      return Promise.reject({
        status: errorData.status,
        message: errorData.message,
      });
    }
  }

  public async getUserById(userId: string): Promise<IUser| IError> {
    try {
      const user = await Axios.get(USER + "/" + userId);
      return user.data;
    } catch (error) {
      const errorData = error.response.data;
      return Promise.reject({
        status: errorData.status,
        message: errorData.message,
      });
    }
  }
}
export default new UserService();
