import React, { useEffect, useState } from "react";

import { Hero as HeroSection } from "./Hero.section";
import { Mid as MidSection } from "./Mid.section";
import { PostItem } from "../../components/post-item/post-item.component";

import "./Home.styles.scss";
import Axios from "axios";

export const HomePage = () => {
  const [latestPost, setLatestPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await Axios.get(
          "https://icanblog.herokuapp.com/posts?take=3"
        );
        setLatestPost(response.data.data.posts);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <>
      <main className="home container">
        <HeroSection />
        <MidSection />
        <section id="posts" className="post container">
          <h2 className="heading-2">
            Lastest
            <span className="decor"> Posts</span>
          </h2>

          <div className="post-items">
            {!loading
              ? latestPost.map(({ title, id, createdAt, content }) => (
                  <PostItem
                    key={id}
                    title={title}
                    date={createdAt}
                    description={content}
                    id={id}
                  />
                ))
              : null}
          </div>
        </section>
        {/* <Mid/> */}
      </main>
    </>
  );
};
