import React, { useState } from "react";
import CardDataContext from "./Components/Logic/Context/CardDataContext";
import Navbar from "./Components/UI/Navbar/Navbar";
import CardDisplaySection from "./Components/UI/Card/CardDisplaySection";

function App() {
  
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [dataIsFetched, setDataIsFetched] = useState(false);

  return (
    <CardDataContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        dataIsFetched,
        setDataIsFetched,
      }}
    >
      <Navbar/>
      {dataIsFetched&&<CardDisplaySection/>}
      {error&&<p>taki hcuyj</p>}
    </CardDataContext.Provider>
  );
}

export default App;

