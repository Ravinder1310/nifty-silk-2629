import "./App.css";
import { useMediaQuery } from '@chakra-ui/react'
import MobileNav from './components/homepage/MobileNav';
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  return (
    <div className="App">
      {isLargerThan800?<Navbar />:<MobileNav />}
      <AllRoutes />
    </div>
  );
}

export default App;
