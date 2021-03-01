import LocalStorageService from "../services/LocalStorageService";
import * as actionTypes from "./actionTypes";

const getUserId = (): string => {
  const userId = LocalStorageService.getUserId();
  if (userId !== null) {
    return userId;
  }
  return "";
};

const getUsername = (): string => {
  const username = LocalStorageService.getUsername();
  if (username != null) {
    return username;
  }
  return "";
};
const initialState: ActualUserState = {
  user: {
    isSignIn: LocalStorageService.isLogged(),
    username: getUsername(),
    userId: getUserId(),
  },
};

const reducer = (
  state: ActualUserState = initialState,
  action: ActualUserAction
): ActualUserState => {
  switch (action.type) {
    case actionTypes.SIGN_IN_USER:
      const signInUser: IActualUser = {
        isSignIn: action.user.isSignIn,
        username: action.user.username,
        userId: action.user.userId,
      };
      return { ...state, user: signInUser };
    case actionTypes.SIGN_OUT_USER:
      const signOutUser: IActualUser = {
        isSignIn: action.user.isSignIn,
        username: action.user.username,
        userId: action.user.userId,
      };
      return { ...state, user: signOutUser };
  }
  return state;
};

export default reducer;
