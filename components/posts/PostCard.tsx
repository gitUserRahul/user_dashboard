import type { Post } from "@/types/posts";

const PostCard = ({ id, title, body }: Post) => {
  return (
    <div className="flex basis-full md:basis-1/2 flex-col px-5 py-5 gap-4 text-center bg-[#F9FAFF]  rounded-2xl">
      <span className="font-bold">Post {id}</span>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
