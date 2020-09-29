import React from "react";

//external libraries
import { Route } from "react-router-dom";

// My components
import { HomePage } from "../../pages/Home/Home.page";
import { Footer } from "../Footer/Footer.component";
import { Header } from "../Header/Header.component";

// styles
import "./App.styles.scss";

function App() {
  return (
    <>
      <Route>
        <Header />
        <HomePage />
        <Footer />
      </Route>
    </>
  );
}

export default App;
