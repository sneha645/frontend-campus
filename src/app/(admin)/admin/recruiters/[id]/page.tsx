"use client";

import { useParams } from "next/navigation";

export default function RecruiterProfile() {
  const { id } = useParams();
  return (
    <div>
      <h1>Recruiter Profile {id}</h1>
    </div>
  );
}
