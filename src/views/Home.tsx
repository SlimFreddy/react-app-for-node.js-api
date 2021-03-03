import React, { FC, useEffect, useState } from "react";
import Post from "../components/home/Post";
import IPost from "../models/Home";
import { IError } from "../models/IError";
import PostService from "../services/PostService";

const Home: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError] = useState<IError>({ status: 0, message: "" });

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const result = await PostService.getAllPost();
      setPosts(result as IPost[]);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Home</h1>
      {posts.map((post) => {
        return <Post post={post}></Post>;
      })}
    </div>
  );
};

export default Home;
