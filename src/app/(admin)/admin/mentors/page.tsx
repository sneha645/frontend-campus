"use client";

import { mentorTableColumns, User } from "@/types/type";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  TablePagination,
} from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import {
  ApproveButton,
  HeadingContainer,
  PaperContainer,
  RejectButton,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
  ViewProfile,
} from "../recruiters/styled";

export default function MentorsPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchRecruiter, setSearchRecruiter] = useState("");

  const [mentors, setMentors] = useState<User[]>([]);
  console.log("mentors", mentors);

  const fetchMentor = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:3000/api/admin/all-mentors", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      const data = await response.data;
      setMentors(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredMentors = useMemo(() => {
    return mentors.filter((r) =>
      r.name.toLowerCase().includes(searchRecruiter.toLowerCase()),
    );
  }, [mentors, searchRecruiter]);

  const paginatiedMentors = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredMentors.slice(start, start + rowsPerPage);
  }, [filteredMentors, page, rowsPerPage]);

  const handleChangePage = useCallback(
    (_: unknown, newPage: number) => {
      setPage(newPage);
    },
    [setPage],
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    [setPage, setRowsPerPage],
  );

  useEffect(() => {
    fetchMentor();
  }, []);

  const handleApprove = async (id: string) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `http://localhost:3000/api/admin/approve/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response);
      fetchMentor();
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (id: string) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `http://localhost:3000/api/admin/reject/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response);
      fetchMentor();
    } catch (error) {
      console.log(error);
    }
  };

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
            <TableHeading>New Mentor Requests</TableHeading>
            <TableSubHeading>
              Pending requests list with manual moderation for approvals,
              rejects and compliance review.
            </TableSubHeading>
          </HeadingContainer>
          <SearchContainer>
            <Search size={20} />
            <SearchInput
              placeholder="Search mentor"
              value={searchRecruiter}
              onChange={(e) => setSearchRecruiter(e.target.value)}
            />
          </SearchContainer>
        </PaperContainer>
        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                {mentorTableColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "600",
                      fontFamily: "Poppins",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatiedMentors &&
                paginatiedMentors?.length > 0 &&
                paginatiedMentors?.map((mentor) => (
                  <TableRow key={mentor.email}>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {mentor.name}
                    </TableCell>

                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {mentor.email}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {mentor.createdAt}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box
                        sx={{
                          backgroundColor: `${mentor.status === "approved" ? "#def2e6" : mentor.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                          padding: "10px 20px",
                          borderRadius: "30px",
                          display: "flex",
                          alignItems: "center",
                          width: "fit-content",
                          color: `${mentor.status === "approved" ? "#16a34a" : mentor.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                          fontSize: "12px",
                        }}
                      >
                        {mentor.status}
                      </Box>
                    </TableCell>
                    <TableCell style={{ display: "flex", gap: "10px" }}>
                      {mentor.status === "pending" ? (
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <ApproveButton
                            style={{ fontFamily: "Poppins" }}
                            onClick={() =>
                              mentor.user_id && handleApprove(mentor.user_id)
                            }
                          >
                            Approve
                          </ApproveButton>
                          <RejectButton
                            style={{ fontFamily: "Poppins" }}
                            onClick={() =>
                              mentor.user_id && handleReject(mentor.user_id)
                            }
                          >
                            Reject
                          </RejectButton>
                        </Box>
                      ) : (
                        <ViewProfile>View Profile</ViewProfile>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 20, 30]}
            component={"div"}
            count={paginatiedMentors.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ fontFamily: "Poppins" }}
          />
        </TableContainer>
      </Paper>
    </div>
  );
}
