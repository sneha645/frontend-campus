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
  SignInButton,
  Subtitle,
  Title,
} from "./styled";
import { useState } from "react";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [role, setRole] = useState("Student");

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        user,
        {
          withCredentials: true,
        },
      );
      console.log(response);
      setMessage(response.data.data.message);
      localStorage.setItem("token", response.data.data.token);
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
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
            This platform completely transformed our campus placement drive.
            Connecting students with recruiters and tracking projects is now
            completely seamless and centralized.
          </QuoteText>

          {/* <UserInfo>
            <Avatar src="/images/avatar.png" alt="avatar" />
            <UserDetails>
              <UserName>Dr. D.P Joshi</UserName>
              <UserRole>Principal of SITMS</UserRole>
            </UserDetails>
          </UserInfo> */}
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
            <Title>Welcome Back</Title>
            <Subtitle>Enter your credentials to access your dashboard</Subtitle>
          </HeadingSection>

          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Work or University Email</Label>
              <Input
                type="email"
                placeholder="name@university.edu"
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
                Dont Have an Account?
                <RedirectLink href={"/sign-up"}>Sign Up</RedirectLink>
              </ExtraText>
            </ExtraContainer>
          </Form>
        </FormWrapper>
      </RightSection>
    </Container>
  );
}
