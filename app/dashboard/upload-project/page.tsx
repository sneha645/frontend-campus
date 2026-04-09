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
import { useState } from "react";

import { FiGithub } from "react-icons/fi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { UploadProject } from "./components/UploadProject";
import { UploadInternship } from "./components/UploadInternship";

export default function UploadProjectPage() {
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [openInternshipModal, setOpenInternshipModal] = useState(false);

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
        <ProjectCard>
          <img
            src="/images/sign-in-bg.jpg"
            alt=""
            style={{ width: "100%", height: "100%", borderRadius: "4px" }}
          />
          <ProjectContent>
            <TitleContainer>
              <Title>Smart Campus Navigator</Title>
              <Status>Pending</Status>
            </TitleContainer>
            <DateContainer>
              <CalendarMonthOutlinedIcon />
              <Time>Jan 2023 - May 2023</Time>
            </DateContainer>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              provident quibusdam repudiandae optio molestias amet reprehenderit
              corrupti animi aut sit.
            </Description>
            <TechStack>
              <Tech>React</Tech>
              <Tech>Node.js</Tech>
              <Tech>MongoDB</Tech>
            </TechStack>
            <Hr />
            <CardButtonContainer>
              <CardButton>
                <FiGithub />
                <p>GitHub</p>
              </CardButton>
              <CardButton>
                <LuSquareArrowOutUpRight />
                <p>Live</p>
              </CardButton>
            </CardButtonContainer>
          </ProjectContent>
        </ProjectCard>
      </ProjectGrid>
      <FormModal
        open={openProjectModal}
        onClose={() => setOpenProjectModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <UploadProject />
      </FormModal>
      <FormModal
        open={openInternshipModal}
        onClose={() => setOpenInternshipModal(false)}
      >
        <UploadInternship />
      </FormModal>
    </Container>
  );
}
