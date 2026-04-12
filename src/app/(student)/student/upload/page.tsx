"use client";

import { Modal } from "@mui/material";
import {
  ButtonContainer,
  ButtonWrapper,
  CardButton,
  CardButtonContainer,
  Container,
  DateContainer,
  Description,
  FormModal,
  Hr,
  ProjectCard,
  ProjectContent,
  ProjectGrid,
  Status,
  Tech,
  TechStack,
  Time,
  Title,
  TitleContainer,
  UploadButton,
} from "./styled";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useEffect, useState } from "react";

import { FiGithub } from "react-icons/fi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

import axios from "axios";
import { Project, Internship } from "@/types/type";
import { UploadProject } from "@/components/UploadProject";
import { UploadInternship } from "@/components/UploadInternship";

export default function UploadPage() {
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [openInternshipModal, setOpenInternshipModal] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [internships, setInternships] = useState<Internship[]>([]);
  console.log(projects);
  console.log(internships);

  const getStudentProjectandInternship = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found");
        return;
      }

      const response1 = await axios.get(
        "http://localhost:3000/api/student/getMyProjects",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const response2 = await axios.get(
        "http://localhost:3000/api/student/getMyInternships",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      console.log(response1.data);
      console.log(response2.data);

      // ✅ store in state
      setProjects(response1.data || []);
      setInternships(response2.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentProjectandInternship();
  }, []);

  return (
    <Container>
      <ButtonContainer>
        <ButtonWrapper>
          <UploadButton onClick={() => setOpenProjectModal(true)}>
            Upload Project
          </UploadButton>
          <UploadButton onClick={() => setOpenInternshipModal(true)}>
            Upload Internship
          </UploadButton>
        </ButtonWrapper>
        {/* <ButtonWrapper>Dropdown</ButtonWrapper> */}
      </ButtonContainer>
      <ProjectGrid>
        {/* Projects */}
        {projects.map((item, index) => (
          <ProjectCard key={`project-${index}`}>
            <img
              src={`http://localhost:3000${item.imageUrl}`}
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: "4px" }}
            />

            <ProjectContent>
              <TitleContainer>
                <Title>{item.title}</Title>
                <Status>{item.status || "Pending"}</Status>
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
                      .map((tech, i) => <Tech key={i}>{tech.trim()}</Tech>)
                  : item.technologies?.map((tech, i) => (
                      <Tech key={i}>{tech}</Tech>
                    ))}
              </TechStack>

              <Hr />

              <CardButtonContainer>
                {item.githubUrl && (
                  <CardButton onClick={() => window.open(item.githubUrl)}>
                    <FiGithub />
                    <p>GitHub</p>
                  </CardButton>
                )}

                {item.projectUrl && (
                  <CardButton onClick={() => window.open(item.projectUrl)}>
                    <LuSquareArrowOutUpRight />
                    <p>Live</p>
                  </CardButton>
                )}
              </CardButtonContainer>
            </ProjectContent>
          </ProjectCard>
        ))}

        {/* Internships */}
        {internships.map((item, index) => (
          <ProjectCard key={`internship-${index}`}>
            <img
              src={`http://localhost:3000/${item.certificateImage}`}
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: "4px" }}
            />

            <ProjectContent>
              <TitleContainer>
                <Title>{item.companyName}</Title>
                <Status>{item.status || "Pending"}</Status>
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
                      .map((tech, i) => <Tech key={i}>{tech.trim()}</Tech>)
                  : item.technologies?.map((tech, i) => (
                      <Tech key={i}>{tech}</Tech>
                    ))}
              </TechStack>

              <Hr />

              <CardButtonContainer>
                {item.certificateImage && (
                  <CardButton
                    onClick={() => window.open(item.certificateImage)}
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
        open={openProjectModal}
        onClose={() => setOpenProjectModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <UploadProject setOpenProjectModal={setOpenProjectModal} />
      </FormModal>
      <FormModal
        open={openInternshipModal}
        onClose={() => setOpenInternshipModal(false)}
      >
        <UploadInternship setOpenInternshipModal={setOpenInternshipModal} />
      </FormModal>
    </Container>
  );
}
