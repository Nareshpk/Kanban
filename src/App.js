import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Loggin from "./Screens/Loggin.js";
import LoginScreen from "./Screens/LoginScreen.js";
import Rgisterscreen from "./Screens/Rgisterscreen.js";
import SidebarScreen from "./Screens/SidebarScreen.js";


export default function App() {
  return (
    <BrowserRouter>
      <Routes> 
      <Route
          path="/" element={<SidebarScreen />}
          exact
        ></Route>
      <Route
          path="/" element={<LoginScreen />}
          exact
        ></Route>
        <Route
          path="/rgister" element={<Rgisterscreen />}
          exact
        ></Route>
      </Routes>

    </BrowserRouter>
  );
}


