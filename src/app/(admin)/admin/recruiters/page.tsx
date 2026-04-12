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
} from "@mui/material";
import { useEffect, useState } from "react";
import { Recruiter } from "@/types/type";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { Dot } from "lucide-react";
import { ApproveButton, RejectButton, ViewProfile } from "./styled";

export default function RecruiterPage() {
  const { token } = useAuth();

  const [recruiters, setRecruiters] = useState<User[]>([]);
  console.log("recruiters", recruiters);

  const fetchRecruiters = async () => {
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

  useEffect(() => {
    fetchRecruiters();
  }, []);

  const handleApprove = async (id: string) => {
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
      }}
    >
      <Paper style={{ width: "100%", height: "100%" }}>
        <TableContainer style={{ height: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                {recruiterTableColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "bold",
                      fontFamily: "Poppins",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {recruiters &&
                recruiters?.length > 0 &&
                recruiters?.map((recruiter) => (
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
                        <>
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
                        </>
                      ) : (
                        <ViewProfile>View Profile</ViewProfile>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
