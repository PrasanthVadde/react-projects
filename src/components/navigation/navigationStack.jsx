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

export const NavigationStack = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "90vh",
          gap: "32px",
          margin: "8px",
        }}
      >
        <div>
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
    </>
  );
};
