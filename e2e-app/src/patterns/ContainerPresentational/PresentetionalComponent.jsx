import React from "react";
import FetchingData from "./FetchingData";

const PresentetionalComponent = () => {
  const { data, loadingData, error } = FetchingData(
    "https://fakestoreapi.com/users"
  );


  console.log(loadingData);
  console.log(data);
  return (
    <div>
      Presentetional Component
      {data?.map((user) => (
        <div key={user?.id}>
          <p>{user?.username}</p>
        </div>
      ))}
    </div>
  );
};

export default PresentetionalComponent;
