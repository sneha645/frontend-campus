"use client";

import { useParams } from "next/navigation";

export default function StudentProfile() {
  const { id } = useParams();
  return (
    <div>
      <h1>Student Profile {id}</h1>
    </div>
  );
}
