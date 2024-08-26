import NavBar from "./react-bootstrap/navbar";
import DefaultCarousel from "./react-bootstrap/carousels";
import Footer from "./react-bootstrap/footer";
import{ClassComponent} from "./components/class-component/classComponent.jsx"

function App() {
  return (
    <>
      <NavBar />
      <DefaultCarousel />
      <ClassComponent/>
      <Footer/>
    </>
  );
}

export default App;
