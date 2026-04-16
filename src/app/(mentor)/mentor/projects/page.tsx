// "use client";

// import {
//   ApproveButton,
//   HeadingContainer,
//   PaperContainer,
//   RejectButton,
//   ViewProfile,
//   SearchContainer,
//   SearchInput,
//   TableHeading,
//   TableSubHeading,
// } from "@/app/(admin)/admin/recruiters/styled";
// import { FormModal } from "@/app/(student)/student/projects-and-internships/styled";
// import { Project } from "@/types/type";
// import {
//   Box,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
// } from "@mui/material";
// import axios from "axios";
// import { Search } from "lucide-react";
// import { useCallback, useEffect, useMemo, useState } from "react";

// export interface MentorTableColumns {
//   id: "title" | "student" | "startDate" | "endDate" | "status" | "actions";
//   label: string;
//   minWidth: number;
//   align: "left" | "right" | "center";
// }

// export const studentProjectColumns: readonly MentorTableColumns[] = [
//   { id: "title", label: "Title", minWidth: 100, align: "left" },
//   { id: "student", label: "Student", minWidth: 100, align: "left" },
//   { id: "startDate", label: "Start Date", minWidth: 100, align: "left" },
//   { id: "endDate", label: "End Date", minWidth: 100, align: "left" },
//   { id: "status", label: "Status", minWidth: 100, align: "left" },
//   { id: "actions", label: "Actions", minWidth: 100, align: "left" },
// ];

// export default function ProjectsPage() {
//   const [assignedProjects, setAssignedProjects] = useState<Project[]>([]);
//   const [openProjectModal, setOpenProjectModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [searchProject, setSearchProject] = useState("");

//   const [feedback, setFeedback] = useState("");

//   const fetchAssignedProjects = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:3000/api/mentor/assigned-projects",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );
//       const data = await res.data;
//       setAssignedProjects(data);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const filteredProjects = useMemo(() => {
//     return assignedProjects.filter((p: Project) =>
//       p.title.toLowerCase().includes(searchProject.toLowerCase()),
//     );
//   }, [assignedProjects, searchProject]);

//   const paginatedProjects = useMemo(() => {
//     const start = page * rowsPerPage;
//     return filteredProjects.slice(start, start + rowsPerPage);
//   }, [filteredProjects, page, rowsPerPage]);

//   const handleChangePage = useCallback(
//     (_: unknown, newPage: number) => {
//       setPage(newPage);
//     },
//     [setPage],
//   );

//   const handleChangeRowsPerPage = useCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => {
//       setRowsPerPage(+event.target.value);
//       setPage(0);
//     },
//     [setPage, setRowsPerPage],
//   );

