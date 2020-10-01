import Axios from "axios";
import React, { useEffect, useState } from "react";
import { PostItem } from "../../components/post-item/post-item.component";
import { SearchInput } from "../../components/search-input/search-input.component";

export const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await Axios.get(`https://icanblog.herokuapp.com/posts`);
      console.log(res.data.data.posts);
      setPosts(res.data.data.posts);
    })();
  }, []);
  return (
    <section id="posts" className="post container">
      <h2 className="heading-2">
        <span className="decor">Posts</span>
      </h2>

      <SearchInput placeholder="Type to Start Searching Me!!" />
      <div className="posts_count">2</div>
      <div className="post-items">
        {posts.length > 0
          ? posts.map((post) => (
              <PostItem key={post.id} date={post.createdAt} {...post} />
            ))
          : null}
      </div>
    </section>
  );
};
