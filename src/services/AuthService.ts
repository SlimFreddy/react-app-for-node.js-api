import Axios from "../config/Axios";
import { SIGN_IN } from "../config/Endpoints";
import { ISignIn} from "../models/Auth";
import { IError } from "../models/IError";
import LocalStorageService from "./LocalStorageService";

class AuthService {
  public async signIn(signIn: ISignIn): Promise<void | IError> {
    try {
      const response = await Axios.post(SIGN_IN, signIn);
      LocalStorageService.storeAuthInfo(response.data.jwt);
    } catch (error) {
      console.log(error.response);
      const errorData = error.response.data;
      return Promise.reject({
        status: errorData.status,
        message: errorData.message,
      });
    }
  }
}

export default new AuthService();
