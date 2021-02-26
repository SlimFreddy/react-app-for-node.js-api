import React, { FC, useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { ISignIn, IUsernameValid } from "../models/Auth";
import { IError } from "../models/IError";
import AuthService from "../services/AuthService";
interface Props {
  show: boolean;
  callback: () => void;
}
const SignUp: FC<Props> = ({ show, callback }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<IError>({ status: 0, message: "" });
  const [usernameValid, setUsernameValid] = useState<IUsernameValid>({
    isValid: false,
    message: "",
  });

  const [isDisabled, setDisabled] = useState(() => {
    if (password.length <= 6 || username.length <= 6) {
      return true;
    } else {
      return false;
    }
  });

  const handleClose = () => {
    callback();
  };

  useEffect(() => {
    if (password.length < 6 || username.length < 6) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [username, password]);

  const handleSignUp = async () => {};

  return (
    <Modal centered show={show} onHide={handleClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={async (e) => {
              setUsername(e.target.value);
              setUsernameValid(
                await AuthService.checkUsernameValid(e.target.value)
              );
            }}
          />
          <Form.Text className="text-muted">{usernameValid.message}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Form.Text className="text-muted">{error.message}</Form.Text>
        <Button
          variant="outline-success"
          disabled={isDisabled}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUp;
