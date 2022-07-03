import { useState, useEffect } from "react";

const useFetch = ({ fetchFn, immediate = false }) => {
  const [response, setResponse] = useState(null);

  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const load = (items) => {
    setIsLoading(true);
    fetchFn(items)
      .then(($response) => {
        setResponse($response);
        console.log($response);
      })
      .catch(($error) => {
        setError($error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (immediate) {
      load();
    }
  }, []);

  return {
    response,

    error,
    isLoading,
    load,
  };
};

export default useFetch;
