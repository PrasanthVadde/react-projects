import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "../screens/homeScreen";
import { AboutScreen } from "../screens/aboutScreen";
// import { Navbar } from "../navbar/navbar";
import { InvalidScreen } from "../screens/invalidScreen";
import { SideNavbar } from "../navbar/sideNavbar";
import { ContactScreen } from "../screens/contactScreen";
import { SettingsScreen } from "../screens/settingsScreen";

export const NavigationStack = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div style={{display:"flex",alignItems:"center",height:"90vh",gap:"32px",margin:"8px"}}>
    <div><SideNavbar /></div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/*" element={<InvalidScreen/>} />
      </Routes>
    </div>
    </>
  );
};
