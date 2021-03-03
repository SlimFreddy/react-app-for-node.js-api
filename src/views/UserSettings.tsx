import React, { FC } from "react";
import UserImageSettings from "../components/user/UserImageSettings";

const UserSettings: FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>User Settings</h1>
      <UserImageSettings></UserImageSettings>
    </div>
  );
};

export default UserSettings;
