import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Post, PostStore } from "@/types/posts";

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      posts: [],
      title: "",
      body: "",
      error: "",
      setPosts: (data: Post[]) => set({ posts: data, currentPage: 1 }),
      setTitle: (titleData) => set({ title: titleData }),
      setBody: (bodyData) => set({ body: bodyData }),
      setError: (errorMsg) => set({ error: errorMsg }),
      addPosts: (newPost) =>
        set((state) => ({
          posts: [...state.posts, newPost],
        })),

      resetForm: () => set({ title: "", body: "", error: "" }),
      currentPage: 1,
      itemsPerPage: 6 ,
      setCurrentPage: (page) => set({ currentPage: page }),
    }),
    {
      name: "posts-storage",
    },
  ),
);
