import React from "react";

import "./SinglePost.styles.scss";

export const SinglePost = () => {
  return (
    <main className="single-post">
      <span className="single-post__date">2020. Nov. 28th</span>
      <h1 className="heading-2">Getting Started with HTML</h1>
      <div className="single-post__image">
        <img
          src={require("../../assets/images/postImage.png")}
          alt="a laptop"
        />
      </div>
      <div className="single-post__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque
        nostrum adipisci alias quaerat sed exercitationem velit officia,
        recusandae ipsa eum similique veritatis deserunt temporibus id
        architecto quia natus. Sit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Similique cumque dicta magnam repellendus laudantium.
        Possimus repudiandae quo qui, optio modi doloremque nostrum provident
        iusto eos, ab libero soluta rem dignissimos?
      </div>
    </main>
  );
};
