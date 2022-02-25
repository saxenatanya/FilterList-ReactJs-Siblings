//unorderlist
//with name property from the array

import React from "react";

const ResultList = ({ data }) => {
  return (
    <ul>
      {data.map((val, index) => (
        <li key={val.id}>{val.name}</li>
      ))}
    </ul>
  );
};

export default ResultList;
