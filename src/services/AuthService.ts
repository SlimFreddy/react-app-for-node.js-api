import Axios from "../config/Axios";
import { CHECK_USERNAME_VALID, SIGN_IN, SIGN_UP } from "../config/Endpoints";
import { ISignIn, ISignUp, IUsernameValid } from "../models/Auth";
import { IError } from "../models/IError";
import LocalStorageService from "./LocalStorageService";

class AuthService {
  public async signIn(signIn: ISignIn): Promise<string | IError> {
    try {
      const response = await Axios.post(SIGN_IN, signIn);
      console.log(response);
      LocalStorageService.storeAuthInfo(
        response.data.jwt,
        response.data.userId,
        signIn.username
      );
      return response.data.userId as string;
    } catch (error) {
      console.log(error);
      const errorData = error.response.data;
      return Promise.reject({
        status: errorData.status,
        message: errorData.message,
      });
    }
  }

  public async signUp(signUp: ISignUp): Promise<void | IError> {
    try {
      await Axios.post(SIGN_UP, signUp);
    } catch (error) {
      const errorData = error.response.data;
      return Promise.reject({
        status: errorData.status,
        message: errorData.message,
      });
    }
  }

  public async checkUsernameValid(username: string): Promise<IUsernameValid> {
    const response = await Axios.get(CHECK_USERNAME_VALID + "/" + username);
    return response.data;
  }
}

export default new AuthService();
