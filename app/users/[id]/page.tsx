import React from "react";
import type { Post, PostProps } from "@/types/posts";
import { fetchData } from "@/lib/api/interceptor";
import PostList from "@/components/posts/PostList";

const page = async ({ params }: PostProps) => {
  const { id } = await params;

  const postData = await fetchData<Post[]>(`/posts?userId=${id}`);

  return (
    <section className="max-w-285 mx-auto">
      <PostList initialData={postData} userId={id} />;
    </section>
  );
};

export default page;
