import { create } from "zustand";
import type { Post, PostStore } from "@/types/posts";

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  setPosts: (data: Post[]) => set({ posts: data }),
}));
