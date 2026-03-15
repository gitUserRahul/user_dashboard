import React from "react";
import type { ErrorPageProps } from "@/types/user";

const Error = ({ title, error }: ErrorPageProps) => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <h1>Unable to fetch {title}</h1>
      <p> {error.message || `An Error Occur While Fetching ${title} Data`}</p>
    </div>
  );
};

export default Error;
