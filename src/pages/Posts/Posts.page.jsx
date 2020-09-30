import React from "react";
import { PostItem } from "../../components/post-item/post-item.component";
import { SearchInput } from "../../components/search-input/search-input.component";

export const PostsPage = () => {
  return (
    <section id="posts" className="post container">
      <h2 className="heading-2">
        <span className="decor">Posts</span>
      </h2>

      <SearchInput placeholder="Type to Start Searching Me!!" />
      <div className="posts_count">2</div>
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
  );
};
