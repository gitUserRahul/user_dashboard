export interface Company {
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  company: Company;
}

export interface UserStore {
  users: User[];
  search: string;
  setUsers: (data: User[]) => void;
  setSearch: (searchItem: string) => void;
}

export interface UserListProps {
  initialData: User[];
}

export interface ErrorPageProps {
  error: {
    message: string;
  };
  title?: string;
}

export interface LoadingProps {
  name?: string;
}
