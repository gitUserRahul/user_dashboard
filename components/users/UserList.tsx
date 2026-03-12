"use client";

import React, { useEffect } from "react";
import { useUserStore } from "@/store/users/useUserStore";
import Link from "next/link";
import type { UserListProps } from "@/types/user";

const UserList = ({ initialData }: UserListProps) => {
  const { users, setUsers } = useUserStore();

  useEffect(() => {
    if (initialData) {
      setUsers(initialData);
    }
  }, [initialData, setUsers]);

  return (
    <>
      <table className="border-collapse w-full p-4">
        <thead>
          <tr className="[&>th]:text-left [&>th]:pb-4 border-b border-[#F2F2F2]">
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userItem) => {
            const { id, name, email, company } = userItem;

            return (
              <tr key={id} className="[&>td]:py-4 border-b border-[#F2F2F2]">
                <td>{name}</td>
                <td>{email}</td>
                <td>{company.name}</td>
                <td>
                  <Link href={`/users/${id}`}>View Posts</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
