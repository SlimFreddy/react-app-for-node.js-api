import Axios from "../config/Axios";
import { CHECK_USERNAME_VALID, SIGN_IN, SIGN_UP } from "../config/Endpoints";
import { ISignIn, ISignUp, IUsernameValid } from "../models/Auth";
import { IError } from "../models/IError";
import LocalStorageService from "./LocalStorageService";

class AuthService {
  public async signIn(signIn: ISignIn): Promise<void | IError> {
    try {
      const response = await Axios.post(SIGN_IN, signIn);
      LocalStorageService.storeAuthInfo(response.data.jwt);
    } catch (error) {
      const errorData = error.response.data;
      return Promise.reject({
        status: errorData.status,
        message: errorData.message,
      });
    }
  }

  public async signUp(signUp: ISignUp): Promise<void | IError> {
    try {
      const response = await Axios.post(SIGN_UP, signUp);
    } catch (error) {
      const errorData = error.response.data;
      return Promise.reject({
        status: errorData.status,
        message: errorData.message,
      });
    }
  }

  public async checkUsernameValid(username: string): Promise<IUsernameValid> {
    const response = await Axios.get(CHECK_USERNAME_VALID + username);
    return response.data;
  }
}

export default new AuthService();
