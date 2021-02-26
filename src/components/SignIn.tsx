import React, { FC, useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { ISignIn } from "../models/Auth";
import { IError } from "../models/IError";
import AuthService from "../services/AuthService";
interface Props {
  show: boolean;
  callback: () => void;
  saveSignInUser: (user: IActualUser | any) => void;
}
const SignIn: FC<Props> = ({ show, callback, saveSignInUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<IError>({ status: 0, message: "" });
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
    if (password.length === 0 || username.length <= 6) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [username, password]);

  const handleSignIn = async () => {
    const signInData: ISignIn = {
      username: username,
      password: password,
    };
    try {
      await AuthService.signIn(signInData);
      saveSignInUser({ isSignIn: true, username: username });
      callback();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Modal
      centered
      bg="dark"
      text="light"
      show={show}
      onHide={handleClose}
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
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
      </Modal.Body>
      <Modal.Footer>
        <Form.Text className="text-muted">{error.message}</Form.Text>
        <Button
          variant="outline-success"
          disabled={isDisabled}
          onClick={handleSignIn}
        >
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignIn;
