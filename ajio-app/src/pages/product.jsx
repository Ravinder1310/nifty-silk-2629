import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import { MensList } from "../components/products/mens";
// import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/products/sidebar";

export const Products = () => {
    return (
        <div>
            <Navbar/>
            <div style={{display:'flex',marginTop:'100px',justifyContent:"space-around"}}>
                    <Sidebar/>
                <div style={{height:'100%'}}> 
                     <h1 className="mens_title">Clothings</h1>
                    <MensList/>
                </div>
            </div>
            <Footer/>  
        </div>
    )
};
