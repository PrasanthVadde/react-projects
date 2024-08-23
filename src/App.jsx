import NavBar from "./react-bootstrap/navbar";
import DefaultCarousel from "./react-bootstrap/carousels";
import Footer from "./react-bootstrap/footer";
import { InstagramLoader } from "./components/contentLoader/instagramContentLoader";
import { ClassComponent } from "./components/class-component/classComponent";
import { Button } from "./components/class-component/youtubeButton";
import{DefaultButton} from "./components/button/button.jsx"
function App() {
  return (
    <>
      <Button />
      <NavBar />
      <DefaultCarousel />
      <DefaultButton value={"Add Data"}/>
      <ClassComponent/>
      <InstagramLoader/>
      <Footer/>
    </>
  );
}

export default App;
