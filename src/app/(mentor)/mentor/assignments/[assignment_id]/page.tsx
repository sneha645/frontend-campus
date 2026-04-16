"use client";

import {
  PaperContainer,
  TableHeading,
  TableSubHeading,
  SearchContainer,
  SearchInput,
  ViewProfile,
  HeadingContainer,
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
import { Search } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AssignmentPage() {
  const { assignment_id } = useParams();

  const [assignments, setAssignments] = useState([]);
  const getSubmittedAssignments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/mentor/submitted-assignments/${assignment_id}`,
      );
      setAssignments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/mentor/approve-assignment/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      getSubmittedAssignments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/mentor/reject-assignment/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      getSubmittedAssignments();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubmittedAssignments();
  }, []);
  return (
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
                <TableCell>Student Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Submitted At</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {assignments.map((assignment, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {assignment.assignment.assignment_title}
                  </TableCell>
                  <TableCell>{assignment.student.name}</TableCell>
                  <TableCell>{assignment.status}</TableCell>
                  <TableCell>{assignment.submittedAt}</TableCell>

                  <TableCell>
                    <ViewProfile
                      onClick={() => {
                        window.open(
                          `http://localhost:3000${assignment.fileUrl}`,
                          "_blank",
                        );
                      }}
                    >
                      View Assignment
                    </ViewProfile>
                    <ViewProfile
                      onClick={() => handleApprove(assignment.submission_id)}
                    >
                      Approve
                    </ViewProfile>
                    <ViewProfile
                      onClick={() => handleReject(assignment.submission_id)}
                    >
                      Reject
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
  );
}
