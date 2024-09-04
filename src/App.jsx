import { BrowserRouter } from "react-router-dom";
import { NavigationStack } from "./components/navigation/navigationStack";


function App() {
  return (
    <>
     <BrowserRouter>
     <NavigationStack/>
     </BrowserRouter>
    </>
  );
}

export default App;
