import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import moment from "moment";

import "./SinglePost.styles.scss";

export const SinglePost = () => {
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      const res = await Axios.get(
        `https://icanblog.herokuapp.com/posts/${params.id}`
      );
      setPost(res.data.data);
    })();
  }, []);

  return (
    <main className="single-post">
      <span className="single-post__date">
        {moment(post.createdAt).format("YYYY MMM Do")}
      </span>
      <h1 className="heading-2">{post.title}</h1>
      <div className="single-post__image">
        <img
          src={"http://localhost:4000/posts/" + params.id + "/image"}
          alt="a laptop"
        />
      </div>
      <div className="single-post__content">{post.content}</div>
    </main>
  );
};
