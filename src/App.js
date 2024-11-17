import "./App.css";
import About from "./components/About";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CarouselContainer from "./components/CarouselContainer";

function App() {
  return (
    <div className="bg-orange-50 w-screen h-100% pt-4">
      <Header />
      <About />
      <CarouselContainer />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
