import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home"
import Category from "./Pages/Category"
import AboutUs from "./Pages/AboutUs"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import './App.css'

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/category":
      component = <Category />;
      break;
    case "/aboutus":
      component = <AboutUs />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    case "/cart":
      component = <Cart />;
      break;
  }


  return (
    <>
      <header>
        <Navbar />
      </header>
      {component}
    </>
  )
}

export default App
