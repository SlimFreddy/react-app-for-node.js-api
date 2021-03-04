import React, { FC } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
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
            <img
              onClick={() => {
                history.push(
                  "/user/" + (post.author ? post.author._id : "Unknown")
                );
              }}
              className={style.userImage + " align-self-center"}
              src={
                GET_USER_IMAGE +
                "/" +
                (post.author ? post.author._id : "Unknown")
              }
            ></img>
          </OverlayTrigger>
        </Card.Header>
        <Card.Body>{post.postBody}</Card.Body>
        <Card.Footer>{dateString}</Card.Footer>
      </Card>
    </div>
  );
};

export default Post;
