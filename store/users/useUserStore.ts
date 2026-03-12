import { create } from 'zustand';
import {User, UserStore } from "@/types/user"

export const useUserStore = create<UserStore>((set) => ({
users: [],
setUsers: (data: User[]) => set({users: data}), 
}))