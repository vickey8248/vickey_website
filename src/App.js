import "./App.css";
import Header from "./componts/Header";
import Hero from "./componts/Hero";
import About from "./componts/About";
import Projects from "./componts/Projects";
import Resume from "./componts/Resume";
import Contact from "./componts/Contact";
import Footer from "./componts/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
