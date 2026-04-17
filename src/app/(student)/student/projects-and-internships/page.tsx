// "use client";

// import { Box, Modal } from "@mui/material";
// import {
//   ButtonContainer,
//   ButtonWrapper,
//   CardButton,
//   CardButtonContainer,
//   Container,
//   DateContainer,
//   Description,
//   FormModal,
//   Hr,
//   Option,
//   ProjectCard,
//   ProjectContent,
//   ProjectGrid,
//   Select,
//   Status,
//   Tech,
//   TechStack,
//   Time,
//   Title,
//   TitleContainer,
//   UploadButton,
// } from "./styled";
// import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
// import { useEffect, useState } from "react";

// import { FiGithub } from "react-icons/fi";
// import { LuSquareArrowOutUpRight } from "react-icons/lu";

// import axios from "axios";
// import { Project, Internship } from "@/types/type";
// import { UploadProject } from "@/components/UploadProject";
// import { UploadInternship } from "@/components/UploadInternship";

// export default function ProjectAndInternshipPage() {
//   const [openProjectModal, setOpenProjectModal] = useState(false);
//   const [openInternshipModal, setOpenInternshipModal] = useState(false);
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [internships, setInternships] = useState<Internship[]>([]);
//   console.log(projects);
//   console.log(internships);

//   const getStudentProjectandInternship = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.log("No token found");
//         return;
//       }

//       const response1 = await axios.get(
//         "http://localhost:3000/api/student/getMyProjects",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         },
//       );

//       const response2 = await axios.get(
//         "http://localhost:3000/api/student/getMyInternships",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         },
//       );

//       console.log(response1.data);
//       console.log(response2.data);

//       setProjects(response1.data || []);
//       setInternships(response2.data || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getStudentProjectandInternship();
//   }, []);

//   return (
//     <Container>
//       <ButtonContainer>
//         <ButtonWrapper>
//           <UploadButton onClick={() => setOpenProjectModal(true)}>
//             Upload Project
//           </UploadButton>
//           <UploadButton onClick={() => setOpenInternshipModal(true)}>
//             Upload Internship
//           </UploadButton>
//         </ButtonWrapper>
//         <Box>
//           <Select>
//             <Option value="project">Project</Option>
//             <Option value="internship">Internship</Option>
//           </Select>
//         </Box>
//       </ButtonContainer>
//       <ProjectGrid>
//         {projects.map((item, index) => (
//           <ProjectCard key={`project-${index}`}>
//             <div
//               style={{
//                 height: "70%",
//                 width: "100%",
//                 overflow: "hidden",
//                 borderRadius: "4px",
//               }}
//             >
//               <img
//                 src={`http://localhost:3000${item.imageUrl}`}
//                 alt=""
//                 style={{ width: "100%", height: "100%", borderRadius: "4px" }}
//               />
//             </div>

//             <ProjectContent>
//               <TitleContainer>
//                 <Title>{item.title}</Title>
//                 <Status>{item.status || "Pending"}</Status>
//               </TitleContainer>

//               <DateContainer>
//                 <CalendarMonthOutlinedIcon />
//                 <Time>
//                   {item.startDate} - {item.endDate}
//                 </Time>
//               </DateContainer>

//               <Description>{item.description}</Description>

//               <TechStack>
//                 {typeof item.technologies === "string"
//                   ? item.technologies
//                       .split(",")
//                       .map((tech, i) => <Tech key={i}>{tech.trim()}</Tech>)
//                   : item.technologies?.map((tech, i) => (
//                       <Tech key={i}>{tech}</Tech>
//                     ))}
//               </TechStack>

//               <Hr />

//               <CardButtonContainer>
//                 {item.githubUrl && (
//                   <CardButton onClick={() => window.open(item.githubUrl)}>
//                     <FiGithub />
//                     <p>GitHub</p>
//                   </CardButton>
//                 )}

//                 {item.projectUrl && (
//                   <CardButton onClick={() => window.open(item.projectUrl)}>
//                     <LuSquareArrowOutUpRight />
//                     <p>Live</p>
//                   </CardButton>
//                 )}
//               </CardButtonContainer>
//             </ProjectContent>
//           </ProjectCard>
//         ))}

//         {/* Internships */}
//         {internships.map((item, index) => (
//           <ProjectCard key={`internship-${index}`}>
//             <img
//               src={`http://localhost:3000/${item.certificateImage}`}
//               alt=""
//               style={{ width: "100%", height: "50%", borderRadius: "4px" }}
//             />

//             <ProjectContent>
//               <TitleContainer>
//                 <Title>{item.companyName}</Title>
//                 <Status>{item.status || "Pending"}</Status>
//               </TitleContainer>

//               <DateContainer>
//                 <CalendarMonthOutlinedIcon />
//                 <Time>
//                   {item.startDate} - {item.endDate}
//                 </Time>
//               </DateContainer>

