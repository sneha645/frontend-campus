"use client";

import { Internship, Project } from "@/types/type";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import {
  Feedback,
  FeedbackCard,
  FeedbackContent,
  FeedbackDescription,
  FeedbacksContainer,
  FeedbackSection,
  FeedbackStatus,
  FeedbackTitle,
  FeedbackTitleContainer,
  Image,
  ImageContainer,
  StudentFeedbacksContainer,
  Tab,
  Technology,
  TechnologyContainer,
} from "./styled";
import {
  HeaderSubContainer,
  HeadingContainer,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
} from "@/app/(admin)/admin/recruiters/styled";
import { Search } from "lucide-react";
import { Alert, Box } from "@mui/material";

export default function FeedbacksPage() {
  const [projectFeedbacks, setProjectFeedbacks] = useState<Project[]>([]);
  const [internshipFeedbacks, setInternshipFeedbacks] = useState<Internship[]>(
    [],
  );

  const [searchProjects, setSearchProjects] = useState("");
  const [searchInternships, setSearchInternships] = useState("");
  const [activeTab, setActiveTab] = useState("projects");

  const getFeedbacks = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found");
        return;
      }

      const responseForProject = await axios.get(
        "http://localhost:3000/api/student/getProjectFeedbacks",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const responseForInternship = await axios.get(
        "http://localhost:3000/api/student/getInternshipFeedbacks",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      setProjectFeedbacks(responseForProject.data || []);
      setInternshipFeedbacks(responseForInternship.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProjectsFeedbacks = useMemo(() => {
    return projectFeedbacks.filter((p) =>
      p.title.toLowerCase().includes(searchProjects.toLowerCase()),
    );
  }, [projectFeedbacks, searchProjects]);

  const filteredInternshipsFeedbacks = useMemo(() => {
    return internshipFeedbacks.filter((p) =>
      p.title.toLowerCase().includes(searchInternships.toLowerCase()),
    );
  }, [internshipFeedbacks, searchInternships]);

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <StudentFeedbacksContainer>
      <HeadingContainer>
        <TableHeading>Your {activeTab} Feedbacks</TableHeading>
        <HeaderSubContainer>
          <TableSubHeading>
            Browse through your {activeTab} and see the
            <br /> feedback from mentors.
          </TableSubHeading>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Tab
              onClick={() => setActiveTab("projects")}
              $active={activeTab === "projects"}
            >
              Projects
            </Tab>
            <Tab
              onClick={() => setActiveTab("internships")}
              $active={activeTab === "internships"}
            >
              Internships
            </Tab>

            <SearchContainer>
              <Search size={16} color="#666" />
              {activeTab === "projects" && (
                <SearchInput
                  placeholder="Search project feedback"
                  value={searchProjects}
                  onChange={(e) => setSearchProjects(e.target.value)}
                />
              )}
              {activeTab === "internships" && (
                <SearchInput
                  placeholder="Search internship feedback"
                  value={searchInternships}
                  onChange={(e) => setSearchInternships(e.target.value)}
                />
              )}
            </SearchContainer>
          </Box>
        </HeaderSubContainer>
      </HeadingContainer>

      {activeTab === "projects" && (
        <FeedbacksContainer>
          {filteredProjectsFeedbacks.length === 0 ? (
            <Alert severity="info">No projects found</Alert>
          ) : (
          filteredProjectsFeedbacks.map((feedback) => (
            <FeedbackCard key={feedback.project_id}>
              <ImageContainer>
                <Image
                  src={`http://localhost:3000${feedback.imageUrl}`}
                ></Image>
              </ImageContainer>
              <FeedbackContent>
                <FeedbackTitleContainer>
                  <FeedbackTitle>{feedback.title}</FeedbackTitle>
                  <FeedbackStatus $status={feedback.status}>
                    {feedback.status}
                  </FeedbackStatus>
                </FeedbackTitleContainer>
                <FeedbackDescription>
                  {feedback.description}
                </FeedbackDescription>
                <TechnologyContainer>
                  {(typeof feedback.technologies === "string"
                    ? feedback.technologies.split(",")
                    : Array.isArray(feedback.technologies)
                      ? feedback.technologies
                      : []
                  )
                    .map((tech) => tech.trim())
                    .filter((tech) => tech !== "")
                    .map((tech, index) => (
                      <Technology key={index} $backgroundColor="#f1f5f9">
                        {tech}
                      </Technology>
                    ))}
                </TechnologyContainer>
              </FeedbackContent>
              <FeedbackSection>
                <Feedback>{feedback.feedback || "No feedback yet"}</Feedback>
              </FeedbackSection>
            </FeedbackCard>
          )))
          }
        </FeedbacksContainer>
      )}
      {activeTab === "internships" && (
        <FeedbacksContainer>
          {filteredInternshipsFeedbacks.length === 0 ? (
            <Alert severity="info">No internships found</Alert>
          ) : (
          filteredInternshipsFeedbacks.map((feedback) => (
            <FeedbackCard key={feedback.internship_id}>
              <ImageContainer>
                <Image
                  src={`http://localhost:3000${feedback.certificateUrl}`}
                ></Image>
              </ImageContainer>
              <FeedbackContent>
                <FeedbackTitleContainer>
                  <FeedbackTitle>{feedback.title}</FeedbackTitle>
                  <FeedbackStatus $status={feedback.status}>
                    {feedback.status}
                  </FeedbackStatus>
                </FeedbackTitleContainer>
                <FeedbackDescription>
                  {feedback.description}
                </FeedbackDescription>
                <TechnologyContainer>
                  {(typeof feedback.technologies === "string"
                    ? feedback.technologies.split(",")
                    : Array.isArray(feedback.technologies)
                      ? feedback.technologies
                      : []
                  )
                    .map((tech) => tech.trim())
                    .filter((tech) => tech !== "")
                    .map((tech, index) => (
                      <Technology key={index} $backgroundColor="#f1f5f9">
                        {tech}
                      </Technology>
                    ))}
                </TechnologyContainer>
              </FeedbackContent>
              <FeedbackSection>
                <Feedback>{feedback.feedback || "No feedback yet"}</Feedback>
              </FeedbackSection>
            </FeedbackCard>
          )))
          }
        </FeedbacksContainer>
      )}
    </StudentFeedbacksContainer>
  );
}
