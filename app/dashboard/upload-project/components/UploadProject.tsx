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

export const UploadProject = () => {
  return (
    <FormContainer>
      <Form
      // onSubmit={handleSubmit}
      >
        <FormInputContainer>
          <FormLabel>Title *</FormLabel>
          <FormInput
            name="title"
            placeholder="Enter project title"
            // value={formData.title}
            // onChange={handleChange}
            // style={inputStyle(errors.title)}
          />
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel>Description *</FormLabel>
          <TextAreaInput
            name="description"
            rows={4}
            placeholder="Enter description of your project"
            // value={formData.description}
            // onChange={handleChange}
            // style={inputStyle(errors.description)}
          />
        </FormInputContainer>

        {/* COMPANY */}
        {/* {formData.project_type === "internship" && (
              <div>
                <label>Company Name</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={inputStyle()}
                />
              </div>
            )} */}

        <FormDateContainer>
          <FormDateSubContainer>
            <FormLabel>Start Date *</FormLabel>
            <FormDateInput
              type="date"
              name="startDate"
              // value={formData.startDate}
              // onChange={handleChange}
              // style={inputStyle(errors.startDate)}
            />
          </FormDateSubContainer>

          <FormDateSubContainer>
            <FormLabel>End Date *</FormLabel>
            <FormDateInput
              type="date"
              name="endDate"
              // value={formData.endDate}
              // onChange={handleChange}
              // style={inputStyle(errors.endDate)}
            />
          </FormDateSubContainer>
        </FormDateContainer>

        <TechStackContainer>
          <FormLabel>Technologies *</FormLabel>
          <FormInput
            name="technologies"
            placeholder="React, Node.js"
            // value={formData.technologies}
            // onChange={handleChange}
            // style={inputStyle(errors.technologies)}
          />
        </TechStackContainer>

        <FormInputContainer>
          <FormLabel>Project URL</FormLabel>
          <FormInput
            type="url"
            name="projectUrl"
            // value={formData.projectUrl}
            // onChange={handleChange}
          />
        </FormInputContainer>

        {/* {formData.project_type === "internship" && (
              <div>
                <label>Certificate</label>
                <input
                  type="file"
                  name="certificate"
                  onChange={handleChange}
                  style={inputStyle()}
                />
              </div>
            )} */}

        <FormInputContainer>
          <FormLabel>Mentor *</FormLabel>
          <Select
            name="mentorId"

            // value={formData.mentorId}
            // onChange={handleChange}
            // style={inputStyle(errors.mentorId)}
          >
            <Option value="">Select Mentor</Option>
            {/* {mentors.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.expertise})
                  </option>
                ))} */}
          </Select>
        </FormInputContainer>

        <FormButtonContainer>
          <FormButton type="submit">Submit</FormButton>

          <ResetButton
            type="button"
            onClick={() => {
              // setFormData({
              //   title: "",
              //   project_type: "project",
              //   description: "",
              //   company: "",
              //   startDate: "",
              //   endDate: "",
              //   technologies: "",
              //   mentorId: "",
              //   projectUrl: "",
              //   certificate: null,
              // });
              // setErrors({});
            }}
          >
            Reset
          </ResetButton>
        </FormButtonContainer>
      </Form>
    </FormContainer>
  );
};
