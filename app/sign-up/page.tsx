"use client";

import SchoolIcon from "@mui/icons-material/School";
import {
  BackgroundImage,
  Container,
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
  RightSection,
  SignInButton,
  Subtitle,
  Title,
} from "../sign-in/styled";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert } from "@mui/material";

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

          <div className="flex bg-gray-100 rounded-lg p-1">
            {["Student", "Faculty", "Recruiter", "Admin"].map((item) => (
              <button
                key={item}
                onClick={() => setRole(item)}
                className={`flex-1 text-sm py-2 rounded-md ${
                  role === item
                    ? "bg-white shadow font-medium"
                    : "text-gray-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

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
          </Form>
        </FormWrapper>
      </RightSection>
    </Container>
  );
}
