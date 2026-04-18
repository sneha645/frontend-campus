"use client";

import SchoolIcon from "@mui/icons-material/School";
import {
  BackgroundImage,
  Container,
  ExtraContainer,
  ExtraText,
  EyeIcon,
  ForgotButton,
  ForgotPasswordContainer,
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
import { Alert, Box } from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import { FormModal } from "../(student)/student/projects-and-internships/styled";
import axios from "axios";

export default function SignInPage() {
  const { login, error, success, isLoading } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [resetPassword, setResetPassword] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [openResetPasswordModal, setOpenResetPasswordModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successPasswordReset, setSuccessPasswordReset] = useState("");
  const [errorPasswordReset, setErrorPasswordReset] = useState("");
  const [validation, setValidation] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(user.email, user.password);
  };

  const handleResetPassword = async () => {
    if (resetPassword.password !== resetPassword.confirmPassword) {
      setValidation("Passwords do not match");
      setTimeout(() => {
        setValidation("");
      }, 2000);
      return;
    }

    if (resetPassword.password.length < 6) {
      setValidation("Password must be at least 6 characters long");
      setTimeout(() => {
        setValidation("");
      }, 2000);
      return;
    }

    if (
      !resetPassword.email ||
      !resetPassword.password ||
      !resetPassword.confirmPassword
    ) {
      setValidation("Please fill all the fields");
      setTimeout(() => {
        setValidation("");
      }, 2000);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/reset-password",
        {
          email: resetPassword.email,
          password: resetPassword.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setSuccessPasswordReset(response.data.message);
      setTimeout(() => {
        setSuccessPasswordReset("");
        setOpenResetPasswordModal(false);
      }, 2000);
    } catch (error) {
      const backendMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Error resetting password";
      const message = Array.isArray(backendMessage)
        ? backendMessage.join(", ")
        : backendMessage;
      setErrorPasswordReset(message);
      setTimeout(() => {
        setErrorPasswordReset("");
      }, 2000);
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
            This platform has made mentoring more effective and structured than
            ever before. Tracking student progress, reviewing projects, and
            providing guidance is now completely seamless and centralized. It
            allows me to focus more on helping students grow rather than
            managing scattered information.
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
              <Label>Email</Label>
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

            <ForgotButton
              type="button"
              onClick={() => setOpenResetPasswordModal(true)}
            >
              Forgot password?
            </ForgotButton>

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
      <FormModal
        open={openResetPasswordModal}
        onClose={() => setOpenResetPasswordModal(false)}
      >
        <ForgotPasswordContainer>
          {successPasswordReset && (
            <Alert
              severity="success"
              sx={{
                mb: 2,
                position: "absolute",
                top: "-100px",
                zIndex: 1000,
              }}
            >
              {successPasswordReset}
            </Alert>
          )}

          {errorPasswordReset && (
            <Alert
              severity="error"
              sx={{
                mb: 2,
                position: "absolute",
                top: "-100px",
                zIndex: 1000,
              }}
            >
              {errorPasswordReset}
            </Alert>
          )}

          {validation && (
            <Alert
              severity="warning"
              sx={{
                mb: 2,
                position: "absolute",
                top: "-100px",
                zIndex: 1000,
              }}
            >
              {validation}
            </Alert>
          )}

          <HeadingSection style={{ width: "100%", alignItems: "flex-start" }}>
            <Title>Reset your password</Title>
            <Subtitle>
              Just set a new password to get back into your account.
            </Subtitle>
          </HeadingSection>
          <Form onSubmit={handleResetPassword} style={{ width: "100%" }}>
            <InputGroup>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="name@university.edu"
                value={resetPassword.email}
                onChange={(e) =>
                  setResetPassword({ ...resetPassword, email: e.target.value })
                }
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>Password</Label>

              <PasswordInput>
                <input
                  type="password"
                  placeholder="••••••••••"
                  value={resetPassword.password}
                  onChange={(e) =>
                    setResetPassword({
                      ...resetPassword,
                      password: e.target.value,
                    })
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
                  value={resetPassword.confirmPassword}
                  onChange={(e) =>
                    setResetPassword({
                      ...resetPassword,
                      confirmPassword: e.target.value,
                    })
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
            <Box></Box>
            <SignInButton type="submit">Update Password</SignInButton>
          </Form>
        </ForgotPasswordContainer>
      </FormModal>
    </Container>
  );
}
