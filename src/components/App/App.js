import React, { useEffect } from "react";

//external libraries
import { Route } from "react-router-dom";

// My components
import { HomePage } from "../../pages/Home/Home.page";
import { PostsPage } from "../../pages/Posts/Posts.page";
import { SinglePost } from "../../pages/SinglePosts/SinglePost.page";
import { Footer } from "../Footer/Footer.component";
import { Header } from "../Header/Header.component";

// import Axios from "axios";

// styles
import "./App.styles.scss";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/p">
        <PostsPage />
      </Route>
      <Route exact path="/p/:id">
        <SinglePost />
      </Route>
      <Footer />
    </>
  );
}

export default App;
