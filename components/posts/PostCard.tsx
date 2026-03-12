import React from "react";

const PostCard = ({ posts }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {posts.map((postItem) => {
        const { id, title, body } = postItem;
        return (
          <div
            key={id}
            className="flex basis-1/2 flex-col px-5 py-5 gap-4 text-center bg-[#F9FAFF]  rounded-2xl"
          >
            <span className="font-bold">Post {id}</span>
            <h3 className="font-semibold text-xl">{title}</h3>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
