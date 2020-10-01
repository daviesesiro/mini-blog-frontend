import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "./post-item.styles.scss";

export const PostItem = ({ title, date, description, id }) => {
  return (
    <div className="post-item">
      <Link className="post-item__title" to={`/p/${id}`}>
        {title}
      </Link>
      <p className="post-item__description paragraph-1">{description}</p>
      <div className="post-item__date">
        {moment(date).format("YYYY MMM Do")}
      </div>
    </div>
  );
};
