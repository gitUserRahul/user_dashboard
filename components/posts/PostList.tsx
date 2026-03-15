"use client";

import { useEffect, useState } from "react";
import { usePostStore } from "@/store/posts/usePostStore";
import type { PostListProps } from "@/types/posts";
import PostCard from "@/components/posts/PostCard";
import AddForm from "./AddForm";
import Pagination from "@/components/common/Pagination";
import Link from "next/link";

const PostList = ({ initialData, userId }: PostListProps) => {
  const [viewForm, setViewForm] = useState(false);

  const { posts, setPosts, itemsPerPage, currentPage, setCurrentPage } =
    usePostStore();
  useEffect(() => {
    if (initialData) {
      setPosts(initialData);
    }
  }, [initialData, setPosts]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className=" px-4">
      <Link href="/users" className="underline mt-4 inline-block">
        Go Back
      </Link>
      <div className="py-5 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 py-2">User Post</h1>
          <p className="text-gray-600 text-base">This is post of an user </p>
        </div>

        <div>
          <button
            onClick={() => setViewForm(true)}
            className="bg-gray-500 p-3 text-white rounded-2xl"
          >
            Add New Form
          </button>
          <AddForm
            userId={userId}
            viewForm={viewForm}
            setViewForm={setViewForm}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentItems.map((postItem) => (
          <PostCard key={postItem.id} {...postItem} />
        ))}
      </div>

      <Pagination
        totalItems={posts.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PostList;
