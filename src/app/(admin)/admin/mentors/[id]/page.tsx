"use client";

import { useParams } from "next/navigation";

export default function MentorProfile() {
  const { id } = useParams();
  return (
    <div>
      <h1>Mentor Profile {id}</h1>
    </div>
  );
}
