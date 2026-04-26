"use client";

import axios from "axios";
import { useState } from "react";
import {
  FormContainer,
  Grid,
  Field,
  Label,
  Input,
  Select,
  TextArea,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  FormHeading,
  Hrline,
  FieldRow,
} from "./styled";
import { Alert } from "@mui/material";

export const UploadJob = ({
  setOpenJobModal,
  companyId,
  getMyJobs,
}: {
  setOpenJobModal: (open: boolean) => void;
  companyId: string | undefined;
  getMyJobs: () => void;
}) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState("");

  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    jobType: "",
    experience: "",
    salary: "",
    requirements: "",
    responsibilities: "",
    benefits: "",
  });

  const createJob = async () => {
    setLoading(true);
    if (
      !jobData.title ||
      !jobData.jobType ||
      !jobData.experience ||
      !jobData.responsibilities ||
      !jobData.benefits ||
      !jobData.description ||
      !jobData.salary ||
      !jobData.requirements
    ) {
      setValidationError("Please fill all the required fields");
      setTimeout(() => {
        setValidationError("");
      }, 2000);
      return;
    }
    try {
      const token = localStorage.getItem("token");
      console.log(jobData);
      const response = await axios.post(
        `http://localhost:3000/api/recruiter/createJob/${companyId}`,
        jobData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setSuccess(response.data.message);
      setOpenJobModal(false);
      setTimeout(() => {
        setSuccess("");
      }, 2000);
      getMyJobs();
      setLoading(false);
    } catch (error) {
      setError("Failed to post job");
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <FormContainer>
      <FormHeading>Upload Job</FormHeading>
      <Hrline />
      <Grid>
        <Field>
          <Label>Job Title *</Label>
          <Input
            placeholder="Enter job title"
            value={jobData.title}
            onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
          />
        </Field>

        <Field>
          <Label>Experience *</Label>
          <Input
            placeholder="Enter experience"
            value={jobData.experience}
            onChange={(e) =>
              setJobData({ ...jobData, experience: e.target.value })
            }
          />
        </Field>

        <Field>
          <Label>Salary *</Label>
          <Input
            placeholder="Enter salary"
            value={jobData.salary}
            onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
          />
        </Field>

        <Field>
          <Label>Requirements *</Label>
          <Input
            placeholder="Enter requirements"
            value={jobData.requirements}
            onChange={(e) =>
              setJobData({ ...jobData, requirements: e.target.value })
            }
          />
        </Field>
      </Grid>

      <FieldRow>
        <Field>
          <Label>Job Type *</Label>
          <Select
            value={jobData.jobType}
            onChange={(e) =>
              setJobData({ ...jobData, jobType: e.target.value })
            }
          >
            <option value="">Select job type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </Select>
        </Field>

        <Field>
          <Label>Responsibilities *</Label>
          <TextArea
            placeholder="Enter responsibilities"
            value={jobData.responsibilities}
            onChange={(e) =>
              setJobData({ ...jobData, responsibilities: e.target.value })
            }
          />
        </Field>

        <Field>
          <Label>Benefits *</Label>
          <TextArea
            placeholder="Enter benefits"
            value={jobData.benefits}
            onChange={(e) =>
              setJobData({ ...jobData, benefits: e.target.value })
            }
          />
        </Field>

        <Field>
          <Label>Description *</Label>
          <TextArea
            placeholder="Enter description"
            value={jobData.description}
            onChange={(e) =>
              setJobData({ ...jobData, description: e.target.value })
            }
          />
        </Field>
      </FieldRow>

      <ButtonGroup>
        <PrimaryButton onClick={createJob} disabled={loading}>
          {loading ? "Posting..." : "Post Job"}
        </PrimaryButton>
        <SecondaryButton
          onClick={() =>
            setJobData({
              title: "",

              jobType: "",
              experience: "",
              salary: "",
              requirements: "",
              responsibilities: "",
              benefits: "",
              description: "",
            })
          }
        >
          Reset
        </SecondaryButton>
        {success && (
          <Alert
            severity="success"
            style={{ position: "absolute", right: "0px" }}
          >
            {success}
          </Alert>
        )}
        {error && (
          <Alert
            severity="error"
            style={{ position: "absolute", right: "0px" }}
          >
            {error}
          </Alert>
        )}
        {validationError && (
          <Alert
            severity="error"
            style={{ position: "absolute", right: "0px" }}
          >
            {validationError}
          </Alert>
        )}
      </ButtonGroup>
    </FormContainer>
  );
};
