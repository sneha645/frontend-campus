"use client";

export const UploadJob = ({
  setOpenJobModal,
}: {
  setOpenJobModal: (open: boolean) => void;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "700px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "4px",
        boxShadow: "0 0 0 1px #00000033",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="jobTitle">Job Title *</label>
          <input
            type="text"
            id="jobTitle"
            placeholder="Enter job title"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="jobType">Job Type *</label>
          <select
            id="jobType"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Select job type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="experience">Experience *</label>
          <input
            type="text"
            id="experience"
            placeholder="Enter experience"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="salary">Salary *</label>
          <input
            type="text"
            id="salary"
            placeholder="Enter salary"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="requirements">Requirements *</label>
          <input
            type="text"
            id="requirements"
            placeholder="Enter requirements"
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label htmlFor="responsibilities">Responsibilities *</label>
        <textarea
          id="responsibilities"
          placeholder="Enter responsibilities"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "none",
            height: "100px",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label htmlFor="benefits">Benefits *</label>
        <textarea
          id="benefits"
          placeholder="Enter benefits"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "none",
            height: "100px",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          placeholder="Enter description"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "none",
            height: "100px",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#0b75ff",
            color: "white",
          }}
        >
          Post Job
        </button>
        <button
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#e5e7eb",
            color: "#000",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
