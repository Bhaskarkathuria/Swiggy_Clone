import { Outlet } from "react-router-dom";

const about = function (){
    return(
        <div>
            <h1>About App</h1>
            <h1><Outlet /></h1>
        </div>
        
    )   
}
export default about;