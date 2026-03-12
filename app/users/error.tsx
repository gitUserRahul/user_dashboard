"use client";

import Error from "@/components/ui/Error";

const error = ({ error }) => {
  return <Error title="users" error={error} />;
};

export default error;
