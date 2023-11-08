import axios from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});

const useFastFoodsData = (url) => {
  const [isLoading, setIsLoaing] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setIsLoaing(true);
      try {
        const { data } = await instance.get(`${url}`);
        setData(data);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setIsLoaing(false);
      }
    }
    getData();
  }, [url]);

  return { isLoading, data, error };
};

export default useFastFoodsData;

export async function fetchId(id = null) {

}
