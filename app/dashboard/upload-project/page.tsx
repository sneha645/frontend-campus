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

export default function UploadProject() {
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
        <ButtonWrapper>Dropdown</ButtonWrapper>
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
      <Modal open={openProjectModal} onClose={() => setOpenProjectModal(false)}>
        <h1>Upload Project</h1>
      </Modal>
      <Modal
        open={openInternshipModal}
        onClose={() => setOpenInternshipModal(false)}
      >
        <h1>Upload Internship</h1>
      </Modal>
    </Container>
  );
}
