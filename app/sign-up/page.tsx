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
  PasswordInput,
  QuoteSection,
  QuoteText,
  RedirectLink,
  RightSection,
  Role,
  RoleContainer,
  SignInButton,
  Subtitle,
  Title,
} from "../sign-in/styled";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert } from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("Student");

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/user/login",
  //       user,
  //     );
  //     console.log(response);
  //     setMessage(response.data.message);
  //     localStorage.setItem("token", response.data.token);
  //     setTimeout(() => {
  //       router.push("/dashboard");
  //     }, 3000);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
            {["Student", "Faculty", "Recruiter", "Admin"].map((item) => (
              <Role
                key={item}
                onClick={() => setRole(item)}
                $active={item === role}
              >
                {item}
              </Role>
            ))}
          </RoleContainer>

          <Form
          // onSubmit={handleSubmit}
          >
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

            <ForgotButton type="button">Forgot password?</ForgotButton>

            <SignInButton type="submit">Sign In</SignInButton>

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
