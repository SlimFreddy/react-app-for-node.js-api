import * as actionTypes from "./actionTypes";

export function signInUser(user: IActualUser) {
  const action: ActualUserAction = {
    type: actionTypes.SIGN_IN_USER,
    user,
  };

  return action;
}

export function signOutUser(user: IActualUser) {
  const action: ActualUserAction = {
    type: actionTypes.SIGN_OUT_USER,
    user: { isSignIn: false, username: "" },
  };

  return action;
}
