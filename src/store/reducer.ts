import * as actionTypes from "./actionTypes";

const initialState: ActualUserState = {
  user: {
    isSignIn: false,
    username: "",
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
      };
      return { ...state, user: signInUser };
    case actionTypes.SIGN_OUT_USER:
      const signOutUser: IActualUser = {
        isSignIn: action.user.isSignIn,
        username: action.user.username,
      };
      return { ...state, user: signOutUser };
  }
  return state;
};

export default reducer;
