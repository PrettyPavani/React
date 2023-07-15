import SubChildComponent from './SubChildComponent';


const ChildComponent = (props) =>{
    return(
      <div>
        Child Component
        <SubChildComponent userDetails = {props.userDetails}/>
      </div>
    )
  }
  
  export default ChildComponent;