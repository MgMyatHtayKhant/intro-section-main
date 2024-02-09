// Components
import Hero from "./components/Hero/Hero";
import Header from "./components/Navigation/Header";
import Nav from "./components/Navigation/Nav";

// Style
import './App.scss';

// Data
import menuData from "./menuData";

// hook
import useToggle from "./hooks/useToggle";

function App() {
  const [open, toggleOpen] = useToggle();

  return (
    <>
      <Header menu={menuData} toggleOpen={toggleOpen} />
      <Nav menu={menuData} open={open} toggleOpen={toggleOpen} />
      <Hero />
    </>
  );
}

export default App;
