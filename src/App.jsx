import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Main from "./Layout/Main/Main";
import Navbar from "./Layout/Navbar/Navbar";
import { GlobalContainer } from "./styles/GlobalStyle";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <GlobalContainer>
          <Main>{this.props.children}</Main>
        </GlobalContainer>
        <Footer />
      </>
    );
  }
}

export default App;
