import React, { FC, useEffect, useState } from "react";
import { GET_USER_IMAGE } from "../config/Endpoints";
import { RouteComponentProps } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import style from "./ShowUser.module.scss";
import { IUser } from "../models/User";
import UserService from "../services/UserService";
import { IError } from "../models/IError";
import IPost from "../models/Home";
import PostService from "../services/PostService";
import Post from "../components/home/Post";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  // ...
}
const ShowUser: FC<Props> = ({ match }: Props) => {
  const [user, setUser] = useState<IUser>({ _id: "", username: "" });
  const [error, setError] = useState<IError>({ status: 0, message: "" });
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetchUser();
    fetchPost();
  }, []);

  const fetchUser = async () => {
    try {
      const user = await UserService.getUserById(match.params.id);
      setUser(user as IUser);
    } catch (error) {
      setError(error);
    }
  };

  const fetchPost = async () => {
    try {
      const posts = await PostService.getAllPostByUser(match.params.id);
      setPosts(posts);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Card className="w-50">
        <Card.Header className="d-flex">
          <Image
            className={style.userImage}
            src={`${GET_USER_IMAGE + "/" + match.params.id}`}
          ></Image>
          <h1>{user.username}</h1>
        </Card.Header>
        <Card.Body>
          <h2>Posts:</h2>
          {posts.map((post) => {
            return <Post post={post}></Post>;
          })}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowUser;
