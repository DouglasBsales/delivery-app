"use client"

import { useState, useEffect} from "react";

export const useFetchBest = (url) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setDados(json);
    };

    fetchData();
  }, [url]);

  return { dados };
};
