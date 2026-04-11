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