//   // const handleApprove = async (
//   //   id: string,
//   //   feedback: string,
//   //   status: string,
//   // ) => {
//   //   const token = localStorage.getItem("token");
//   //   console.log("project id", id, feedback, status);
//   //   try {
//   //     const response = await axios.post(
//   //       `http://localhost:3000/api/mentor/approveProject/${id}`,
//   //       { feedback, status },
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       },
//   //     );
//   //     console.log(response);
//   //     fetchAssignedProjects();
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const handleReject = async (id: string, feedback: string, status: string) => {
//   //   const token = localStorage.getItem("token");
//   //   try {
//   //     const response = await axios.post(
//   //       `http://localhost:3000/api/mentor/rejectProject/${id}`,
//   //       { feedback, status },
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       },
//   //     );
//   //     console.log(response);
//   //     fetchAssignedProjects();
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   useEffect(() => {
//     fetchAssignedProjects();
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         padding: "20px",
//         gap: "20px",
//         height: "100%",
//         width: "100%",
//         overflow: "auto",
//         overflowY: "hidden",
//       }}
//     >
//       <Paper style={{ width: "100%", height: "100%" }}>
//         <PaperContainer>
//           <HeadingContainer>
//             <TableHeading>New Mentor Requests</TableHeading>
//             <TableSubHeading>
//               Pending requests list with manual moderation for approvals,
//               rejects and compliance review.
//             </TableSubHeading>
//           </HeadingContainer>
//           <SearchContainer>
//             <Search size={20} />
//             <SearchInput
//               placeholder="Search project"
//               value={searchProject}
//               onChange={(e) => setSearchProject(e.target.value)}
//             />
//           </SearchContainer>
//         </PaperContainer>

//         <TableContainer style={{ height: "100%", position: "relative" }}>
//           <Table>
//             <TableHead style={{ backgroundColor: "#f7f8fa" }}>
//               <TableRow>
//                 {studentProjectColumns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     style={{
//                       minWidth: column.minWidth,
//                       fontWeight: "600",
//                       fontFamily: "Poppins",
//                     }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedProjects?.map((project: any, index: number) => (
//                 <TableRow key={index}>
//                   <TableCell style={{ fontFamily: "Poppins" }}>
//                     {project.title}
//                   </TableCell>

//                   <TableCell style={{ fontFamily: "Poppins" }}>
//                     {project.student.name}
//                   </TableCell>
//                   <TableCell style={{ fontFamily: "Poppins" }}>
//                     {project.startDate}
//                   </TableCell>
//                   <TableCell style={{ fontFamily: "Poppins" }}>
//                     {project.endDate}
//                   </TableCell>
//                   <TableCell style={{ fontFamily: "Poppins" }}>
//                     <Box
//                       sx={{
//                         backgroundColor: `${project.status === "approved" ? "#def2e6" : project.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
//                         padding: "10px 20px",
//                         borderRadius: "30px",
//                         display: "flex",
//                         alignItems: "center",
//                         width: "fit-content",
//                         color: `${project.status === "approved" ? "#16a34a" : project.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
//                         fontSize: "12px",
//                       }}
//                     >
//                       {project.status}
//                     </Box>
//                   </TableCell>
//                   <TableCell style={{ display: "flex", gap: "10px" }}>
//                     <Box sx={{ display: "flex", gap: "10px" }}>
//                       <ViewProfile
//                         onClick={() => {
//                           setSelectedProject(project.project_id);
//                           setOpenProjectModal(true);
//                         }}
//                       >
//                         View project
//                       </ViewProfile>
//                     </Box>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <ProjectModal
//           open={openProjectModal}
//           onClose={() => setOpenProjectModal(false)}
//           project={selectedProject}
//         />
//       </Paper>
//     </div>
//   );
// }

// const ProjectModal = ({
//   open,
//   onClose,
//   project,
// }: {
//   open: boolean;
//   onClose: () => void;
//   project: any;
// }) => {
//   const [feedback, setFeedback] = useState("");

//   const handleApprove = (project: any, feedback: string, status: string) => {
//     console.log(project, feedback, status);
//   };

//   return (
//     <FormModal
//       open={open}
//       onClose={onClose}
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifySelf: "center",
//       }}
//     >
//       <div>
//         <div>
//           <h1>{project.title}</h1>
//           <p>{project.student}</p>
//           <p>{project.startDate}</p>
//           <p>{project.endDate}</p>
//           <p>{project.status}</p>
//         </div>
//         <input
//           type="text"
//           placeholder="Enter your feedback"
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)}
//         />
//         <div>
//           <ApproveButton
//             onClick={() => handleApprove(project.id, feedback, "approved")}
//           >
//             Approve
//           </ApproveButton>
//           <RejectButton
//             onClick={() => handleApprove(project.id, feedback, "rejected")}
//           >
//             Reject
//           </RejectButton>
//         </div>
//       </div>
//     </FormModal>
//   );
// };

"use client";

