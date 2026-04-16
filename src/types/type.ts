export interface User {
  user_id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  year?: string;
  branch?: string;
  department?: string;
  specialization?: string;
  experience?: string;
  studentProjects?: any;
  mentorProjects?: any;
  studentInternship?: any;
  mentorInternship?: any;
  company?: any;
  applications?: any;
  assignments?: any;
  jobs?: any;
  isVerified?: boolean;
  isDeleted?: boolean;
  status?: string;
  companyName?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Job {
  job_id?: string;
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

export interface Company {
  company_id?: string;
  companyName: string;
  companyDescription: string;
  website: string;
  location: string;
  companyEmail: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  project_id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[] | string;
  githubUrl: string;
  projectUrl: string;
  imageUrl: string;
  status: string;
  mentor: User | string;
  student: User | string;
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
  mentor: User | string;
  student: User | string;
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
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  registerStudent: (
    email: string,
    password: string,
    name: string,
    role: string,
    year: string,
    branch: string,
  ) => Promise<void>;
  registerMentor: (
    email: string,
    password: string,
    name: string,
    role: string,
    department: string,
    experience: string,
    specialization: string,
  ) => Promise<void>;
  registerRecruiter: (
    email: string,
    password: string,
    name: string,
    role: string,
  ) => Promise<void>;
  isLoading: boolean;
  success: string;
  error: string;
}

export interface RecruiterTableColumns {
  id: "name" | "companyName" | "email" | "createdAt" | "status" | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const recruiterTableColumns: readonly RecruiterTableColumns[] = [
  { id: "name", label: "Name", minWidth: 100, align: "left" },
  { id: "companyName", label: "Company Name", minWidth: 100, align: "left" },
  { id: "email", label: "Email", minWidth: 100, align: "left" },
  { id: "createdAt", label: "Registration Date", minWidth: 100, align: "left" },
  { id: "status", label: "Status", minWidth: 100, align: "left" },
  { id: "actions", label: "Actions", minWidth: 100, align: "left" },
];

export interface MentorTableColumns {
  id: "name" | "email" | "createdAt" | "status" | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const mentorTableColumns: readonly MentorTableColumns[] = [
  { id: "name", label: "Name", minWidth: 100, align: "left" },
  { id: "email", label: "Email", minWidth: 100, align: "left" },
  { id: "createdAt", label: "Registration Date", minWidth: 100, align: "left" },
  { id: "status", label: "Status", minWidth: 100, align: "left" },
  { id: "actions", label: "Actions", minWidth: 100, align: "left" },
];

export interface StudentTableColumns {
  id: "name" | "email" | "createdAt" | "status" | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const studentTableColumns: readonly StudentTableColumns[] = [
  { id: "name", label: "Name", minWidth: 100, align: "left" },
  { id: "email", label: "Email", minWidth: 100, align: "left" },
  { id: "createdAt", label: "Registration Date", minWidth: 100, align: "left" },
  { id: "status", label: "Status", minWidth: 100, align: "left" },
  { id: "actions", label: "Actions", minWidth: 100, align: "left" },
];
