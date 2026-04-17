// "use client";

// import React from "react";
// import { useAuth } from "@/context/AuthContext";
// import { Avatar } from "@mui/material";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Calendar,
//   BookOpen,
//   Briefcase,
//   Code,
//   FileText,
//   Download,
//   Upload,
//   ExternalLink,
// } from "lucide-react";
// import {
//   ProfileContainer,
//   HeroSection,
//   HeroBackground,
//   HeroContent,
//   AvatarWrapper,
//   ProfileInfo,
//   Name,
//   Headline,
//   InfoGrid,
//   Column,
//   Card,
//   CardHeader,
//   CardTitle,
//   ContactItem,
//   SkillsWrapper,
//   SkillTag,
//   TimelineItem,
//   ItemTitle,
//   ItemSubtitle,
//   ItemDate,
//   ActionButton,
//   ResumeArea,
//   Badge,
// } from "./styled";
// import { GitHub, LinkedIn } from "@mui/icons-material";

// export default function ProfilePage() {
//   const { user } = useAuth();

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   // Mock data for missing fields
//   const mockBio =
//     "Passionate computer science student dedicated to building innovative software solutions. Focused on web development, AI, and cloud computing.";
//   const mockSkills = [
//     "React",
//     "TypeScript",
//     "Next.js",
//     "Node.js",
//     "Python",
//     "SQL",
//     "Git",
//     "Docker",
//     "Agile Methodologies",
//   ];
//   const mockEducation = [
//     {
//       school: "CampusConnect Institute of Technology",
//       degree: `Bachelor of Technology in ${user.branch || "Computer Science"}`,
//       date: `Class of ${user.year || "2026"}`,
//       status: "Currently Studying",
//     },
//   ];
//   const mockProjects = [
//     {
//       title: "Task Management System",
//       description:
//         "A full-stack collaborative task management tool built with React and Firestore.",
//       date: "Jan 2024 - Mar 2024",
//     },
//     {
//       title: "Portfolio Website",
//       description:
//         "Personal portfolio showcasing projects and skills using Next.js and Tailwind.",
//       date: "Dec 2023",
//     },
//   ];

//   return (
//     <ProfileContainer>
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroBackground />
//         <HeroContent>
//           <AvatarWrapper>
//             <Avatar
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 fontSize: "48px",
//                 bgcolor: "#0b75ff",
//                 borderRadius: "14px",
//               }}
//             >
//               {user.name.charAt(0).toUpperCase()}
//             </Avatar>
//           </AvatarWrapper>
//           <ProfileInfo>
//             <Name>{user.name}</Name>
//             <Headline>
//               {user.branch} • Year {user.year}
//             </Headline>
//           </ProfileInfo>
//           <ActionButton $primary>
//             <ExternalLink size={18} />
//             Share Profile
//           </ActionButton>
//         </HeroContent>
//       </HeroSection>

//       <InfoGrid>
//         {/* Left Column */}
//         <Column>
//           {/* About Section */}
//           <Card>
//             <CardHeader>
//               <CardTitle>About Me</CardTitle>
//             </CardHeader>
//             <p
//               style={{ color: "#475569", fontSize: "14px", lineHeight: "1.6" }}
//             >
//               {mockBio}
//             </p>
//           </Card>

//           {/* Contact Details */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Contact Information</CardTitle>
//             </CardHeader>
//             <ContactItem>
//               <Mail size={18} />
//               {user.email}
//             </ContactItem>
//             <ContactItem>
//               <Phone size={18} />
//               +91 98765 43210
//             </ContactItem>
//             <ContactItem>
//               <MapPin size={18} />
//               City, State, India
//             </ContactItem>
//           </Card>

//           {/* Social Links */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Professional Links</CardTitle>
//             </CardHeader>
//             <ContactItem style={{ cursor: "pointer" }}>
//               <GitHub size={18} />
//               github.com/username
//             </ContactItem>
//             <ContactItem style={{ cursor: "pointer" }}>
//               <LinkedIn size={18} />
//               linkedin.com/in/username
//             </ContactItem>
//           </Card>

//           {/* Skills Section */}
//           <Card>
//             <CardHeader>
//               <CardTitle>
//                 <Code size={18} />
//                 Skills & Expertise
//               </CardTitle>
//             </CardHeader>
//             <SkillsWrapper>
//               {mockSkills.map((skill, index) => (
//                 <SkillTag key={index}>{skill}</SkillTag>
//               ))}
//             </SkillsWrapper>
//           </Card>
//         </Column>

//         {/* Right Column */}
//         <Column>
//           {/* Resume Section */}
//           <Card>
//             <CardHeader>
//               <CardTitle>
//                 <FileText size={18} />
//                 My Resume
//               </CardTitle>
//             </CardHeader>
//             <ResumeArea>
//               <div
//                 style={{
//                   background: "#f0f7ff",
//                   padding: "16px",
//                   borderRadius: "50%",
//                   color: "#0b75ff",
//                 }}
//               >
//                 <FileText size={32} />
//               </div>
//               <div>
//                 <h3
//                   style={{
//                     fontSize: "16px",
//                     fontWeight: "600",
//                     marginBottom: "4px",
//                   }}
//                 >
//                   Resume_Final_2024.pdf
//                 </h3>
//                 <p style={{ fontSize: "13px", color: "#64748b" }}>
//                   Last updated 2 weeks ago
//                 </p>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   gap: "12px",
//                   width: "100%",
//                   justifyContent: "center",
//                 }}
//               >
//                 <ActionButton>
//                   <Download size={18} />
//                   Download
//                 </ActionButton>
//                 <ActionButton $primary>
//                   <Upload size={18} />
//                   Update
//                 </ActionButton>
//               </div>
//             </ResumeArea>
//           </Card>

//           {/* Education */}
//           <Card>
//             <CardHeader>
//               <CardTitle>
//                 <BookOpen size={18} />
//                 Education
//               </CardTitle>
//             </CardHeader>
//             {mockEducation.map((edu, index) => (
//               <TimelineItem key={index}>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "flex-start",
//                   }}
//                 >
//                   <div>
//                     <ItemTitle>{edu.school}</ItemTitle>
//                     <ItemSubtitle>{edu.degree}</ItemSubtitle>
//                     <ItemDate>{edu.date}</ItemDate>
//                   </div>
//                   <Badge>{edu.status}</Badge>
//                 </div>
//               </TimelineItem>
//             ))}
//           </Card>

//           {/* Projects */}
//           <Card>
//             <CardHeader>
//               <CardTitle>
//                 <Briefcase size={18} />
//                 Key Projects
//               </CardTitle>
//               <ActionButton style={{ padding: "6px 12px", fontSize: "12px" }}>
//                 Browse All
//               </ActionButton>
//             </CardHeader>
//             {mockProjects.map((project, index) => (
//               <TimelineItem key={index}>
//                 <ItemTitle>{project.title}</ItemTitle>
//                 <ItemSubtitle>{project.description}</ItemSubtitle>
//                 <ItemDate>{project.date}</ItemDate>
//               </TimelineItem>
//             ))}
//           </Card>
//         </Column>
//       </InfoGrid>
//     </ProfileContainer>
//   );
// }

export default function ProfileAndResume() {
  return (
    <div>
      <h1>Profile and Resume</h1>
    </div>
  );
}
