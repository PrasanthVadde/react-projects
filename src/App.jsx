import NavBar from "./react-bootstrap/navbar";
import DefaultCard from "./react-bootstrap/card";
import DefaultCarousel from "./react-bootstrap/carousels";
import Footer from "./react-bootstrap/footer";

function App() {
  return (
    <>
      <NavBar />
      <DefaultCarousel />
      <div style= {{display:"flex", justifyContent:"space-evenly",}}>
      <DefaultCard/>
      <DefaultCard/>
      <DefaultCard/>
      <DefaultCard/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
