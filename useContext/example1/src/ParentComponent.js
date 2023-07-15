import {useState} from 'react';
import ChildComponent from './childComponent';

const ParentComponent = () =>{

    const [userDetails,setUserDetails] = useState({
      firstname : "emma",
      lastname : "watson",
      email : "hhhh@gmail.com"
  
    })
    return(
      <div>
        Parent
        <ChildComponent userDetails = {userDetails}/>
      </div>
    )
  }
  
  
export default ParentComponent;