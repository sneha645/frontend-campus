"use client";

import { useEffect, useState } from "react";
import {
  Form,
  FormButton,
  FormButtonContainer,
  FormContainer,
  FormDateContainer,
  FormDateInput,
  FormDateSubContainer,
  FormInput,
  FormInputContainer,
  FormLabel,
  ResetButton,
  Select,
  TextAreaInput,
  TechStackContainer,
  Option,
} from "../app/(student)/student/upload/styled";
import axios from "axios";
import { Alert } from "@mui/material";
import { useRouter } from "next/navigation";

export const UploadCompany = () => {
  const router = useRouter();
  const [logo, setLogo] = useState<File | null>(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    companyDescription: "",
    website: "",
    logo: "",
    location: "",
    companyEmail: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.companyName ||
      !formData.companyDescription ||
      !formData.website ||
      !logo ||
      !formData.location ||
      !formData.companyEmail
    ) {
      return;
    }
    console.log(formData);

    try {
      const token = localStorage.getItem("token");

      const formDataToSend = new FormData();

      formDataToSend.append("companyName", formData.companyName);
      formDataToSend.append("companyDescription", formData.companyDescription);
      formDataToSend.append("website", formData.website);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("companyEmail", formData.companyEmail);

      if (logo) {
        formDataToSend.append("logo", logo);
      }

      const response = await axios.post(
        "http://localhost:3000/api/recruiter/uploadCompany",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setFormData({
        companyName: "",
        companyDescription: "",
        website: "",
        logo: "",
        location: "",
        companyEmail: "",
      });

      if (response.status === 200) {
        setSuccess(response.data.message);
        router.push("/recruiter/job-postings");
      }
    } catch (error: any) {
      console.log(error.response?.data?.message);
      setError(error.response?.data?.message);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInputContainer>
          <FormLabel>Company Logo *</FormLabel>
          <FormInput
            type="file"
            accept="image/*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                setLogo(e.target.files[0]);
              }
            }}
          />
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel>Company Name *</FormLabel>
          <FormInput
            name="companyName"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
          />
        </FormInputContainer>

        <TechStackContainer>
          <FormLabel>Company Email *</FormLabel>
          <FormInput
            name="companyEmail"
            placeholder="Enter company email"
            value={formData.companyEmail}
            onChange={(e) =>
              setFormData({ ...formData, companyEmail: e.target.value })
            }
          />
        </TechStackContainer>

        <FormDateContainer>
          <FormDateSubContainer>
            <FormLabel>Website *</FormLabel>
            <FormDateInput
              type="url"
              name="website"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
          </FormDateSubContainer>

          <FormDateSubContainer>
            <FormLabel>Location *</FormLabel>
            <FormDateInput
              type="text"
              name="location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </FormDateSubContainer>
        </FormDateContainer>

        <FormInputContainer>
          <FormLabel>Company Description *</FormLabel>
          <TextAreaInput
            name="companyDescription"
            rows={4}
            placeholder="Enter company description"
            value={formData.companyDescription}
            onChange={(e) =>
              setFormData({ ...formData, companyDescription: e.target.value })
            }
          />
        </FormInputContainer>
        <FormButtonContainer>
          <FormButton type="submit">Submit</FormButton>

          <ResetButton
            type="button"
            onClick={() => {
              setFormData({
                companyName: "",
                companyDescription: "",
                website: "",
                logo: "",
                location: "",
                companyEmail: "",
              });
            }}
          >
            Reset
          </ResetButton>
          {success && (
            <Alert
              severity="success"
              style={{ position: "absolute", right: 0 }}
            >
              {success}
            </Alert>
          )}
          {error && (
            <Alert severity="error" style={{ position: "absolute", right: 0 }}>
              {error}
            </Alert>
          )}
        </FormButtonContainer>
      </Form>
    </FormContainer>
  );
};
