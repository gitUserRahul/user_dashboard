import { fetchData } from "@/lib/api/interceptor";
import type { User } from "@/types/user";
import UserList from "@/components/users/UserList";
import SearchUser from "@/components/users/SearchUser";

const page = async () => {
  const usersData = await fetchData<User[]>("/users");

  return (
    <section className="max-w-285 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl my-4 font-semibold">Users List</h1>
        <SearchUser />
      </div>
      <UserList initialData={usersData} />
    </section>
  );
};

export default page;
