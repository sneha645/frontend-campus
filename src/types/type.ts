export interface SubmittedAssignment {
  submission_id: string;
  assignment: Assignment;
  student: User;
  fileUrl: string;
  status: string;
  feedback: string;
  score: number;
  mentor: User;
  submittedAt: string;
}

export interface Assignment {
  assignment_id: string;
  assignment_title: string;
  assignment_description: string;
  assignment_assignto: string;
  assignment_deadline: string;
  submissiontype: string;
  mentor: User;
  assignment_status: string;
  createdAt: Date;
  updatedAt: Date;
}

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
  job_id: string;
  title: string;
  jobType: string;
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
  company: Company;
  salary: string;
  experience: string;
  responsibilities: string;
  requirements: string;
  benefits: string;
}

export interface Company {
  company_id: string;
  companyName: string;
  aboutCompany: string;
  industry: string;
  companySize: string;
  website: string;
  location: string;
  companyEmail: string;
  logoUrl: string;
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
  feedback?: string;
}

export interface Internship {
  internship_id: string;
  title: string;
  companyName: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[] | string;
  certificateUrl: string;
  status: string;
  mentor: User | string;
  student: User | string;
  createdAt: string;
  updatedAt: string;
  feedback?: string;
  projectUrl: string;
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
  id: "name" | "email" | "createdAt" | "status" | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const recruiterTableColumns: readonly RecruiterTableColumns[] = [
  { id: "name", label: "Name", minWidth: 100, align: "left" },
  { id: "email", label: "Email", minWidth: 100, align: "left" },
  {
    id: "createdAt",
    label: "Registration Date",
    minWidth: 100,
    align: "center",
  },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
  { id: "actions", label: "Actions", minWidth: 100, align: "center" },
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
  {
    id: "createdAt",
    label: "Registration Date",
    minWidth: 100,
    align: "center",
  },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
  { id: "actions", label: "Actions", minWidth: 100, align: "center" },
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
  {
    id: "createdAt",
    label: "Registration Date",
    minWidth: 100,
    align: "center",
  },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
  { id: "actions", label: "Actions", minWidth: 100, align: "center" },
];

export interface ProjectTableColumns {
  id: "title" | "student" | "startDate" | "endDate" | "status" | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const projectTableColumns: readonly ProjectTableColumns[] = [
  { id: "title", label: "Title", minWidth: 100, align: "left" },
  { id: "student", label: "Student", minWidth: 100, align: "left" },
  {
    id: "startDate",
    label: "Start Date",
    minWidth: 100,
    align: "center",
  },
  {
    id: "endDate",
    label: "End Date",
    minWidth: 100,
    align: "center",
  },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
  { id: "actions", label: "Actions", minWidth: 100, align: "center" },
];

export interface AssignmentTableColumns {
  id: "title" | "assignto" | "deadline" | "submissiontype" | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const assignmentTableColumns: readonly AssignmentTableColumns[] = [
  { id: "title", label: "Title", minWidth: 100, align: "left" },
  { id: "assignto", label: "Assigned To", minWidth: 100, align: "center" },
  {
    id: "deadline",
    label: "Deadline",
    minWidth: 100,
    align: "center",
  },
  {
    id: "submissiontype",
    label: "Submission Type",
    minWidth: 100,
    align: "center",
  },
  { id: "actions", label: "Actions", minWidth: 100, align: "center" },
];

export interface SubmittedAssignmentTableColumns {
  id:
    | "title"
    | "student"
    | "submissionDate"
    | "deadline"
    | "status"
    | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const submittedAssignmentTableColumns: readonly SubmittedAssignmentTableColumns[] =
  [
    { id: "title", label: "Title", minWidth: 100, align: "left" },
    { id: "student", label: "Student", minWidth: 100, align: "left" },
    {
      id: "submissionDate",
      label: "Submission Date",
      minWidth: 100,
      align: "center",
    },
    {
      id: "deadline",
      label: "Deadline",
      minWidth: 100,
      align: "center",
    },
    { id: "status", label: "Status", minWidth: 100, align: "center" },
    { id: "actions", label: "Actions", minWidth: 100, align: "center" },
  ];

export interface RecentApplicationsTableColumns {
  id: "company" | "role" | "applyDate" | "status";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const recentApplicationsTableColumns: readonly RecentApplicationsTableColumns[] =
  [
    { id: "company", label: "Company", minWidth: 100, align: "left" },
    { id: "role", label: "Role", minWidth: 100, align: "left" },
    {
      id: "applyDate",
      label: "Apply Date",
      minWidth: 100,
      align: "center",
    },
    {
      id: "status",
      label: "Status",
      minWidth: 100,
      align: "center",
    },
  ];

export interface RecentAssignmentsTableColumns {
  id: "title" | "deadline" | "submissiontype" | "status" | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const recentAssignmentsTableColumns: readonly RecentAssignmentsTableColumns[] =
  [
    { id: "title", label: "Title", minWidth: 100, align: "left" },
    { id: "deadline", label: "Deadline", minWidth: 100, align: "center" },
    {
      id: "submissiontype",
      label: "Submission Type",
      minWidth: 100,
      align: "center",
    },
    {
      id: "status",
      label: "Status",
      minWidth: 100,
      align: "center",
    },
    {
      id: "actions",
      label: "Actions",
      minWidth: 100,
      align: "center",
    },
  ];
