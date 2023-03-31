import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Work from './components/Work';

function Appv2() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <footer className="w-full h-12 flex justify-center items-center px-5">
        <p>Copyright @ Nikhil Dev A S 2023</p>
      </footer>
    </div>
  );
}

export default Appv2;
