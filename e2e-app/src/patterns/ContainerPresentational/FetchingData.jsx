import { useEffect, useState } from "react";

const FetchingData = (url, params = '') => {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [error , setError] = useState(null)

   const fetchMethod = async () => {
    setLoadingData(true);
    try {
      const response = await fetch(`${url}/${params}`);
      const dataFetched = await response.json();

      if (response.ok) {
        setData(dataFetched);
        setLoadingData(false);
      }
      throw new Error("Fetching data failed");
    } catch (error) {
      setLoadingData(false);
      setError(error.message)
    }
  };

  useEffect(()=>{
    fetchMethod()
  },[])

  return {data , loadingData , error};
};

export default FetchingData;
