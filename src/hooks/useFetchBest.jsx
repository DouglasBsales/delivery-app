"use client";

import { useState, useEffect } from "react";

export const useFetchBest = (url) => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setLoading(false);
      setDados(json);
    };

    fetchData();
  }, [url]);

  return { dados, loading };
};
