import { useEffect, useState } from "react";
import axios from "axios";

export const useGetCards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("http://localhost:5000/api/cards")
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((e) => setError(JSON.stringify(e)))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);


  return { isLoading, error, data }
};
