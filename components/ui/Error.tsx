import React from "react";

const Error = ({ title, error }) => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <h1>Unable to fetch {title}</h1>
      <p> {error.message || `An Error Occur While Fetching ${title} Data`}</p>
    </div>
  );
};

export default Error;
