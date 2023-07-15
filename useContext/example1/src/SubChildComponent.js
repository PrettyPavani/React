import { useContext } from "react";
import { UserContext } from "./context/userContext";

const SubChildComponent = () =>{

    const data = useContext(UserContext);
    const {firstname,mail} = data;
    console.log(data)
    return(
      <div>
        SubChildComponent
        <div> name :
        {firstname}
        </div>
        <div> email is 
            {mail}
        </div>
      </div>
    )
}
  
  export default SubChildComponent;