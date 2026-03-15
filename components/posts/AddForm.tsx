"use client";

import { usePostStore } from "@/store/posts/usePostStore";
import { postSchema } from "@/schemas/PostSchema";
import type { FormProps } from "@/types/posts";

const AddForm = ({ userId, viewForm, setViewForm }: FormProps) => {
  const {
    title,
    body,
    error,
    setTitle,
    setBody,
    posts,
    setError,
    addPosts,
    resetForm,
  } = usePostStore();

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();

    const formValidation = postSchema.safeParse({ title, body });

    if (!formValidation.success) {
      console.log("formValidation", formValidation);
      setError(formValidation.error.issues[0]?.message);
      return;
    }

    const maxId =
      posts.length > 0 ? Math.max(...posts.map((post) => post.id)) : 10;

    const newPosts = {
      id: maxId + 1,
      userId: userId,
      title: title,
      body: body,
    };

    addPosts(newPosts);
    resetForm();
    setViewForm(false);
    alert("Successfully Create Post!");
  };

  return (
    <section
      className={`${viewForm ? "flex fixed inset-0 items-center justify-center flex-col  bg-black/30" : "hidden"}`}
    >
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 ">
        <div className="flex justify-between items-start ">
          <h1 className="pb-3 font-bold text-xl text-center">Add Form</h1>
          <button onClick={() => setViewForm(false)} className="text-red-500">
            X
          </button>
        </div>

        <form className="gap-4 flex flex-col">
          {error && <span className="bg-red-50 text-lg">{error}</span>}
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="border p-2 rounded-md"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (error) setError("");
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="body">Body</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                if (error) setError("");
              }}
              className="border p-2 rounded-md"
            />
          </div>
          <button
            onClick={handleSavePost}
            className="bg-green-200 w-full rounded-md p-2  flex items-center justify-center font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddForm;
