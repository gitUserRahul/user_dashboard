import React from 'react'
import {fetchData} from "@/lib/api/interceptor"
import type {User} from "@/types/user"
import UserList from '@/components/users/UserList';

const page = async() => {

    const usersData = await fetchData<User[]>("/users");
    

  return (
    <section className="max-w-285 mx-auto">
        <h1 className="text-2xl my-4 font-semibold">Users List</h1>
        <UserList initialData={usersData} />
    </section>
  )
}

export default page