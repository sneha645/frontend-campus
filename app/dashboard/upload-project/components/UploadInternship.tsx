import { useState } from "react";
import {
  Form,
  FormButton,
  FormButtonContainer,
  FormContainer,
  FormDateContainer,
  FormDateInput,
  FormDateSubContainer,
  FormInput,
  FormInputContainer,
  FormLabel,
  ResetButton,
  Select,
  TextAreaInput,
  TechStackContainer,
  Option,
} from "../styled";
import axios from "axios";

export const UploadInternship = () => {
  const [certificateImage, setCertificateImage] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company: "",
    startDate: "",
    endDate: "",
    technologies: "",
    projectUrl: "",
    certificateImage: "",
    mentorId: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const formDataToSend = new FormData();

      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("startDate", formData.startDate);
      formDataToSend.append("endDate", formData.endDate);
      formDataToSend.append("technologies", formData.technologies);
      formDataToSend.append("projectUrl", formData.projectUrl);
      formDataToSend.append("mentorId", formData.mentorId);

      if (certificateImage) {
        formDataToSend.append("certificateImage", certificateImage);
      }

      const response = await axios.post(
        "http://localhost:3000/student/uploadInternship",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log(response);
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  };
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInputContainer>
          <FormLabel>Certificate Image *</FormLabel>
          <FormInput
            type="file"
            accept="image/*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                setCertificateImage(e.target.files[0]);
              }
            }}
          />
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel>Title *</FormLabel>
          <FormInput
            name="title"
            placeholder="Enter project title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel>Description *</FormLabel>
          <TextAreaInput
            name="description"
            rows={4}
            placeholder="Enter description of your project"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel>Company Name</FormLabel>
          <FormInput
            name="company"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
        </FormInputContainer>

        <FormDateContainer>
          <FormDateSubContainer>
            <FormLabel>Start Date *</FormLabel>
            <FormDateInput
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
            />
          </FormDateSubContainer>

          <FormDateSubContainer>
            <FormLabel>End Date *</FormLabel>
            <FormDateInput
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={(e) =>
                setFormData({ ...formData, endDate: e.target.value })
              }
            />
          </FormDateSubContainer>
        </FormDateContainer>

        <TechStackContainer>
          <FormLabel>Technologies *</FormLabel>
          <FormInput
            name="technologies"
            placeholder="React, Node.js"
            value={formData.technologies}
            onChange={(e) =>
              setFormData({ ...formData, technologies: e.target.value })
            }
          />
        </TechStackContainer>

        <FormInputContainer>
          <FormLabel>Project URL</FormLabel>
          <FormInput
            type="url"
            name="projectUrl"
            value={formData.projectUrl}
            onChange={(e) =>
              setFormData({ ...formData, projectUrl: e.target.value })
            }
          />
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel>Mentor ID *</FormLabel>
          <FormInput
            type="text"
            name="mentorId"
            value={formData.mentorId}
            onChange={(e) =>
              setFormData({ ...formData, mentorId: e.target.value })
            }
          />
        </FormInputContainer>

        {/* <FormInputContainer>
          <FormLabel>Mentor *</FormLabel>
          <Select
            name="mentorId"
            value={formData.mentorId}
            onChange={(e) =>
              setFormData({ ...formData, mentorId: e.target.value })
            }
          >
            <Option value="">Select Mentor</Option>
            {mentors.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.expertise})
                  </option>
                ))}
          </Select>
        </FormInputContainer> */}

        <FormButtonContainer>
          <FormButton type="submit">Submit</FormButton>

          <ResetButton
            type="button"
            onClick={() => {
              setFormData({
                title: "",
                description: "",
                company: "",
                startDate: "",
                endDate: "",
                technologies: "",
                mentorId: "",
                projectUrl: "",
                certificateImage: "",
              });
            }}
          >
            Reset
          </ResetButton>
        </FormButtonContainer>
      </Form>
    </FormContainer>
  );
};
