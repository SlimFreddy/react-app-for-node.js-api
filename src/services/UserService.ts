import Axios from "../config/Axios";
import { USER_IMAGE } from "../config/Endpoints";

class UserService {
  public async uploadUserImage(userImage: File) {
    let formData = new FormData();
    formData.append("user-image", userImage);
    await Axios.post(USER_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
export default new UserService();
