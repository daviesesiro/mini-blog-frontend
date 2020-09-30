import React from "react";
import { Link } from "react-router-dom";

import "./post-item.styles.scss";

export const PostItem = ({ title, date, description }) => {
  return (
    <div className="post-item">
      <Link className="post-item__title" to={`/p/${title}`}>
        {title}
      </Link>
      <p className="post-item__description paragraph-1">{description}</p>
      <div className="post-item__date">{date}</div>
    </div>
  );
};
