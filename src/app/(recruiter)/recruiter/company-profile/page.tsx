"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  CompanyProfile,
  CompanyProfileContainer,
  CompanyProfileForm,
  CompanyProfileHeader,
  CompanyProfileSubContainer,
  CompanyProfileSubHeader,
  Description,
  Form,
  FormContainer,
  FormHeading,
  FormSubHeading,
  Hrline,
  InfoContainer,
  InfoLabel,
  InfoValue,
  Input,
  InputContainer,
  InputGrid,
  InputSubTitle,
  InputTitle,
  Label,
  Logo,
  LogoInput,
  LogoInputContainer,
  NotFound,
  ProfileHeader,
  ProfileInfo,
  ProfileLogo,
  ProfileSubHeader,
  ResetButton,
  SubmitButton,
  TextArea,
  Title,
  TitleContainer,
  Website,
} from "./styled";
import { Company } from "@/types/type";
import { Alert } from "@mui/material";

export default function CompanyProfilePage() {
  const [profile, setProfile] = useState<Company | null>(null);
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const [validation, setValidation] = useState("");
  const [sucess, setSucess] = useState("");
  const [error, setError] = useState("");

  const [companyProfile, setCompanyProfile] = useState({
    companyName: "",
    website: "",
    industry: "",
    companySize: "",
    aboutCompany: "",
    location: "",
    companyEmail: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !companyProfile.companyName ||
      !companyProfile.website ||
      !companyProfile.industry ||
      !companyProfile.companySize ||
      !companyProfile.aboutCompany ||
      !companyLogo ||
      !companyProfile.location ||
      !companyProfile.companyEmail
    ) {
      setValidation("Please fill all the fields");
      setTimeout(() => {
        setValidation("");
      }, 2000);
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("companyName", companyProfile.companyName);
      formDataToSend.append("aboutCompany", companyProfile.aboutCompany);
      formDataToSend.append("website", companyProfile.website);
      formDataToSend.append("industry", companyProfile.industry);
      formDataToSend.append("companySize", companyProfile.companySize);
      formDataToSend.append("location", companyProfile.location);
      formDataToSend.append("companyEmail", companyProfile.companyEmail);

      if (companyLogo) {
        formDataToSend.append("companyLogo", companyLogo);
      }
      await axios.post(
        "http://localhost:3000/api/recruiter/createCompanyProfile",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setSucess("Company profile created successfully");
      setTimeout(() => {
        setSucess("");
      }, 2000);
      setCompanyProfile({
        companyName: "",
        website: "",
        industry: "",
        companySize: "",
        aboutCompany: "",
        location: "",
        companyEmail: "",
      });
      setCompanyLogo(null);
      getCompanyProfile();
    } catch (error) {
      console.error(error);
      setError("Failed to create company profile");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const getCompanyProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:3000/api/recruiter/getCompanyProfile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data) {
        setProfile(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCompanyProfile();
  }, []);

  return (
    <CompanyProfileContainer>
      {sucess && (
        <Alert
          severity="success"
          style={{ position: "absolute", top: "10px", right: "20px" }}
        >
          {sucess}
        </Alert>
      )}
      {error && (
        <Alert
          severity="error"
          style={{ position: "absolute", top: "10px", right: "20px" }}
        >
          {error}
        </Alert>
      )}
      {validation && (
        <Alert
          severity="warning"
          style={{ position: "absolute", top: "10px", right: "20px" }}
        >
          {validation}
        </Alert>
      )}
      <CompanyProfileSubContainer>
        <CompanyProfileForm>
          <CompanyProfileHeader>
            <CompanyProfileSubHeader>
              <FormHeading>Basic Company Details</FormHeading>
              <FormSubHeading>
                Start with the essentials recruiters typically need before
                posting
                <br />
                campus opportunities.
              </FormSubHeading>
            </CompanyProfileSubHeader>
          </CompanyProfileHeader>
          <Hrline />
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <InputGrid>
                <InputContainer>
                  <Label htmlFor="">Company Name</Label>
                  <Input
                    type="text"
                    placeholder="Tech Solutions Pvt. Ltd."
                    value={companyProfile.companyName}
                    onChange={(e) =>
                      setCompanyProfile({
                        ...companyProfile,
                        companyName: e.target.value,
                      })
                    }
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="">Company Website</Label>
                  <Input
                    type="text"
                    placeholder="https://www.example.com"
                    value={companyProfile.website}
                    onChange={(e) =>
                      setCompanyProfile({
                        ...companyProfile,
                        website: e.target.value,
                      })
                    }
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="">Industry</Label>
                  <Input
                    type="text"
                    placeholder="e.g. Information Technology"
                    value={companyProfile.industry}
                    onChange={(e) =>
                      setCompanyProfile({
                        ...companyProfile,
                        industry: e.target.value,
                      })
                    }
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="">Company Size</Label>
                  <Input
                    type="text"
                    placeholder="e.g. 501-1000 employees"
                    value={companyProfile.companySize}
                    onChange={(e) =>
                      setCompanyProfile({
                        ...companyProfile,
                        companySize: e.target.value,
                      })
                    }
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="">Location</Label>
                  <Input
                    type="text"
                    placeholder="e.g. New York, NY"
                    value={companyProfile.location}
                    onChange={(e) =>
                      setCompanyProfile({
                        ...companyProfile,
                        location: e.target.value,
                      })
                    }
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="">Company Email</Label>
                  <Input
                    type="text"
                    placeholder="example@grr.la"
                    value={companyProfile.companyEmail}
                    onChange={(e) =>
                      setCompanyProfile({
                        ...companyProfile,
                        companyEmail: e.target.value,
                      })
                    }
                  />
                </InputContainer>
              </InputGrid>
              <InputContainer style={{ width: "100%" }}>
                <Label htmlFor="">About Company</Label>
                <TextArea
                  rows={4}
                  placeholder="Write a short description of your company"
                  value={companyProfile.aboutCompany}
                  onChange={(e) =>
                    setCompanyProfile({
                      ...companyProfile,
                      aboutCompany: e.target.value,
                    })
                  }
                />
              </InputContainer>
              <InputContainer style={{ width: "100%" }}>
                <InputContainer>
                  <Label htmlFor="">Company Logo</Label>
                  <LogoInputContainer>
                    <InputTitle>Upload Company Logo</InputTitle>
                    <InputSubTitle>
                      SVG, PNG or JPG Recommended 512x512px Used across job
                      listings
                    </InputSubTitle>
                    <LogoInput
                      type="file"
                      accept=".svg,.png,.jpg"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setCompanyLogo(e.target.files[0]);
                        }
                      }}
                    />
                  </LogoInputContainer>
                </InputContainer>
              </InputContainer>
            </Form>
            <ButtonContainer>
              <SubmitButton type="submit">Submit</SubmitButton>
              <ResetButton type="reset">Reset</ResetButton>
            </ButtonContainer>
          </FormContainer>
        </CompanyProfileForm>

        {profile === null && <NotFound>No Profile Found</NotFound>}

        {profile && (
          <CompanyProfile>
            <ProfileHeader>
              <ProfileSubHeader>
                <ProfileLogo>
                  <Logo
                    alt="companyLogo"
                    src={`http://localhost:3000${profile?.logoUrl}`}
                  />
                </ProfileLogo>
                <TitleContainer>
                  <Title>{profile?.companyName}</Title>
                  <Website>{profile?.website}</Website>
                </TitleContainer>
              </ProfileSubHeader>

              <Hrline />
              <ProfileInfo>
                <InfoContainer>
                  <InfoLabel>Industry</InfoLabel>
                  <InfoValue>{profile?.industry}</InfoValue>
                </InfoContainer>
                <InfoContainer>
                  <InfoLabel>Company Size</InfoLabel>
                  <InfoValue>{profile?.companySize}</InfoValue>
                </InfoContainer>
                <InfoContainer>
                  <InfoLabel>Location</InfoLabel>
                  <InfoValue>{profile?.location}</InfoValue>
                </InfoContainer>
                <InfoContainer>
                  <InfoLabel>Company Email</InfoLabel>
                  <InfoValue>{profile?.companyEmail}</InfoValue>
                </InfoContainer>
                <Description>{profile?.aboutCompany}</Description>
              </ProfileInfo>
            </ProfileHeader>
          </CompanyProfile>
        )}
      </CompanyProfileSubContainer>
    </CompanyProfileContainer>
  );
}
