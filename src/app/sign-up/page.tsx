"use client";

import axios from "axios";
import SchoolIcon from "@mui/icons-material/School";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import {
  BackgroundImage,
  Container,
  ExtraContainer,
  ExtraText,
  EyeIcon,
  Form,
  FormWrapper,
  HeadingSection,
  Input,
  InputGroup,
  Label,
  LeftSection,
  LogoIcon,
  LogoText,
  LogoWrapper,
  Option,
  PasswordInput,
  QuoteSection,
  QuoteText,
  RedirectLink,
  RightSection,
  Role,
  RoleContainer,
  Select,
  SignInButton,
  Subtitle,
  Title,
} from "../sign-in/styled";

import { useState } from "react";
import { Alert } from "@mui/material";
import { useAuth } from "@/context/AuthContext";

export default function SignUpPage() {
  const {
    registerStudent,
    registerMentor,
    registerRecruiter,
    success,
    error,
    isLoading,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [validation, setValidation] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    year: "",
    branch: "",
    department: "",
    specialization: "",
    experience: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (user.role === "student") {
        if (user.password !== user.confirmPassword) {
          setValidation("Passwords do not match");
          setTimeout(() => {
            setValidation("");
          }, 2000);
          return;
        }

        if (user.password.length < 6) {
          setValidation("Password must be at least 6 characters long");
          setTimeout(() => {
            setValidation("");
          }, 2000);
          return;
        }

        if (
          !user.name ||
          !user.email ||
          !user.password ||
          !user.role ||
          !user.year ||
          !user.branch
        ) {
          setValidation("Please fill all the fields");
          setTimeout(() => {
            setValidation("");
          }, 2000);
          return;
        }

        await registerStudent(
          user.email,
          user.password,
          user.name,
          user.role,
          user.year,
          user.branch,
        );

      } else if (user.role === "mentor") {
        if (user.password !== user.confirmPassword) {
          setValidation("Passwords do not match");
          setTimeout(() => {
            setValidation("");
          }, 2000);
          return;
        }

        if (user.password.length < 6) {
          setValidation("Password must be at least 6 characters long");
          setTimeout(() => {
            setValidation("");
          }, 2000);
          return;
        }

        if (
          !user.name ||
          !user.email ||
          !user.password ||
          !user.role ||
          !user.department ||
          !user.experience ||
          !user.specialization
        ) {
          setValidation("Please fill all the fields");
          setTimeout(() => {
            setValidation("");
          }, 2000);
          return;
        }
        await registerMentor(
          user.email,
          user.password,
          user.name,
          user.role,
          user.department,
          user.experience,
          user.specialization,
        );

      } else if (user.role === "recruiter") {
        if (!user.name || !user.email || !user.password || !user.role) {
          setValidation("Please fill all the fields");
          setTimeout(() => {
            setValidation("");
          }, 2000);
          return;
        }
        await registerRecruiter(
          user.email,
          user.password,
          user.name,
          user.role,
        );

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <LeftSection>
        <BackgroundImage src="/images/sign-in-bg.jpg" alt="preview" />

        <LogoWrapper>
          <LogoIcon>
            <SchoolIcon sx={{ color: "white", fontSize: "20px" }} />
          </LogoIcon>
          <LogoText>CampusConnect</LogoText>
        </LogoWrapper>

        <QuoteSection>
          <QuoteText>
            This platform has made mentoring more effective and structured than ever before. Tracking student progress, reviewing projects, and providing guidance is now completely seamless and centralized. It allows me to focus more on helping students grow rather than managing scattered information.
          </QuoteText>
        </QuoteSection>
      </LeftSection>

      <RightSection>
        {error && (
          <Alert
            severity="error"
            sx={{
              mb: 2,
              position: "absolute",
              top: "20px",
              left: "0",
              transform: "translateX(-50%)",
              zIndex: 1000,
            }}
          >
            {error}
          </Alert>
        )}

        {success && (
          <Alert
            severity="success"
            sx={{
              mb: 2,
              position: "absolute",
              top: "20px",
              left: "0",
              transform: "translateX(-50%)",
              zIndex: 1000,
            }}
          >
            {success}
          </Alert>
        )}

        {validation && (
          <Alert
            severity="warning"
            sx={{
              mb: 2,
              position: "absolute",
              top: "20px",
              left: "0",
              transform: "translateX(-50%)",
              zIndex: 1000,
            }}
          >
            {validation}
          </Alert>
        )}
        <FormWrapper>
          <HeadingSection>
            <Title>{user.role === "student" ? "Build your future" : user.role === "mentor" ? "Guide the next generation" : "Hire smarter, faster"}</Title>
            <Subtitle>
              {user.role === "student" ? "One account to manage your placements, projects, and opportunities" : user.role === "mentor" ? "One platform to mentor, track progress, and shape careers" : "Streamline hiring with access to verified student profiles and proj"}
            </Subtitle>
          </HeadingSection>

          <RoleContainer>
            {["student", "mentor", "recruiter"].map((item) => (
              <Role
                key={item}
                onClick={() => {

                  setUser({ ...user, role: item });
                }}
                $active={item === user.role}
              >
                {item}
              </Role>
            ))}
          </RoleContainer>

          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="John Doe"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="johndoe@grr.la"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>Password</Label>

              <PasswordInput>
                <input
                  type="password"
                  placeholder="••••••••••"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                />
              </PasswordInput>
            </InputGroup>

            <InputGroup>
              <Label>Confirm Password</Label>

              <PasswordInput>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={user.confirmPassword}
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                  required
                />
                <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <VisibilityIcon
                      sx={{ color: "#cccccc", fontSize: "20px" }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      sx={{ color: "#cccccc", fontSize: "20px" }}
                    />
                  )}
                </EyeIcon>
              </PasswordInput>
            </InputGroup>

            {user.role === "mentor" && (
              <InputGroup>
                <Label>Department</Label>
                <Select
                  name=""
                  id=""
                  value={user.department}
                  onChange={(e) =>
                    setUser({ ...user, department: e.target.value })
                  }
                >
                  <Option value="">Select Department</Option>
                  <Option value="computer-science">Computer Science</Option>
                  <Option value="information-technology">
                    Information Technology
                  </Option>
                  <Option value="electronics-and-communication">
                    Electronics and Communication
                  </Option>
                  <Option value="mechanical-engineering">
                    Mechanical Engineering
                  </Option>
                  <Option value="civil-engineering">Civil Engineering</Option>
                  <Option value="electrical-engineering">
                    Electrical Engineering
                  </Option>
                  <Option value="electronics-and-telecommunication">
                    Electronics and Telecommunication
                  </Option>
                  <Option value="biotechnology">Biotechnology</Option>
                  <Option value="chemical-engineering">
                    Chemical Engineering
                  </Option>
                  <Option value="computer-science-and-engineering">
                    Computer Science and Engineering
                  </Option>
                </Select>
              </InputGroup>
            )}

            {user.role === "mentor" && (
              <InputGroup>
                <Label>Experience</Label>
                <Select
                  name=""
                  id=""
                  value={user.experience}
                  onChange={(e) =>
                    setUser({ ...user, experience: e.target.value })
                  }
                >
                  <Option value="">Select Experience</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                </Select>
              </InputGroup>
            )}

            {user.role === "mentor" && (
              <InputGroup>
                <Label>Specialization</Label>
                <Input
                  type="text"
                  placeholder="Machine Learning"
                  value={user.specialization}
                  onChange={(e) =>
                    setUser({ ...user, specialization: e.target.value })
                  }
                  required
                />
              </InputGroup>
            )}

            {user.role === "student" && (
              <InputGroup>
                <Label>Year</Label>
                <Select
                  name=""
                  id=""
                  value={user.year}
                  onChange={(e) => setUser({ ...user, year: e.target.value })}
                >
                  <Option value="">Select Year</Option>
                  <Option value="1">1st Year</Option>
                  <Option value="2">2nd Year</Option>
                  <Option value="3">3rd Year</Option>
                  <Option value="4">4th Year</Option>
                </Select>
              </InputGroup>
            )}

            {user.role === "student" && (
              <InputGroup>
                <Label>Branch</Label>
                <Select
                  name=""
                  id=""
                  value={user.branch}
                  onChange={(e) => setUser({ ...user, branch: e.target.value })}
                >
                  <Option value="">Select Branch</Option>
                  <Option value="computer-science">Computer Science</Option>
                  <Option value="information-technology">
                    Information Technology
                  </Option>
                  <Option value="electronics-and-communication">
                    Electronics and Communication
                  </Option>
                  <Option value="mechanical-engineering">
                    Mechanical Engineering
                  </Option>
                </Select>
              </InputGroup>
            )}

            <SignInButton
              type="submit"
              style={{ marginTop: "10px" }}
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </SignInButton>

            <ExtraContainer>
              <ExtraText>
                Already Have an Account?
                <RedirectLink href={"/sign-in"}>Sign In</RedirectLink>
              </ExtraText>
            </ExtraContainer>
          </Form>
        </FormWrapper>
      </RightSection>
    </Container>
  );
}
