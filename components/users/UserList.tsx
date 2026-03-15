"use client";

import React, { useEffect } from "react";
import { useUserStore } from "@/store/users/useUserStore";
import type { UserListProps } from "@/types/user";
import TableData from "@/components/users/TableData";

const UserList = ({ initialData }: UserListProps) => {
  const { users, setUsers, search } = useUserStore();

  useEffect(() => {
    if (initialData) {
      setUsers(initialData);
    }
  }, [initialData, setUsers]);

  const filterUsers = users.filter((user) => {
    const searchItem = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchItem) ||
      user.email.toLowerCase().includes(searchItem)
    );
  });

  if (filterUsers.length === 0)
    return (
      <h1 className="flex justify-center items-center h-screen text-2xl  font-bold">
        No users available.
      </h1>
    );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-150 border-collapse w-full p-4 ">
        <thead>
          <tr className="[&>th]:text-left [&>th]:pb-4 border-b border-[#F2F2F2]">
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers.map((userItem) => (
            <TableData key={userItem.id} {...userItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
