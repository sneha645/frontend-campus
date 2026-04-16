"use client";

import {
  HeadingContainer,
  PaperContainer,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
  ViewProfile,
} from "@/app/(admin)/admin/recruiters/styled";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { Router, Search, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AssignmentsPage() {
  const router = useRouter();
  const [assignmentData, setAssignmentData] = useState({
    assignment_title: "",
    assignment_description: "",
    assignment_assignto: "",
    assignment_deadline: "",
    submissiontype: "",
  });

  const createAssignment = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/api/mentor/assignment",
        assignmentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [assignments, setAssignments] = useState<any[]>([]);
  console.log(assignments);
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  const fetchAssignments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/mentor/get-assignments",
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

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const paginatedAssignments = assignments.slice(
  //   page * rowsPerPage,
  //   (page + 1) * rowsPerPage,
  // );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "20px",
        height: "100vh",
        width: "100%",
        overflow: "auto",
        overflowY: "hidden",
        backgroundColor: "#f6fbf9",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <h1 style={{ fontSize: "28px", color: "#000", fontWeight: "700" }}>
            Create New Assignment
          </h1>
          <p style={{ fontSize: "16px", color: "#94a3b8", fontWeight: "500" }}>
            Set up instructions, resources, and deadlines for your students.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            style={{
              border: "1px solid #94a3b877",
              borderRadius: "8px",
              padding: "14px",
              color: "#000",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Save as Draft
          </button>
          <button
            style={{
              backgroundColor: "#007bff",
              borderRadius: "8px",
              padding: "14px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            onClick={createAssignment}
          >
            <Send color="#fff" />
            Publish Assignment
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #94a3b877",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            width: "70%",
            backgroundColor: "#fff",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "18px", color: "#000", fontWeight: "600" }}>
              Assignment Details
            </h1>
          </div>
          <hr style={{ color: "#94a3b877" }} />
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "16px", color: "#000", fontWeight: "600" }}
              >
                Assignment Title
              </label>
              <input
                value={assignmentData.assignment_title}
                onChange={(e) =>
                  setAssignmentData({
                    ...assignmentData,
                    assignment_title: e.target.value,
                  })
                }
                placeholder="UX Research case study - Phase 1"
                style={{
                  outline: "none",
                  borderRadius: "8px",
                  border: "1px solid #94a3b877",
                  padding: "10px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "16px", color: "#000", fontWeight: "600" }}
              >
                Instructions & Description
              </label>
              <textarea
                value={assignmentData.assignment_description}
                onChange={(e) =>
                  setAssignmentData({
                    ...assignmentData,
                    assignment_description: e.target.value,
                  })
                }
                rows={5}
                placeholder="In this assignment, students will be required to conduct preliminary user research and define user personas. Please include specific constraints..."
                style={{
                  outline: "none",
                  borderRadius: "8px",
                  border: "1px solid #94a3b877",
                  padding: "10px",
                  fontSize: "14px",
                  resize: "none",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #94a3b877",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            width: "30%",
            backgroundColor: "#fff",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "18px", color: "#000", fontWeight: "600" }}>
              Assignment Details
            </h1>
          </div>
          <hr style={{ color: "#94a3b877" }} />
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "16px", color: "#000", fontWeight: "600" }}
              >
                Assign to
              </label>
              <select
                value={assignmentData.assignment_assignto}
                onChange={(e) =>
                  setAssignmentData({
                    ...assignmentData,
                    assignment_assignto: e.target.value,
                  })
                }
                id="jobType"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="">Select year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "16px", color: "#000", fontWeight: "600" }}
              >
                Submission Date
              </label>
              <input
                type="date"
                value={assignmentData.assignment_deadline}
                onChange={(e) =>
                  setAssignmentData({
                    ...assignmentData,
                    assignment_deadline: e.target.value,
                  })
                }
                placeholder="In this assignment, students will be required to conduct preliminary user research and define user personas. Please include specific constraints..."
                style={{
                  outline: "none",
                  borderRadius: "8px",
                  border: "1px solid #94a3b877",
                  padding: "10px",
                  fontSize: "14px",
                  resize: "none",
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "16px", color: "#000", fontWeight: "600" }}
              >
                Submission type
              </label>
              <select
                value={assignmentData.submissiontype}
                onChange={(e) =>
                  setAssignmentData({
                    ...assignmentData,
                    submissiontype: e.target.value,
                  })
                }
                id="jobType"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="">Select type</option>
                <option value="file">File</option>
                <option value="link">Link</option>
                <option value="text">Text</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
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
                // value={searchAssignment}
                // onChange={(e) => setSearchAssignment(e.target.value)}
              />
            </SearchContainer>
          </PaperContainer>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Submission Type</TableCell>
                  <TableCell>Assigned To</TableCell>
                  <TableCell>Deadline</TableCell>

                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {assignments.map((assignment, index) => (
                  <TableRow key={index}>
                    <TableCell>{assignment.assignment_title}</TableCell>
                    <TableCell>{assignment.submissiontype}</TableCell>
                    <TableCell>{assignment.assignment_assignto}</TableCell>
                    <TableCell>{assignment.assignment_deadline}</TableCell>

                    <TableCell>
                      <ViewProfile
                        onClick={() => {
                          router.push(
                            `/mentor/assignments/${assignment.assignment_id}`,
                          );
                        }}
                      >
                        View Submissions
                      </ViewProfile>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredAssignments.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>

        {/* <AssignmentModal
          open={openAssignmentModal}
          onClose={() => {
            setOpenAssignmentModal(false);
            setSelectedAssignment(null); // reset
          }}
          assignment={selectedAssignment}
        /> */}

        {/* <FormModal
          open={uploadAssignmentModal}
          onClose={() => setUploadAssignmentModal(false)}
          style={{
            display: "flex",
            alignItems: "center",
            justifySelf: "center",
          }}
        >
          <UploadAssignmentForm assignmentId={selectedAssignmentId} />
        </FormModal> */}
      </div>
    </div>
  );
}
