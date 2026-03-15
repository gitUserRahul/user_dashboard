"use client";

import Error from "@/components/ui/Error";
import type { ErrorPageProps } from "@/types/user";

const error = ({ error }: ErrorPageProps) => {
  return <Error title="users" error={error} />;
};

export default error;
