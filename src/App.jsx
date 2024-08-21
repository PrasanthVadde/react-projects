import NavBar from "./react-bootstrap/navbar";
import DefaultCard from "./react-bootstrap/card";
import DefaultCarousel from "./react-bootstrap/carousels";
import Footer from "./react-bootstrap/footer";
import { InstagramLoader } from "./components/contentLoader/instagramContentLoader";
import { GitIcon } from "./components/icons/dev-icons";
function App() {
  return (
    <>
      <NavBar />
      <DefaultCarousel />
      <div style= {{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly",padding:"4px"}}>
      <DefaultCard/>
      <DefaultCard/>
      <DefaultCard/>
      <DefaultCard/>
      </div>
      <GitIcon/>
      <InstagramLoader/>
      <Footer/>
    </>
  );
}

export default App;
