import { useEffect, useState } from "react";
import ResultList from "./ResultList";
import Searchbox from "./Searchbox";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [filtereddata, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setFilteredData(result);
      });
  }, []);

  function handleCallbackData(value) {
    const result = filtereddata.filter((word) => {
      return word.name.toLowerCase().search(value.toLowerCase()) !== -1;
    });
    setFilteredData(result);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Searchbox data={data} callback={handleCallbackData} />
      <ResultList data={filtereddata} />
    </div>
  );
}
