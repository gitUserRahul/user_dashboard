"use client";

import { useUserStore } from "@/store/users/useUserStore";

const SearchUser = () => {
  const { search, setSearch } = useUserStore();
  return (
    <div>
      <input
        type="text"
        className="border p-1.5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search user "
      />
      ;
    </div>
  );
};

export default SearchUser;
