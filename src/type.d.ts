interface IActualUser {
  isSignIn: boolean;
  username: string;
  userId: string;
}

type ActualUserState = {
  user: IActualUser;
};

type ActualUserAction = {
  type: string;
  user: IActualUser;
};

type DispatchType = (args: ActualUserAction) => ActualUserAction;
