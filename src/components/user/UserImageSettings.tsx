import React, { FC, useState } from "react";
import { Button, Card, Form, Image } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { GET_USER_IMAGE} from "../../config/Endpoints";
import { IError } from "../../models/IError";
import UserService from "../../services/UserService";
import style from "./UserImageSettings.module.scss";

const UserImageSettings: FC = () => {
  const actualUser: IActualUser = useSelector(
    (state: ActualUserState) => state.user,
    shallowEqual
  );
  const [userImage, setUserImage] = useState<File>();
  const userImageLink = GET_USER_IMAGE + "/" + actualUser.userId

  const [error, setError] = useState<IError>({ status: 0, message: "" });

  const handleUpload = async () => {
    if (userImage) {
      await UserService.uploadUserImage(userImage);
    }
  };
  const handleRemove = async () => {
    try {
      await UserService.removeUserImage();
    } catch (error) {
      setError(error);
    }
  };
  const uploadDisabled = () => {
    return userImage ? false : true;
  };
  return (
    <div className="w-50">
      <Card>
        <Card.Header>
          <h5>User-Image</h5>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="d-flex justify-content-start">
              <Image
                className={style.userImage}
                src={`${userImageLink}`}
                alt=""
              ></Image>
              <Form.File
                className="ml-2 align-self-center"
                id="exampleFormControlFile1"
                label="Select your new User-Image"
                accept="image/png, image/jpeg"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files) {
                    setUserImage(e.target.files[0]);
                  }
                }}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button
            disabled={uploadDisabled()}
            variant="success"
            onClick={handleUpload}
          >
            Upload
          </Button>
          <Form.Text className="text-muted">{error.message}</Form.Text>
          <Button variant="danger" onClick={handleRemove}>
            Remove User Image
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default UserImageSettings;
