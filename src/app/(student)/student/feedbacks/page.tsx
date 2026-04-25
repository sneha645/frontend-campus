"use client";

import { Internship, Project } from "@/types/type";
import axios from "axios";
import { useEffect, useState } from "react";
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

export default function FeedbacksPage() {
  const [projectFeedbacks, setProjectFeedbacks] = useState<Project[]>([]);
  const [internshipFeedbacks, setInternshipFeedbacks] = useState<Internship[]>(
    [],
  );

  const [searchProjects, setSearchProjects] = useState("");
  const [searchInternships, setSearchInternships] = useState("");

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

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     padding: "20px",
    //     gap: "20px",
    //     height: "100%",
    //     width: "100%",
    //     overflow: "auto",
    //     overflowY: "hidden",
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       gap: "4px",
    //     }}
    //   >
    //     <h1 style={{ fontSize: "28px", fontWeight: "600" }}>
    //       Find your next career opportunity
    //     </h1>
    //     <p style={{ fontSize: "16px", color: "#666" }}>
    //       Browse through the latest jobs and internships posted by top
    //       companies.
    //     </p>
    //   </div>
    //   <div>
    //     {projectFeedbacks.map((feedback) => (
    //       <div
    //         key={feedback.project_id}
    //         style={{
    //           backgroundColor: "#ffffff",
    //           width: "100%",
    //           borderRadius: "16px",
    //           padding: "20px",
    //           display: "flex",
    //           gap: "20px",
    //           boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    //           border: "1px solid #f1f5f9",
    //           transition: "0.3s ease",
    //           marginBottom: "20px",
    //         }}
    //       >
    //         {/* Image */}
    //         <div>
    //           <div
    //             style={{
    //               height: "100px",
    //               width: "100px",
    //               borderRadius: "12px",
    //               overflow: "hidden",
    //               backgroundColor: "#f8fafc",
    //             }}
    //           >
    //             <img
    //               src={`http://localhost:3000${feedback.imageUrl}`}
    //               alt=""
    //               style={{
    //                 height: "100%",
    //                 width: "100%",
    //                 objectFit: "cover",
    //               }}
    //             />
    //           </div>
    //         </div>

    //         {/* Content */}
    //         <div
    //           style={{
    //             flex: 1,
    //             display: "flex",
    //             flexDirection: "column",
    //             gap: "12px",
    //           }}
    //         >
    //           {/* Title + Status */}
    //           <div
    //             style={{
    //               display: "flex",
    //               alignItems: "center",
    //               justifyContent: "flex-start",
    //               gap: "10px",
    //             }}
    //           >
    //             <h1
    //               style={{
    //                 fontSize: "20px",
    //                 fontWeight: "600",
    //                 color: "#111827",
    //                 margin: 0,
    //               }}
    //             >
    //               {feedback.title}
    //             </h1>

    //             <span
    //               style={{
    //                 fontSize: "12px",
    //                 padding: "4px 10px",
    //                 borderRadius: "999px",
    //                 backgroundColor:
    //                   feedback.status === "approved"
    //                     ? "#dcfce7"
    //                     : feedback.status === "pending"
    //                       ? "#fef3c7"
    //                       : "#fee2e2",
    //                 color:
    //                   feedback.status === "approved"
    //                     ? "#166534"
    //                     : feedback.status === "pending"
    //                       ? "#92400e"
    //                       : "#991b1b",
    //                 fontWeight: "500",
    //               }}
    //             >
    //               {feedback.status}
    //             </span>
    //           </div>

    //           {/* Description */}
    //           <p
    //             style={{
    //               fontSize: "14px",
    //               color: "#6b7280",
    //               margin: 0,
    //               lineHeight: "1.5",
    //             }}
    //           >
    //             {feedback.description}
    //           </p>

    //           {/* Technologies */}
    //           <div
    //             style={{
    //               display: "flex",
    //               flexWrap: "wrap",
    //               gap: "8px",
    //             }}
    //           >
    //             {feedback.technologies
    //               ?.split(",")
    //               .map((tech) => tech.trim())
    //               .filter((tech) => tech !== "")
    //               .map((tech, index) => (
    //                 <span
    //                   key={index}
    //                   style={{
    //                     fontSize: "12px",
    //                     padding: "5px 10px",
    //                     borderRadius: "999px",
    //                     backgroundColor: "#f1f5f9",
    //                     color: "#334155",
    //                     fontWeight: "500",
    //                   }}
    //                 >
    //                   {tech}
    //                 </span>
    //               ))}
    //           </div>
    //         </div>

    //         {/* Feedback Section */}
    //         <div
    //           style={{
    //             width: "200px",
    //             padding: "20px",
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             backgroundColor: "#fdefd8",
    //             borderRadius: "12px",
    //           }}
    //         >
    //           <p
    //             style={{
    //               fontSize: "14px",
    //               color: "#f59e0b",
    //               margin: 0,
    //               lineHeight: "1.5",
    //             }}
    //           >
    //             {feedback.feedback || "No feedback yet"}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <StudentFeedbacksContainer>
      <HeadingContainer>
        <TableHeading>Your Project & Internship Feedbacks</TableHeading>
        <HeaderSubContainer>
          <TableSubHeading>
            Browse through your projects & internships and see the
            <br /> feedback from mentors.
          </TableSubHeading>
          <SearchContainer>
            <Search size={16} color="#666" />
            <SearchInput
              placeholder="Search project feedback"
              value={searchProjects}
              onChange={(e) => setSearchProjects(e.target.value)}
            />
          </SearchContainer>
        </HeaderSubContainer>
      </HeadingContainer>
      <FeedbacksContainer>
        {projectFeedbacks.map((feedback) => (
          <FeedbackCard key={feedback.project_id}>
            <ImageContainer>
              <Image src={`http://localhost:3000${feedback.imageUrl}`}></Image>
            </ImageContainer>
            <FeedbackContent>
              <FeedbackTitleContainer>
                <FeedbackTitle>{feedback.title}</FeedbackTitle>
                <FeedbackStatus $status={feedback.status}>
                  {feedback.status}
                </FeedbackStatus>
              </FeedbackTitleContainer>
              <FeedbackDescription>{feedback.description}</FeedbackDescription>
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
        ))}
      </FeedbacksContainer>
    </StudentFeedbacksContainer>
  );
}
