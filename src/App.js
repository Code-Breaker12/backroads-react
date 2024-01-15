import './App.css';
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Tours from "./components/tours";
import Footer from "./components/footer";
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Tours/>
      <Services/>
      <About/>
      <Footer/> 
       
    </div>
  );
}

export default App;
