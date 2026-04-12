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
      const response = await fetch("http://localhost:3000/recruiter/all");
      const data = await response.json();
      setRecruiters(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchRecruiters();
  }, []);

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {recruiterTableColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {recruiters.map((recruiter) => (
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
