import React, { FC, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Axios from "../config/Axios";
import { USER_IMAGE } from "../config/Endpoints";

const UploadUserImage: FC = () => {
  const [userImage, setUserImage] = useState("");

  const handleUpload = async () => {
    if (userImage) {
      let formData = new FormData();
      formData.append("user-image", userImage);
      await Axios.post(USER_IMAGE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };
  return (
    <div className="w-50">
      <Card>
        <Card.Header>
          <h5>Upload User-Image</h5>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Select your new User-Image"
                accept="image/png, image/jpeg"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUserImage(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" onClick={handleUpload}>
            Upload
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default UploadUserImage;
