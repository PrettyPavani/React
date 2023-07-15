import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

function Final() {
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);
  const [isError,setIsError] = useState({
    status : false,
    message : ""
  })
  const fetechData = async (apiUrl) => {
    setloading(true);
    setIsError({
        status : false,
        message : ""
    })
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUserData(data);
      setloading(false);
      setIsError({
        status : false,
        message : ""
    })

    if(response.status === 404){
        throw new Error('Data Not Found');
    }

    } catch (error) {
        setloading(false)
        setIsError({
            status : true,
            message : error.message || "Something Went Wrong.Please try again"
        })
    }
  };
  useEffect(() => {
    fetechData(URL);
  },[]);

  if(loading){
    return <h1>Loading......</h1>
  }

  if(isError?.status){
    return <h1 style={{color:"red"}}>{isError.message}</h1>
  }
  return (
    <div>
      <h1>Use effect Example</h1>
      <ul>
        {userData.map((eachObj) => {
          const { name, id, email } = eachObj;
          return (
            <li key={id}>
              <div>{name}</div>
              <div>{email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Final;
