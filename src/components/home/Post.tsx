import React, { FC } from "react";
import { Card, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { GET_USER_IMAGE } from "../../config/Endpoints";
import IPost from "../../models/Home";
import style from "./Post.module.scss";

interface Props {
  post: IPost;
}

const Post: FC<Props> = ({ post }) => {
  const history = useHistory();
  const dateString = new Date(post.date).toLocaleString();
  return (
    <div className="mt-3">
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <h5 className="align-self-center">{post.postTitle}</h5>

          <OverlayTrigger
            key="left"
            placement="left"
            overlay={
              <Tooltip id={`tooltip-left`}>
                {post.author ? post.author.username : "Unknown"}
              </Tooltip>
            }
          >
            <Image
              onClick={() => {
                if (
                  post.author._id !== "Unknown" &&
                  !history.location.pathname.includes(
                    "/user/" + post.author._id
                  )
                ) {
                  history.push("/user/" + post.author._id);
                }
              }}
              className={style.userImage + " align-self-center"}
              src={
                post.author._id !== "Unknown"
                  ? GET_USER_IMAGE + "/" + post.author._id
                  : "./images/Unknown.png"
              }
            ></Image>
          </OverlayTrigger>
        </Card.Header>
        <Card.Body>{post.postBody}</Card.Body>
        <Card.Footer>{dateString}</Card.Footer>
      </Card>
    </div>
  );
};

export default Post;
