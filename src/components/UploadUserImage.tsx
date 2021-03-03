import React, { FC, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import UserService from "../services/UserService";

const UploadUserImage: FC = () => {
  const [userImage, setUserImage] = useState<File>();

  const handleUpload = async () => {
    if (userImage) {
      UserService.uploadUserImage(userImage);
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
                  if (e.target.files) {
                    setUserImage(e.target.files[0]);
                  }
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
