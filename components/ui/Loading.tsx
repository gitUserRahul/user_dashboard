import React from "react";
import type { LoadingProps } from "@/types/user";


const Loading = ({ name }: LoadingProps) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <p>Loading {name}</p>
      <span>Please Wait....</span>
    </div>
  );
};

export default Loading;
