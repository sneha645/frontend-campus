export interface User {
  user_id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isVerified?: boolean;
  isDeleted?: boolean;
  status?: string;
  companyName?: string;
  createdAt?: string;
  updatedAt?: string;
  studentProjects?: Project[];
  mentorProjects?: Project[];
}

export interface Project {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[] | string;
  githubUrl: string;
  projectUrl: string;
  imageUrl: string;
  status: string;
  mentor: string;
  student: string;
  createdAt: string;
  updatedAt: string;
}

export interface Internship {
  companyName: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[] | string;
  certificateImage: string;
  status: string;
  mentor: string;
  student: string;
  createdAt: string;
  updatedAt: string;
}

export interface Recruiter {
  name: string;
  companyName: string;
  email: string;
  status: string;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  registerStudent: (user: User, token: string) => void;
  registerMentor: (user: User, token: string) => void;
  registerRecruiter: (user: User, token: string) => void;
}

export interface RecruiterTableColumns {
  id: "name" | "companyName" | "email" | "status" | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const recruiterTableColumns: readonly RecruiterTableColumns[] = [
  { id: "name", label: "Name", minWidth: 100, align: "left" },
  { id: "companyName", label: "Company Name", minWidth: 100, align: "left" },
  { id: "email", label: "Email", minWidth: 100, align: "left" },
  { id: "status", label: "Status", minWidth: 100, align: "left" },
  { id: "actions", label: "Actions", minWidth: 100, align: "left" },
];
