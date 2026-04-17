// "use client";

// import {
//   HeadingContainer,
//   PaperContainer,
//   SearchContainer,
//   SearchInput,
//   TableHeading,
//   TableSubHeading,
//   ViewProfile,
// } from "@/app/(admin)/admin/recruiters/styled";
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
// import { FormModal } from "../projects-and-internships/styled";

// export default function AssignmentsPage() {
//   const [assignments, setAssignments] = useState<any[]>([]);
//   const [openAssignmentModal, setOpenAssignmentModal] = useState(false);
//   const [selectedAssignment, setSelectedAssignment] = useState<any | null>(
//     null,
//   );

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [searchAssignment, setSearchAssignment] = useState("");

//   const fetchAssignments = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:3000/api/student/assignments",
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );

//       setAssignments(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchAssignments();
//   }, []);

//   const filteredAssignments = useMemo(() => {
//     return assignments.filter((p) =>
//       p.assignment_title.toLowerCase().includes(searchAssignment.toLowerCase()),
//     );
//   }, [assignments, searchAssignment]);

//   const paginatedAssignments = useMemo(() => {
//     const start = page * rowsPerPage;
//     return filteredAssignments.slice(start, start + rowsPerPage);
//   }, [filteredAssignments, page, rowsPerPage]);

//   const handleChangePage = useCallback((_: unknown, newPage: number) => {
//     setPage(newPage);
//   }, []);

//   const handleChangeRowsPerPage = useCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => {
//       setRowsPerPage(+event.target.value);
//       setPage(0);
//     },
//     [],
//   );

//   return (
//     <div style={{ padding: "20px", width: "100%", height: "100%" }}>
//       <Paper style={{ width: "100%", height: "100%" }}>
//         <PaperContainer>
//           <HeadingContainer>
//             <TableHeading>Assignments</TableHeading>
//             <TableSubHeading>
//               View all assigned student assignments
//             </TableSubHeading>
//           </HeadingContainer>

//           <SearchContainer>
//             <Search size={20} />
//             <SearchInput
//               placeholder="Search assignment"
//               value={searchAssignment}
//               onChange={(e) => setSearchAssignment(e.target.value)}
//             />
//           </SearchContainer>
//         </PaperContainer>

//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Title</TableCell>
//                 <TableCell>Submission Type</TableCell>
//                 <TableCell>Assigned To</TableCell>
//                 <TableCell>Deadline</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Action</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {paginatedAssignments.map((assignment, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{assignment.assignment_title}</TableCell>
//                   <TableCell>{assignment.submissiontype}</TableCell>
//                   <TableCell>{assignment.assignment_assignto}</TableCell>
//                   <TableCell>{assignment.assignment_deadline}</TableCell>

//                   <TableCell>{assignment.status}</TableCell>

//                   <TableCell>
//                     <ViewProfile
//                       onClick={() => {
//                         setSelectedAssignment(assignment);
//                         setOpenAssignmentModal(true);
//                       }}
//                     >
//                       View Assignment
//                     </ViewProfile>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={filteredAssignments.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>

//       <AssignmentModal
//         open={openAssignmentModal}
//         onClose={() => setOpenAssignmentModal(false)}
//         assignment={selectedAssignment}
//         refreshAssignments={fetchAssignments}
//       />
//     </div>
//   );
// }

// const AssignmentModal = ({
//   open,
//   onClose,
//   assignment,
//   refreshAssignments,
// }: {
//   open: boolean;
//   onClose: () => void;
//   assignment: any;
//   refreshAssignments: () => void;
// }) => {
//   const [feedback, setFeedback] = useState("");
//   console.log(assignment);

//   return (
//     <FormModal open={open} onClose={onClose}>
//       <Box
//         sx={{
//           background: "white",
//           padding: "30px",
//           width: "500px",
//           borderRadius: "10px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "15px",
//         }}
//       >
//         {/* <h2>{assignment.assignment_title}</h2> */}

//         <p>
//           {/* <strong>Student:</strong> {assignment.assignment_assignto} */}
//         </p>

//         <p>
//           <strong>Start Date:</strong>
//           {/* {assignment.assignment_startdate} */}
//         </p>

//         <p>
//           {/* <strong>End Date:</strong> {assignment.assignment_deadline} */}
//         </p>

//         <p>
//           {/* <strong>Status:</strong> */}
//           {/* {assignment.status} */}
//         </p>

//         <p>
//           {/* <strong>Description:</strong> {assignment.assignment_description} */}
//         </p>
//       </Box>
//     </FormModal>
//   );
// };

"use client";

