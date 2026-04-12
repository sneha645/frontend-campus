"use client";

import { recruiterTableColumns } from "@/types/type";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Recruiter } from "@/types/type";

export default function RecruiterPage() {
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);

  const fetchRecruiters = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/recruiter/all");
      const data = await response.json();
      setRecruiters(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchRecruiters();
  }, []);

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
                    <TableCell>{recruiter.name}</TableCell>
                    <TableCell>{recruiter.companyName}</TableCell>
                    <TableCell>{recruiter.email}</TableCell>
                    <TableCell>{recruiter.status}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        Edit
                      </Button>
                      <Button variant="contained" color="secondary">
                        Delete
                      </Button>
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
