import "./App.css";
import About from "./components/About";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import CarouselContainer from "./components/CarouselContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-100% pt-4">
        <Header />
        <About />
        <CarouselContainer />
        <CardContainer />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
