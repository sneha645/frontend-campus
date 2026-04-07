"use client";

import SchoolIcon from "@mui/icons-material/School";
import { Avatar, BackgroundImage, Container, ForgotButton, Form, FormWrapper, HeadingSection, Input, InputGroup, Label, LeftSection, LogoIcon, LogoText, LogoWrapper, QuoteSection, QuoteText, RightSection, SignInButton, Subtitle, Title, UserDetails, UserInfo, UserName, UserRole } from "./styled";

export default function SignIn() {
  return (
    <Container>
      <LeftSection>
        <BackgroundImage src="/images/sign-in-bg.jpg" alt="preview" />

        <LogoWrapper>
          <LogoIcon>
            <SchoolIcon sx={{ color: "white", fontSize: "20px" }} />
          </LogoIcon>
          <LogoText>
            Campus<span>Connect</span>
          </LogoText>
        </LogoWrapper>

        <QuoteSection>
          <QuoteText>
            "This platform completely transformed our campus placement drive.
            Connecting students with recruiters and tracking projects is now
            completely seamless and centralized."
          </QuoteText>

          <UserInfo>
            <Avatar src="/images/avatar.png" alt="avatar" />
            <UserDetails>
              <UserName>Dr. D.P Joshi</UserName>
              <UserRole>Principal of SITMS</UserRole>
            </UserDetails>
          </UserInfo>
        </QuoteSection>
      </LeftSection>

      <RightSection>
        <FormWrapper>
          <HeadingSection>
            <Title>Welcome Back</Title>
            <Subtitle>
              Enter your credentials to access your dashboard
            </Subtitle>
          </HeadingSection>

          <Form>
            <InputGroup>
              <Label>Work or University Email</Label>
              <Input type="email" placeholder="name@university.edu" />
            </InputGroup>

            <InputGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••••" />
            </InputGroup>

            <ForgotButton type="button">Forgot password?</ForgotButton>

            <SignInButton>Sign In</SignInButton>
          </Form>
        </FormWrapper>
      </RightSection>
    </Container>
  );
}