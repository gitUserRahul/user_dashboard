import React from "react";

const Loading = ({ name }) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <p>Loading {name}</p>
      <span>Please Wait....</span>
    </div>
  );
};

export default Loading;
