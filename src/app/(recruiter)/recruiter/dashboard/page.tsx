"use client";

import { UploadCompany } from "@/components/UploadCompany";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecruiterDashboardPage() {
  // const { user } = useAuth();
  // const [companyProfile, setCompanyProfile] = useState<any>(null);
  // const getCompanyProfile = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.get(
  //       "http://localhost:3000/api/recruiter/company-profile",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     );
  //     setCompanyProfile(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getCompanyProfile();
  // }, []);

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
    //   {companyProfile ? (
    //     <div style={{
    //       maxWidth: "800px",
    //       width: "100%",
    //       margin: "0 auto",
    //       background: "#ffffff",
    //       borderRadius: "24px",
    //       boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
    //       overflow: "hidden",
    //       border: "1px solid rgba(226, 232, 240, 0.8)",
    //       fontFamily: "'Inter', sans-serif"
    //     }}>
    //       {/* Header Section with Background */}
    //       <div style={{
    //         background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
    //         height: "160px",
    //         position: "relative"
    //       }}>
    //         {/* Logo */}
    //         <div style={{
    //           position: "absolute",
    //           bottom: "-40px",
    //           left: "40px",
    //           width: "100px",
    //           height: "100px",
    //           borderRadius: "50%",
    //           background: "#fff",
    //           padding: "4px",
    //           boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           overflow: "hidden",
    //           zIndex: 10
    //         }}>
    //           {companyProfile.logo ? (
    //             <img
    //               src={companyProfile.logo?.startsWith("http") ? companyProfile.logo : `http://localhost:3000${companyProfile.logo}`}
    //               alt={companyProfile.companyName}
    //               style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
    //             />
    //           ) : (
    //             <div style={{ width: "100%", height: "100%", backgroundColor: "#e2e8f0", borderRadius: "50%" }} />
    //           )}
    //         </div>
    //       </div>

    //       {/* Content Section */}
    //       <div style={{ padding: "60px 40px 40px 40px" }}>
    //         <h1 style={{
    //           margin: 0,
    //           fontSize: "32px",
    //           fontWeight: 800,
    //           color: "#0f172a",
    //           letterSpacing: "-0.5px"
    //         }}>
    //           {companyProfile.companyName}
    //         </h1>

    //         <div style={{
    //           margin: "12px 0 32px 0",
    //           color: "#64748b",
    //           fontSize: "15px",
    //           display: "flex",
    //           flexWrap: "wrap",
    //           alignItems: "center",
    //           gap: "24px"
    //         }}>
    //           <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
    //             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    //             {companyProfile.location}
    //           </span>
    //           <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
    //             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    //             {companyProfile.companyEmail}
    //           </span>
    //           <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
    //             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    //             <a href={companyProfile.website} target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", textDecoration: "underline", textUnderlineOffset: "4px" }}>{companyProfile.website}</a>
    //           </span>
    //         </div>

    //         <div style={{
    //           background: "#f8fafc",
    //           padding: "24px 32px",
    //           borderRadius: "16px",
    //           border: "1px solid #e2e8f0"
    //         }}>
    //           <h2 style={{ margin: "0 0 12px 0", fontSize: "18px", color: "#334155", fontWeight: 700 }}>About the Company</h2>
    //           <p style={{ margin: 0, color: "#475569", lineHeight: "1.7", fontSize: "16px" }}>
    //             {companyProfile.companyDescription}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <UploadCompany />
    //   )}
    // </div>
    <div>
      <h1>Recruiter Dashboard</h1>
    </div>
  );
}
