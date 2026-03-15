export interface Post {
  userId?: number | string;
  id: number;
  title: string;
  body: string;
}

export interface PostProps {
  params: Promise<{ id: string }>;
}

export interface PostStore {
  posts: Post[];
  title: string;
  body: string;
  error: string;
  setPosts: (data: Post[]) => void;
  setTitle: (titleData: string) => void;
  setBody: (bodyData: string) => void;
  setError: (errorMsg: string) => void;
  addPosts: (post: Post) => void;
  resetForm: () => void;
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
}

export interface PostListProps {
  initialData: Post[];
  userId: number | string;
}

export interface paginationProps {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export interface FormProps {
  userId: number | string;
  viewForm: boolean;
  setViewForm: (value: boolean) => void;
}