import {
  ApproveButton,
  HeadingContainer,
  PaperContainer,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
  ViewProfile,
} from "@/app/(admin)/admin/recruiters/styled";
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
import { FormModal } from "../projects-and-internships/styled";

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState<any[]>([]);
  const [openAssignmentModal, setOpenAssignmentModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any | null>(
    null,
  );
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<string>("");
  const [uploadAssignmentModal, setUploadAssignmentModal] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchAssignment, setSearchAssignment] = useState("");

  const fetchAssignments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/student/assignments",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      setAssignments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  // 👉 Open modal only AFTER assignment is set
  useEffect(() => {
    if (selectedAssignment) {
      setOpenAssignmentModal(true);
    }
  }, [selectedAssignment]);

  const filteredAssignments = useMemo(() => {
    return assignments.filter((p) =>
      p.assignment_title
        ?.toLowerCase()
        .includes(searchAssignment.toLowerCase()),
    );
  }, [assignments, searchAssignment]);

  const paginatedAssignments = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredAssignments.slice(start, start + rowsPerPage);
  }, [filteredAssignments, page, rowsPerPage]);

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "20px",
        height: "100%",
        width: "100%",
        overflow: "auto",
        overflowY: "hidden",
      }}
    >
      <Paper style={{ width: "100%", height: "100%" }}>
        <PaperContainer>
          <HeadingContainer>
            <TableHeading>Assignments</TableHeading>
            <TableSubHeading>
              View all assigned student assignments
            </TableSubHeading>
          </HeadingContainer>

          <SearchContainer>
            <Search size={20} />
            <SearchInput
              placeholder="Search assignment"
              value={searchAssignment}
              onChange={(e) => setSearchAssignment(e.target.value)}
            />
          </SearchContainer>
        </PaperContainer>

        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "600",
                    fontFamily: "Poppins",
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "600",
                    fontFamily: "Poppins",
                  }}
                >
                  Submission Type
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "600",
                    fontFamily: "Poppins",
                  }}
                >
                  Assigned To
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "600",
                    fontFamily: "Poppins",
                  }}
                >
                  Deadline
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "600",
                    fontFamily: "Poppins",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedAssignments.map((assignment, index) => (
                <TableRow key={index}>
                  <TableCell
                    style={{
                      fontFamily: "Poppins",
                    }}
                  >
                    {assignment.assignment_title}
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "Poppins",
                    }}
                  >
                    {assignment.submissiontype}
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "Poppins",
                    }}
                  >
                    {assignment.assignment_assignto}
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "Poppins",
                    }}
                  >
                    {assignment.assignment_deadline}
                  </TableCell>

                  <TableCell
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <ApproveButton
                      style={{ width: "fit-content" }}
                      onClick={() => {
                        setUploadAssignmentModal(true);
                        setSelectedAssignmentId(assignment.assignment_id);
                      }}
                    >
                      Upload File
                    </ApproveButton>
                    <ViewProfile
                      onClick={() => setSelectedAssignment(assignment)}
                    >
                      View Assignment
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
          count={filteredAssignments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <AssignmentModal
        open={openAssignmentModal}
        onClose={() => {
          setOpenAssignmentModal(false);
          setSelectedAssignment(null); // reset
        }}
        assignment={selectedAssignment}
      />

      <FormModal
        open={uploadAssignmentModal}
        onClose={() => setUploadAssignmentModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <UploadAssignmentForm assignmentId={selectedAssignmentId} />
      </FormModal>
    </div>
  );
}

const AssignmentModal = ({
  open,
  onClose,
  assignment,
}: {
  open: boolean;
  onClose: () => void;
  assignment: any;
}) => {
  // ✅ Prevent rendering when null
  if (!assignment) return null;

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
          gap: "12px",
        }}
      >
        <h2>{assignment.assignment_title}</h2>

        <p>
          <strong>Assigned To:</strong> {assignment.assignment_assignto}
        </p>

        <p>
          <strong>Submission Type:</strong> {assignment.submissiontype}
        </p>

        <p>
          <strong>Deadline:</strong> {assignment.assignment_deadline}
        </p>

        <p>
          <strong>Status:</strong> {assignment.status}
        </p>

        <p>
          <strong>Description:</strong> {assignment.assignment_description}
        </p>
      </Box>
    </FormModal>
  );
};

export const UploadAssignmentForm = ({
  assignmentId,
}: {
  assignmentId: string;
}) => {
  const [file, setFile] = useState<File | null>(null);

  console.log(assignmentId);
  const handleUploadAssignment = async () => {
    const formDataToSend = new FormData();

    if (file) {
      formDataToSend.append("file", file);
    }
    try {
      const response = await axios.post(
        `http://localhost:3000/api/student/submitAssignment/${assignmentId}`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <label htmlFor="companyName">Resume</label>
      <div
        style={{
          backgroundColor: "#e3e8edff",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "6px",
          padding: "20px",
          borderRadius: "4px",
          border: "1px dashed #0000003d",
        }}
      >
        <h1 style={{ fontSize: "16px", fontWeight: "600" }}>Upload Resume</h1>
        <p style={{ fontSize: "14px", color: "#666666" }}>
          PDF, DOC, DOCX Recommended 512x512px Used across job listings and
          candidate search.
        </p>
        <input
          type="file"
          id="resume"
          style={{ cursor: "pointer" }}
          accept=".pdf,.doc,.docx"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </div>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={handleUploadAssignment}
      >
        Apply Now
      </button>
    </div>
  );
};
