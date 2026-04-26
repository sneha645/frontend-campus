"use client";

import { Box } from "@mui/material";
import {
  CardButton,
  CardButtonContainer,
  DateContainer,
  Description,
  FormModal,
  Hr,
  ProjectCard,
  ProjectContent,
  ProjectGrid,
  Status,
  StudentInternshipsContainer,
  Tech,
  TechStack,
  Time,
  Title,
  TitleContainer,
} from "./styled";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useEffect, useMemo, useState } from "react";

import axios from "axios";
import { Internship } from "@/types/type";
import { UploadInternship } from "@/components/UploadInternship";
import { Search, Upload } from "lucide-react";
import {
  Button,
  HeaderContainer,
  HeaderContent,
  HeaderSubContent,
  Heading,
  SubHeading,
} from "@/app/(admin)/admin/dashboard/styled";
import {
  SearchContainer,
  SearchInput,
} from "@/app/(admin)/admin/recruiters/styled";
import {
  NotfoundContainer,
  NotFoundText,
  ProjectImage,
  ProjectImageContainer,
} from "../projects/styled";

export default function InternshipPage() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [searchInternship, setSearchInternship] = useState("");
  const [openInternshipModal, setOpenInternshipModal] = useState(false);

  const fetchInternships = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get(
        "http://localhost:3000/api/student/getMyInternships",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      setInternships(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredInternships = useMemo(() => {
    return internships.filter((r) =>
      r.title.toLowerCase().includes(searchInternship.toLowerCase()),
    );
  }, [internships, searchInternship]);

  useEffect(() => {
    fetchInternships();
  }, []);

  return (
    <StudentInternshipsContainer>
      <HeaderContainer>
        <HeaderContent>
          <Heading>Upload Your Internships</Heading>
          <HeaderSubContent>
            <SubHeading>
              Showcase your skills and achievements by
              <br />
              uploading your internships.
            </SubHeading>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <SearchContainer>
                <Search size={16} color="#666" />
                <SearchInput
                  value={searchInternship}
                  onChange={(e) => setSearchInternship(e.target.value)}
                  placeholder="Search internships"
                  
                />
              </SearchContainer>
              <Button onClick={() => setOpenInternshipModal(true)}>
                <Upload size={16} />
                Upload Internship
              </Button>
            </Box>
          </HeaderSubContent>
        </HeaderContent>
      </HeaderContainer>

      {filteredInternships.length === 0 && (
        <NotfoundContainer>
          <NotFoundText>No internships found</NotFoundText>
        </NotfoundContainer>
      )}

      <ProjectGrid>
        {filteredInternships.map((item) => (
          <ProjectCard key={item.internship_id}>
            <ProjectImageContainer>
              <ProjectImage
                src={`http://localhost:3000${item.certificateUrl}`}
              />
            </ProjectImageContainer>

            <ProjectContent>
              <TitleContainer>
                <Title>{item.title}</Title>
                <Status $color={item.status || "Pending"}>{item.status}</Status>
              </TitleContainer>

              <DateContainer>
                <CalendarMonthOutlinedIcon />
                <Time>
                  {item.startDate} - {item.endDate}
                </Time>
              </DateContainer>

              <Description>{item.description}</Description>

              <TechStack>
                {typeof item.technologies === "string"
                  ? item.technologies
                      .split(",")
                      .map((t, i) => <Tech key={i}>{t.trim()}</Tech>)
                  : item.technologies?.map((t, i) => <Tech key={i}>{t}</Tech>)}
              </TechStack>
              <Hr />
              <CardButtonContainer>
                {item.certificateUrl && (
                  <CardButton
                    onClick={() =>
                      window.open(`http://localhost:3000${item.certificateUrl}`)
                    }
                  >
                    <p>View Certificate</p>
                  </CardButton>
                )}
              </CardButtonContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>

      <FormModal
        open={openInternshipModal}
        onClose={() => setOpenInternshipModal(false)}
      >
        <UploadInternship
          setOpenInternshipModal={setOpenInternshipModal}
          onInternshipUploaded={fetchInternships}
        />
      </FormModal>
    </StudentInternshipsContainer>
  );
}
