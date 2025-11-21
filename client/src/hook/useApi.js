import { useState } from 'react';
import api from '../api';

const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (method, url, body = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api[method](url, body);
      setData(response.data);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data : { message: err.message });
      setLoading(false);
      throw err;
    }
  };

  return { data, loading, error, request };
};

export default useApi;
