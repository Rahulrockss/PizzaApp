import { useEffect, useState } from 'react';

const API_URL = 'https://pizza-and-desserts.p.rapidapi.com/pizzas';
const API_OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'e81af41702msh92b6c32cbcf463bp15a4cfjsn07b54bbabe40',
    'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com'
  }
};

export const useFetchPizzas = () => {
  const [pizzas, setPizzas] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, API_OPTIONS);
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { pizzas, loading, error };
};
