import { useEffect, useState } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});

const useAxios = (axiosParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function fechData() {
    try {
      const { data } = await instance.request(axiosParams);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fechData();
  }, [axiosParams.url]);

  return [isLoading, data, error];
};

export default useAxios;
