import { MensList } from "../components/products/mens";
// import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/products/sidebar";

export const Products = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <div style={{display:'flex',marginTop:'100px'}}>
                <div style={{height:'100%'}}>
                    <Sidebar/>
                </div>
                <div style={{height:'100%'}}> 
                    <MensList/>
                </div>
            </div>
        </div>
    )
};
