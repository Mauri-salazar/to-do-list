import React from "react";
import DotLoader from "react-spinners/DotLoader";
import './/TodoLoading.css';

export const TodoLoading = ({loading}) => {

  return(
    <div>
      <DotLoader
        color={"#61DAFA"}
        loading={loading}
        size={100}
        className="circle"
      />
    </div>
  );
};