import {
  ApproveButton,
  HeadingContainer,
  PaperContainer,
  RejectButton,
  ViewProfile,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
} from "@/app/(admin)/admin/recruiters/styled";
import { FormModal } from "@/app/(student)/student/projects-and-internships/styled";
import { Project } from "@/types/type";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { Search } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function ProjectsPage() {
  const [assignedProjects, setAssignedProjects] = useState<Project[]>([]);
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchProject, setSearchProject] = useState("");

  const fetchAssignedProjects = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/mentor/assigned-projects",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setAssignedProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAssignedProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return assignedProjects.filter((p) =>
      p.title.toLowerCase().includes(searchProject.toLowerCase()),
    );
  }, [assignedProjects, searchProject]);

  const paginatedProjects = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredProjects.slice(start, start + rowsPerPage);
  }, [filteredProjects, page, rowsPerPage]);

  const handleChangePage = useCallback((_: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    [],
  );

  return (
    <div style={{ padding: "20px", width: "100%", height: "100%" }}>
      <Paper style={{ width: "100%", height: "100%" }}>
        <PaperContainer>
          <HeadingContainer>
            <TableHeading>Projects</TableHeading>
            <TableSubHeading>
              View all assigned student projects
            </TableSubHeading>
          </HeadingContainer>

          <SearchContainer>
            <Search size={20} />
            <SearchInput
              placeholder="Search project"
              value={searchProject}
              onChange={(e) => setSearchProject(e.target.value)}
            />
          </SearchContainer>
        </PaperContainer>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Student</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedProjects.map((project, index) => (
                <TableRow key={index}>
                  <TableCell>{project.title}</TableCell>
                  <TableCell>{project.student?.name}</TableCell>
                  <TableCell>{project.startDate}</TableCell>
                  <TableCell>{project.endDate}</TableCell>

                  <TableCell>{project.status}</TableCell>

                  <TableCell>
                    <ViewProfile
                      onClick={() => {
                        setSelectedProject(project);
                        setOpenProjectModal(true);
                      }}
                    >
                      View Project
                    </ViewProfile>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredProjects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <ProjectModal
        open={openProjectModal}
        onClose={() => setOpenProjectModal(false)}
        project={selectedProject}
        refreshProjects={fetchAssignedProjects}
      />
    </div>
  );
}

/* ---------------- MODAL ---------------- */

const ProjectModal = ({
  open,
  onClose,
  project,
  refreshProjects,
}: {
  open: boolean;
  onClose: () => void;
  project: Project | null;
  refreshProjects: () => void;
}) => {
  const [feedback, setFeedback] = useState("");

  const handleAction = async (status: "approved" | "rejected") => {
    try {
      await axios.post(
        `http://localhost:3000/api/mentor/${status === "approved" ? "approveProject" : "rejectProject"}/${project?.project_id}`,
        {
          feedback,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      refreshProjects();
      onClose();
      setFeedback("");
    } catch (error) {
      console.log(error);
    }
  };

  if (!project) return null;

  return (
    <FormModal open={open} onClose={onClose}>
      <Box
        sx={{
          background: "white",
          padding: "30px",
          width: "500px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2>{project.title}</h2>

        <p>
          <strong>Student:</strong> {project.student?.name}
        </p>

        <p>
          <strong>Start Date:</strong> {project.startDate}
        </p>

        <p>
          <strong>End Date:</strong> {project.endDate}
        </p>

        <p>
          <strong>Status:</strong> {project.status}
        </p>

        <p>
          <strong>Description:</strong> {project.description}
        </p>

        {project.status === "pending" && (
          <>
            <input
              type="text"
              placeholder="Enter feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "6px",
              }}
            />

            <Box sx={{ display: "flex", gap: "10px" }}>
              <ApproveButton onClick={() => handleAction("approved")}>
                Approve
              </ApproveButton>

              <RejectButton onClick={() => handleAction("rejected")}>
                Reject
              </RejectButton>
            </Box>
          </>
        )}
      </Box>
    </FormModal>
  );
};
