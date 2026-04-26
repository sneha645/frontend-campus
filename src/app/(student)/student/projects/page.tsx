"use client";

import { Box } from "@mui/material";
import {
  CardButton,
  CardButtonContainer,
  DateContainer,
  Description,
  FormModal,
  Hr,
  NotfoundContainer,
  NotFoundText,
  ProjectCard,
  ProjectContent,
  ProjectGrid,
  ProjectImage,
  ProjectImageContainer,
  Status,
  StudentProjectsContainer,
  Tech,
  TechStack,
  Time,
  Title,
  TitleContainer,
} from "./styled";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useEffect, useMemo, useState } from "react";

import { FiGithub } from "react-icons/fi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

import axios from "axios";
import { Project } from "@/types/type";
import { UploadProject } from "@/components/UploadProject";
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

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchProject, setSearchProject] = useState("");
  const [openProjectModal, setOpenProjectModal] = useState(false);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get(
        "http://localhost:3000/api/student/getMyProjects",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      setProjects(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((r) =>
      r.title.toLowerCase().includes(searchProject.toLowerCase()),
    );
  }, [projects, searchProject]);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <StudentProjectsContainer>
      <HeaderContainer>
        <HeaderContent>
          <Heading>Upload Your Projects</Heading>
          <HeaderSubContent>
            <SubHeading>
              Showcase your skills and achievements by
              <br />
              uploading your projects.
            </SubHeading>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <SearchContainer>
                <Search size={16} color="#666" />
                <SearchInput
                  value={searchProject}
                  onChange={(e) => setSearchProject(e.target.value)}
                  placeholder="Search projects"
                />
              </SearchContainer>
              <Button onClick={() => setOpenProjectModal(true)}>
                <Upload size={16} />
                Upload Project
              </Button>
            </Box>
          </HeaderSubContent>
        </HeaderContent>
      </HeaderContainer>
      

      {filteredProjects.length === 0 && (
        <NotfoundContainer>
          <NotFoundText>No projects found</NotFoundText>
        </NotfoundContainer>
      )}

      <ProjectGrid>
        {filteredProjects?.map((project) => (
          <ProjectCard key={project.project_id}>
            <ProjectImageContainer>
              <ProjectImage src={`http://localhost:3000${project.imageUrl}`} />
            </ProjectImageContainer>

            <ProjectContent>
              <TitleContainer>
                <Title>{project.title}</Title>
                <Status $color={project.status || "Pending"}>
                  {project.status || "Pending"}
                </Status>
              </TitleContainer>

              <DateContainer>
                <CalendarMonthOutlinedIcon />
                <Time>
                  {project.startDate} - {project.endDate}
                </Time>
              </DateContainer>

              <Description>{project.description}</Description>

              <TechStack>
                {typeof project.technologies === "string"
                  ? project.technologies
                      .split(",")
                      .map((t, i) => <Tech key={i}>{t.trim()}</Tech>)
                  : project.technologies?.map((t, i) => (
                      <Tech key={i}>{t}</Tech>
                    ))}
              </TechStack>

              <Hr />

              <CardButtonContainer>
                {project.githubUrl && (
                  <CardButton onClick={() => window.open(project.githubUrl)}>
                    <FiGithub /> <p>GitHub</p>
                  </CardButton>
                )}
                {project.projectUrl && (
                  <CardButton onClick={() => window.open(project.projectUrl)}>
                    <LuSquareArrowOutUpRight /> <p>Live</p>
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
      >
        <UploadProject
          setOpenProjectModal={setOpenProjectModal}
          onProjectUploaded={fetchProjects}
        />
      </FormModal>
    </StudentProjectsContainer>
  );
}
