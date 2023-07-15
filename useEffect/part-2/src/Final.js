import React, { useEffect, useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function Final() {
  const [drinks, setDrinks] = useState([]);
  const [serachTerm, setSerachTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const[isError,setIsError] = useState({
    status : false,
    message : ""
  })
  const fetchDrink = async (api) => {
    setLoading(true);
    setIsError({
      status: false,
      message : ""
    })
    try {
      const response = await fetch(api);
      const { drinks } = await response.json();
      setDrinks(drinks);
      setLoading(false);
      if(!drinks){
        throw new Error('data not found')
      }

    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        message : error.message || "Something Went Wrong"
      })
    }
  };
  useEffect(() => {
    const correctURL = `${URL}${serachTerm}`;
    fetchDrink(correctURL);
  }, [serachTerm]);

  if(loading){
    return <h1>Loading ......</h1>
  }

  if(isError?.status){
    return <h1 style={{color: "red"}}>
      {isError.message}
    </h1>
  }

  return (
    <div>
      <form >
        <input  className="App"
          type="text"
          placeholder="serach something"
          value={serachTerm}
          onChange={(e) => setSerachTerm(e.target.value)}
        ></input>
      </form>
      <hr />
      <ul className="cocktail">
        {drinks.map((eachDrink) => {
          const { idDrink, strDrink, strDrinkThumb } = eachDrink;
          return (
            <li key={idDrink}>
              <img src={strDrinkThumb} alt={strDrink} />
              <h1>{strDrink}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Final;
