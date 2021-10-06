import React, { useState } from "react";
import CardContext from "./Components/UI/CardDataContext";
import Navbar from "./Components/UI/Navbar";
import CardDisplay from "./Components/UI/CardDisplay";

function App() {
  
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [dataIsFetched, setDataIsFetched] = useState(false);

  return (
    <CardContext.Provider
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
      {dataIsFetched&&<CardDisplay/>}
      {error&&<p>taki hcuyj</p>}
    </CardContext.Provider>
  );
}

export default App;
/* <Layout>
        <Card>
          <h1 className=" text-center p-11 font-mono text-6xl font-bold">
            MtData
          </h1>
          <form className="items-center flex flex-col">
            <input
              onInput={nameHandler}
              className="bg-gray-100 appearance-none border-2 border-blue-200 rounded w-full  p-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              ref={ref}
            />
            <button
              onClick={fetchHandler}
              className=" w-3/6 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Button
            </button>
          </form>
        </Card>
        {!cardIsFound && error && <p>Nie znaleziono karty</p>}
        {cardIsFound && (
          <MagicCard
            description={cardInfo.oracle_text}
            name={cardInfo.name}
            image={cardInfo.image_uris.art_crop}
          />
        )}
      </Layout> */
