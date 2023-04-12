import { useEffect, useState } from "react";
import axios from "axios";

const getAPI = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect( () => {
    const getMovie = async () => {
      try {
        let response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    getMovie();
  }, []);
  return {...data};
}

export default getAPI;