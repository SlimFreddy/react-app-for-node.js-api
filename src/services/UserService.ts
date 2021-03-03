import Axios from "../config/Axios";
import { USER_IMAGE } from "../config/Endpoints";
import { IError } from "../models/IError";

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
}
export default new UserService();
