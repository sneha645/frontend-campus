"use client";

import SchoolIcon from "@mui/icons-material/School";
import {
  BackgroundImage,
  Container,
  ExtraContainer,
  ExtraText,
  EyeIcon,
  ForgotButton,
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert } from "@mui/material";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

export default function SignUpPage() {
  const { registerStudent, registerMentor, registerRecruiter, success, error } =
    useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("student");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    year: "",
    branch: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (role === "student") {
        if (
          !user.name ||
          !user.email ||
          !user.password ||
          !user.role ||
          !user.year ||
          !user.branch
        ) {
          setMessage("Please fill all the fields");
          return;
        }
        console.log(user);
        await registerStudent(
          user.email,
          user.password,
          user.name,
          user.role,
          user.year,
          user.branch,
        );
        if (success) {
          setMessage(success);
        }
      } else if (role === "mentor") {
        if (!user.name || !user.email || !user.password || !user.role) {
          setMessage("Please fill all the fields");
          return;
        }
        await registerMentor(user.email, user.password, user.name, user.role);
        if (success) {
          setMessage(success);
        }
      } else if (role === "recruiter") {
        if (!user.name || !user.email || !user.password || !user.role) {
          setMessage("Please fill all the fields");
          return;
        }
        await registerRecruiter(
          user.email,
          user.password,
          user.name,
          user.role,
        );
        if (success) {
          setMessage(success);
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data.message || "An error occurred");
      } else {
        setMessage("An unexpected error occurred");
      }
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
            This platform completely transformed our campus placement drive.
            Connecting students with recruiters and tracking projects is now
            completely seamless and centralized.
          </QuoteText>
        </QuoteSection>
      </LeftSection>

      <RightSection>
        {message && (
          <Alert
            severity="success"
            sx={{ mb: 2, position: "absolute", top: "20px" }}
          >
            {message}
          </Alert>
        )}
        <FormWrapper>
          <HeadingSection>
            <Title>Build your future</Title>
            <Subtitle>
              One account to manage placements, projects, and opportunities
            </Subtitle>
          </HeadingSection>

          <RoleContainer>
            {["student", "faculty", "recruiter"].map((item) => (
              <Role
                key={item}
                onClick={() => {
                  setRole(item);
                  setUser({ ...user, role: item });
                }}
                $active={item === role}
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
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
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

            {role === "student" && (
              <InputGroup>
                <Label>Year</Label>
                <Select
                  name=""
                  id=""
                  value={user.year}
                  onChange={(e) => setUser({ ...user, year: e.target.value })}
                >
                  <Option value="1">1st Year</Option>
                  <Option value="2">2nd Year</Option>
                  <Option value="3">3rd Year</Option>
                  <Option value="4">4th Year</Option>
                </Select>
              </InputGroup>
            )}

            {role === "student" && (
              <InputGroup>
                <Label>Branch</Label>
                <Select
                  name=""
                  id=""
                  value={user.branch}
                  onChange={(e) => setUser({ ...user, branch: e.target.value })}
                >
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

            <SignInButton type="submit" style={{ marginTop: "10px" }}>
              Sign Up
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
