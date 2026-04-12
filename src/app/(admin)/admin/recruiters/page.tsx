"use client";

import { recruiterTableColumns, User } from "@/types/type";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
  TablePagination,
} from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Recruiter } from "@/types/type";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { Dot, Search } from "lucide-react";
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
} from "./styled";

export default function RecruiterPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchRecruiter, setSearchRecruiter] = useState("");

  const [recruiters, setRecruiters] = useState<User[]>([]);
  console.log("recruiters", recruiters);

  const fetchRecruiters = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get(
        "http://localhost:3000/api/recruiter/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response);
      const data = await response.data;
      setRecruiters(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredRecruiters = useMemo(() => {
    return recruiters.filter((r) =>
      r.name.toLowerCase().includes(searchRecruiter.toLowerCase()),
    );
  }, [recruiters, searchRecruiter]);

  const paginatiedRecruiter = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredRecruiters.slice(start, start + rowsPerPage);
  }, [filteredRecruiters, page, rowsPerPage]);

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
    fetchRecruiters();
  }, []);

  const handleApprove = async (id: string) => {
    const token = localStorage.getItem('token')
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
      fetchRecruiters();
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
            <TableHeading>New Recruiter Requests</TableHeading>
            <TableSubHeading>
              Pending requests list with manual moderation for approvals,
              rejects and compliance review.
            </TableSubHeading>
          </HeadingContainer>
          <SearchContainer>
            <Search size={20} />
            <SearchInput
              placeholder="Search recruiter"
              value={searchRecruiter}
              onChange={(e) => setSearchRecruiter(e.target.value)}
            />
          </SearchContainer>
        </PaperContainer>
        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                {recruiterTableColumns.map((column) => (
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
              {paginatiedRecruiter &&
                paginatiedRecruiter?.length > 0 &&
                paginatiedRecruiter?.map((recruiter) => (
                  <TableRow key={recruiter.email}>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {recruiter.name}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {recruiter.companyName}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {recruiter.email}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {recruiter.createdAt}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box
                        sx={{
                          backgroundColor: `${recruiter.status === "approved" ? "#def2e6" : recruiter.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                          padding: "10px 20px",
                          borderRadius: "30px",
                          display: "flex",
                          alignItems: "center",
                          width: "fit-content",
                          color: `${recruiter.status === "approved" ? "#16a34a" : recruiter.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                          fontSize: "12px",
                        }}
                      >
                        {recruiter.status}
                      </Box>
                    </TableCell>
                    <TableCell style={{ display: "flex", gap: "10px" }}>
                      {recruiter.status === "pending" ? (
                        <Box sx={{display: 'flex', gap: '10px'}}>
                          <ApproveButton
                            style={{ fontFamily: "Poppins" }}
                            onClick={() =>
                              recruiter.user_id &&
                              handleApprove(recruiter.user_id)
                            }
                          >
                            Approve
                          </ApproveButton>
                          <RejectButton
                            style={{ fontFamily: "Poppins" }}
                            onClick={() =>
                              recruiter.user_id &&
                              handleApprove(recruiter.user_id)
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
            count={paginatiedRecruiter.length}
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
