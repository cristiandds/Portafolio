import logo from './logo.svg';
import './App.css'; // Aquí importamos todos nuestros estilos
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    // Ya no usamos style={{...}}, sino la clase CSS. Más limpio y ordenado.
    <div className="app-container">
      <Navbar />
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
