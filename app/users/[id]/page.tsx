import React from "react";
import type { Post, PostProps } from "@/types/posts";
import { fetchData } from "@/lib/api/interceptor";
import PostList from "@/components/posts/PostList";

const page = async ({ params }: PostProps) => {
  const { id } = await params;
  console.log(id);

  const postData = await fetchData<Post[]>(`/posts?userId=${id}`);

  console.log("postData", postData);
  return (
    <section className="max-w-285 mx-auto">
      <PostList initialData={postData} />;
    </section>
  );
};

export default page;
