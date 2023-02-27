import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import { KidsList } from "../components/products/kids";
import { KidsSidebar } from "../components/products/Kids_Sidebar";
import { MensList } from "../components/products/mens";
// import { Navbar } from "../components/Navbar";
import { MensSidebar } from "../components/products/mens_sidebar";
import { WomenList } from "../components/products/womens";
import { WomensSidebar } from "../components/products/womens_sidebar";

export const Mens = () => {
    return (
        <div>
            <Navbar/>
            <div style={{display:'flex',marginTop:'100px',justifyContent:"space-around"}}>
                    <MensSidebar/>
                <div style={{height:'100%',width:"70%"}}> 
                     {/* <h1 className="mens_title">Clothings</h1> */}
                    <MensList/>
                </div>
            </div>
            <Footer/>  
        </div>
    )
};

export const Women = () => {
    return (
        <div>
            <Navbar/>
            <div style={{display:'flex',marginTop:'100px',justifyContent:"space-around"}}>
                    <WomensSidebar/>
                <div style={{height:'100%'}}> 
                     {/* <h1 className="mens_title">Clothings</h1> */}
                    <WomenList/>
                </div>
            </div>
            <Footer/>  
        </div>
    )
};

export const Kids = () => {
    return (
        <div>
            <Navbar/>
            <div style={{display:'flex',marginTop:'100px',justifyContent:"space-around"}}>
                    <KidsSidebar/>
                <div style={{height:'100%'}}> 
                     {/* <h1 className="mens_title">Clothings</h1> */}
                    <KidsList/>
                </div>
            </div>
            <Footer/>  
        </div>
    )
};
