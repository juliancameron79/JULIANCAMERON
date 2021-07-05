import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  );
}

export default App;
