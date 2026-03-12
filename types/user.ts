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
    setUsers: (data: User[]) => void;
}