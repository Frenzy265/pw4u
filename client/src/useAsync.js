import { useState } from "react";

const useAsync = (action) => {
  const [data, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(null);

  const doFetch = async (props) => {
    try {
      setLoading(true);
      seterror(null);
      const newData = await action(props);
      setDate(newData);
    } catch (error) {
      console.error(error);
      seterror(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, doFetch };
};
export default useAsync;
