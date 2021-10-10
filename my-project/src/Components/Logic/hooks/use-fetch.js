import { useEffect, useState } from "react";

const useFetch = (url) => {
  
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Something gone wrong.");
        }
        const json = await res.json();

        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return [response, error];
};
export default useFetch;
