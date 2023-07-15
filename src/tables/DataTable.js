import React, { useState, useEffect } from "react";
// import Table from "./Table";
import axios from "axios";
import Table from "./Table1";


export default function DataTable() {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setData(data);
    setHeaders(Object.keys(data[0]));
  };

  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1> */}
      <Table headers={headers} data={data} />
    </div>
  );
}