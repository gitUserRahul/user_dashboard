import { create } from "zustand";
import { User, UserStore } from "@/types/user";

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  search: "",
  setUsers: (data: User[]) => set({ users: data }),
  setSearch: (searchItem) => set({ search: searchItem }),
}));
