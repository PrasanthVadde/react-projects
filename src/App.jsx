import NavBar from "./react-bootstrap/navbar";
import DefaultCarousel from "./react-bootstrap/carousels";
import Footer from "./react-bootstrap/footer";
import { ClassComponent } from "./components/class-component/classComponent";
import { Button } from "./components/class-component/youtubeButton";

function App() {
  return (
    <>
      <Button />
      <NavBar />
      <DefaultCarousel />
      <ClassComponent/>
      <Footer/>
    </>
  );
}

export default App;
