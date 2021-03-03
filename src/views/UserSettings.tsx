import React, { FC } from "react";
import UploadUserImage from "../components/UploadUserImage";

const UserSettings: FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>UserSettings</h1>
      <UploadUserImage></UploadUserImage>
    </div>
  );
};

export default UserSettings;
