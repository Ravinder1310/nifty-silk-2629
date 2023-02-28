import "./App.css";
import { useMediaQuery } from '@chakra-ui/react'
import MobileNav from './components/homepage/MobileNav';
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar";
import AdminRoutes from "./Routes/AdminRoute";

function App() {
  
  return (
    <div>
    <div className="App">
      
      <AllRoutes />
    </div>
    <AdminRoutes/>
    </div>
  );
}

export default App;
