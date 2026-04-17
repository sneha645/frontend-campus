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
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert } from "@mui/material";
import { useAuth } from "@/context/AuthContext";

export default function SignInPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, error, success, isLoading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(user.email, user.password);
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

            <SignInButton type="submit" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </SignInButton>

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