//               <Description>{item.description}</Description>

//               <TechStack>
//                 {typeof item.technologies === "string"
//                   ? item.technologies
//                       .split(",")
//                       .map((tech, i) => <Tech key={i}>{tech.trim()}</Tech>)
//                   : item.technologies?.map((tech, i) => (
//                       <Tech key={i}>{tech}</Tech>
//                     ))}
//               </TechStack>

//               <Hr />

//               <CardButtonContainer>
//                 {item.certificateImage && (
//                   <CardButton
//                     onClick={() => window.open(item.certificateImage)}
//                   >
//                     <p>View Certificate</p>
//                   </CardButton>
//                 )}
//               </CardButtonContainer>
//             </ProjectContent>
//           </ProjectCard>
//         ))}
//       </ProjectGrid>
//       <FormModal
//         open={openProjectModal}
//         onClose={() => setOpenProjectModal(false)}
//         style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
//       >
//         <UploadProject setOpenProjectModal={setOpenProjectModal} />
//       </FormModal>
//       <FormModal
//         open={openInternshipModal}
//         onClose={() => setOpenInternshipModal(false)}
//       >
//         <UploadInternship setOpenInternshipModal={setOpenInternshipModal} />
//       </FormModal>
//     </Container>
//   );
// }

"use client";

import { Box } from "@mui/material";
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
  Option,
  ProjectCard,
  ProjectContent,
  ProjectGrid,
  Select,
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

export default function ProjectAndInternshipPage() {
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [openInternshipModal, setOpenInternshipModal] = useState(false);

  const [projects, setProjects] = useState<Project[]>([]);
  const [internships, setInternships] = useState<Internship[]>([]);

  const [viewType, setViewType] = useState<"project" | "internship">("project");

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const [projectRes, internshipRes] = await Promise.all([
        axios.get("http://localhost:3000/api/student/getMyProjects", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("http://localhost:3000/api/student/getMyInternships", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setProjects(projectRes.data || []);
      setInternships(internshipRes.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProjectUploaded = (newProject: Project) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleInternshipUploaded = (newInternship: Internship) => {
    setInternships((prev) => [newInternship, ...prev]);
  };

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

        <Box>
          <Select
            value={viewType}
            onChange={(e) =>
              setViewType(e.target.value as "project" | "internship")
            }
          >
            <Option value="project">Project</Option>
            <Option value="internship">Internship</Option>
          </Select>
        </Box>
      </ButtonContainer>

      <ProjectGrid>
        {viewType === "project" &&
          projects.map((item, index) => (
            <ProjectCard key={`project-${index}`}>
              <div style={{ height: "70%", overflow: "hidden" }}>
                <img
                  src={`http://localhost:3000${item.imageUrl}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <ProjectContent>
                <TitleContainer>
                  <Title>{item.title}</Title>
                  <Status
                    style={{
                      backgroundColor: `${item.status === "approved" ? "#def2e6" : item.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                      color: `${item.status === "approved" ? "#16a34a" : item.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                    }}
                  >
                    {item.status || "Pending"}
                  </Status>
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
                    : item.technologies?.map((t, i) => (
                        <Tech key={i}>{t}</Tech>
                      ))}
                </TechStack>

                <Hr />

                <CardButtonContainer>
                  {item.githubUrl && (
                    <CardButton onClick={() => window.open(item.githubUrl)}>
                      <FiGithub /> <p>GitHub</p>
                    </CardButton>
                  )}
                  {item.projectUrl && (
                    <CardButton onClick={() => window.open(item.projectUrl)}>
                      <LuSquareArrowOutUpRight /> <p>Live</p>
                    </CardButton>
                  )}
                </CardButtonContainer>
              </ProjectContent>
            </ProjectCard>
          ))}

        {/* ✅ INTERNSHIPS */}
        {viewType === "internship" &&
          internships.map((item, index) => (
            <ProjectCard key={`internship-${index}`}>
              <div style={{ height: "70%", overflow: "hidden" }}>
                <img
                  src={`http://localhost:3000${item.certificateUrl}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <ProjectContent>
                <TitleContainer>
                  <Title>{item.title}</Title>
                  <Status
                    style={{
                      backgroundColor: `${item.status === "approved" ? "#def2e6" : item.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                      color: `${item.status === "approved" ? "#16a34a" : item.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                    }}
                  >
                    {item.status}
                  </Status>
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
                    : item.technologies?.map((t, i) => (
                        <Tech key={i}>{t}</Tech>
                      ))}
                </TechStack>

                <Hr />

                <CardButtonContainer>
                  {item.certificateUrl && (
                    <CardButton
                      onClick={() =>
                        window.open(
                          `http://localhost:3000${item.certificateUrl}`,
                        )
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
        open={openProjectModal}
        onClose={() => setOpenProjectModal(false)}
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
