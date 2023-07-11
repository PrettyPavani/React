import React, { useState, useEffect } from "react";
import "./App.css";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const App = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchDrink = async (apiURL) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiURL);
      const { drinks } = await response.json();
      setDrinksData(drinks);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (!drinks) {
        throw new Error("data not found");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "something went wrong...",
      });
    }
  };

  useEffect(() => {
    const correctURL = `${URL}${searchTerm}`;
    fetchDrink(correctURL);
  }, [searchTerm]);

  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search something new..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <hr />
      {loading && !isError?.status && <h3>Loading...</h3>}
      {isError?.status && <h3 style={{ color: "red" }}>{isError.msg}</h3>}
      {!loading && !isError?.status && (
        <ul className="cocktail-data">
          {drinksData.map((eachDrink) => {
            const { idDrink, strDrink, strDrinkThumb } = eachDrink;
            return (
              <li key={idDrink}>
                <div className="card">
                  <img src={strDrinkThumb} alt={strDrink} />
                <div className="container">
                  <h3>{strDrink}</h3>
                </div>
                </div>

              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};


export default App;
