import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "../screens/homeScreen";
import { AboutScreen } from "../screens/aboutScreen";
// import { Navbar } from "../navbar/navbar";
// import { InvalidScreen } from "../screens/invalidScreen";
import { SideNavbar } from "../navbar/sideNavbar";
import { ContactScreen } from "../screens/contactScreen";
import { SettingsScreen } from "../screens/settingsScreen";
import { CategoryScreen } from "../screens/categoryScreen";
import { ElectronicsScreen } from "../screens/electronicsScreen";
import { JeweleryScreen } from "../screens/jeweleryScreen";
import { ProductsScreen } from "../screens/productsScreen";
import { DetailedProductScreen } from "../screens/productDetailScreen";
import { createContext, useState } from "react";

export const userDetails = createContext();

export const NavigationStack = () => {
  const [userName, setUserName] = useState("Prasanth");
  const [isDark, setIsDark] = useState(false);
  const [salary, setSalary] = useState(10000);
  const [count, setCounter] = useState(0)


  const counterHandler =(type)=>{
    switch(type){
        case "INCREMENT":
            setCounter(count=>count+1)
            break
        case "DECREMENT":
            if(count>=1){
                setCounter(count=>count-1)
            }
            break
        case "RESET":
            setCounter(0)
            break
        default:
            break
    }
  }

  const salaryHandler = () => {
    setSalary((salary) => salary + 1000);
  };
  const darkHandler = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* <Navbar/> */}
      <userDetails.Provider
        value={{
          userName,
          darkTheme: isDark,
          salary,
          count,
          counterHandler,
          darkHandler,
          salaryHandler,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "95vh",

            gap: "32px",
            margin: "8px",
          }}
        >
          <div style={{ height: "100%", alignSelf: "center", margin: "auto" }}>
            <SideNavbar />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              height: "75vh",
            }}
          >
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/product" element={<ProductsScreen />} />
              <Route
                path="product/:productID"
                element={<DetailedProductScreen />}
              />
              <Route path="/category" element={<CategoryScreen />}>
                <Route path="electronics" element={<ElectronicsScreen />} />
                <Route path="jewelery" element={<JeweleryScreen />} />
              </Route>
              <Route path="/contact" element={<ContactScreen />} />
              <Route path="/settings" element={<SettingsScreen />} />
              {/* <Route path="/*" element={<InvalidScreen />} /> */}
            </Routes>
          </div>
        </div>
      </userDetails.Provider>
    </>
  );
};
