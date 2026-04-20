"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "@/types/type";
import { 
  MentorContainer, 
  ProfileHeader, 
  AvatarPlaceholder, 
  HeaderInfo, 
  ProfileName, 
  ProfileRole, 
  InfoGrid, 
  InfoCard, 
  CardTitle, 
  DetailRow, 
  DetailLabel, 
  DetailValue, 
  ActionContainer, 
  DeleteButton, 
  StatusBadge 
} from "../styled";
import { 
  Mail, 
  Trash2, 
  ArrowLeft, 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Award 
} from "lucide-react";
import { Alert, CircularProgress, Box, Breadcrumbs, Link, Typography } from "@mui/material";

export default function MentorProfile() {
  const { id } = useParams();
  const router = useRouter();
  const [mentor, setMentor] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchMentorDetails = async () => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/api/admin/user/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMentor(response.data);
    } catch (err: any) {
      console.error("Error fetching mentor details:", err);
      setError(err.response?.data?.message || "Failed to load mentor details");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this mentor? This action cannot be undone.")) {
      return;
    }

    const token = localStorage.getItem("token");
    try {
      setDeleteLoading(true);
      const response = await axios.delete(`http://localhost:3000/api/admin/user/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 200) {
        alert("Mentor deleted successfully");
        router.push("/admin/mentors");
      }
    } catch (err: any) {
      console.error("Error deleting mentor:", err);
      alert(err.response?.data?.message || "Failed to delete mentor");
    } finally {
      setDeleteLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchMentorDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <MentorContainer>
        <Alert severity="error">{error}</Alert>
        <DeleteButton onClick={() => router.push("/admin/mentors")} style={{ width: 'fit-content' }}>
          <ArrowLeft size={16} /> Back to Mentors
        </DeleteButton>
      </MentorContainer>
    );
  }

  if (!mentor) return null;

  return (
    <MentorContainer>
      <Box sx={{ mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/admin/mentors" onClick={(e) => { e.preventDefault(); router.push("/admin/mentors"); }}>
            Mentors
          </Link>
          <Typography color="text.primary">Profile</Typography>
        </Breadcrumbs>
      </Box>

      <ProfileHeader>
        <AvatarPlaceholder>
          {mentor.name?.charAt(0).toUpperCase()}
        </AvatarPlaceholder>
        <HeaderInfo>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <ProfileName>{mentor.name}</ProfileName>
            <StatusBadge status={mentor.status || "pending"}>
              {mentor.status || "pending"}
            </StatusBadge>
          </Box>
          <ProfileRole>{mentor.specialization || "Mentor"}</ProfileRole>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#666', mt: 1 }}>
            <Mail size={16} />
            <span>{mentor.email}</span>
          </Box>
        </HeaderInfo>
        <ActionContainer>
          <DeleteButton onClick={handleDelete} disabled={deleteLoading}>
            {deleteLoading ? <CircularProgress size={16} color="inherit" /> : <Trash2 size={16} />}
            Delete Mentor
          </DeleteButton>
        </ActionContainer>
      </ProfileHeader>

      <InfoGrid>
        <InfoCard>
          <CardTitle>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Briefcase size={18} />
              Professional Info
            </Box>
          </CardTitle>
          <DetailRow>
            <DetailLabel>Specialization</DetailLabel>
            <DetailValue>{mentor.specialization || "N/A"}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Experience</DetailLabel>
            <DetailValue>{mentor.experience ? `${mentor.experience} Years` : "N/A"}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Department</DetailLabel>
            <DetailValue>{mentor.department || "N/A"}</DetailValue>
          </DetailRow>
        </InfoCard>

        <InfoCard>
          <CardTitle>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <GraduationCap size={18} />
              Education & Background
            </Box>
          </CardTitle>
          <DetailRow>
            <DetailLabel>Branch</DetailLabel>
            <DetailValue>{mentor.branch || "N/A"}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Year</DetailLabel>
            <DetailValue>{mentor.year || "N/A"}</DetailValue>
          </DetailRow>
        </InfoCard>

        <InfoCard>
          <CardTitle>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Calendar size={18} />
              Account Details
            </Box>
          </CardTitle>
          <DetailRow>
            <DetailLabel>Registration Date</DetailLabel>
            <DetailValue>
              {mentor.createdAt ? new Date(mentor.createdAt).toLocaleDateString('en-GB') : "N/A"}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>User ID</DetailLabel>
            <DetailValue style={{ fontSize: '10px' }}>{mentor.user_id}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Verification</DetailLabel>
            <DetailValue>{mentor.isVerified ? "Verified" : "Pending"}</DetailValue>
          </DetailRow>
        </InfoCard>
      </InfoGrid>

      <Box sx={{ mt: 2 }}>
        <DeleteButton onClick={() => router.push("/admin/mentors")} style={{ backgroundColor: '#f0f0f0', color: '#666', border: '1px solid #ddd' }}>
          <ArrowLeft size={16} /> Back to Mentors List
        </DeleteButton>
      </Box>
    </MentorContainer>
  );
}
