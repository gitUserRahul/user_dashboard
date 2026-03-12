export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface postProps {
  params: Promise<{ id: string }>;
}

export interface PostStore {
  posts: Post[];
  setPosts: (data: Post[]) => void;
}

export interface PostListProps {
  initialData: Post[];
}
