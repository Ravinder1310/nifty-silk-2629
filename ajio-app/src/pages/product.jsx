import { MensList } from "../components/mens";
// import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/sidebar";

export const Products = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <div style={{display:'flex',marginTop:'30px'}}>
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
