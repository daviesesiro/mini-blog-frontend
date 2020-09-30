import React from "react";

import { Hero as HeroSection } from "./Hero.section";
import { Mid as MidSection } from "./Mid.section";
import { PostItem } from "../../components/post-item/post-item.component";

import "./Home.styles.scss";

export const HomePage = () => {
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
            <PostItem
              title="Getting Started with Html"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
                          voluptatum hic iusto. Iusto expedita, maiores laudantium temporibus ut
                          eligendi autem, voluptas quos accusantium odio ex id voluptatem hic
                          dicta eum?"
              date="2020 Nov 12"
            />
          </div>
          <div className="post-items">
            <PostItem
              title="Getting Started with Html"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
                          voluptatum hic iusto. Iusto expedita, maiores laudantium temporibus ut
                          eligendi autem, voluptas quos accusantium odio ex id voluptatem hic
                          dicta eum?"
              date="2020 Nov 12"
            />
          </div>
        </section>
        {/* <Mid/> */}
      </main>
    </>
  );
};
