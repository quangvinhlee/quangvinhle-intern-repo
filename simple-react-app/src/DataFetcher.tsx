import React, { useEffect, useState } from "react";
import { fetchData } from "./api";

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div>
      <h2>API Data</h2>
      <p data-testid="api-data">{data ?? "Loading..."}</p>
    </div>
  );
};

export default DataFetcher;
