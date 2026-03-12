"use client";

import { useEffect } from "react";
import { usePostStore } from "@/store/posts/usePostStore";
import type { PostListProps } from "@/types/posts";
import PostCard from "@/components/posts/PostCard";

const PostList = ({ initialData }: PostListProps) => {
  const { posts, setPosts } = usePostStore();
  useEffect(() => {
    if (initialData) {
      setPosts(initialData);
    }
  }, [initialData, setPosts]);
  return (
    <>
      <div className="py-5">
        <h1 className="text-3xl font-bold text-gray-800 py-2">User Post</h1>
        <p className="text-gray-600 text-base">This is post of an user </p>
      </div>
      <PostCard posts={posts} />
    </>
  );
};

export default PostList;
