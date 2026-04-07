import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const LeftSection = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 70px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoIcon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b75ff;
  border-radius: 4px;
`;

export const LogoText = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

export const QuoteSection = styled.div`
  position: absolute;
  bottom: 70px;
  left: 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
`;

export const QuoteText = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #000;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

export const UserDetails = styled.div``;

export const UserName = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

export const UserRole = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #000;
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const FormWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const HeadingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  box-shadow: 0 0 0 1px #00000033;

  &:focus {
    box-shadow: 0 0 0 2px #0b75ff;
  }

  &:hover {
    box-shadow: 0 0 0 2px #0b75ff;
  }
`;

export const PasswordInput = styled.div`
  position: relative;
  border: none;
  outline: none;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  box-shadow: 0 0 0 1px #00000033;

  &:focus {
    box-shadow: 0 0 0 2px #0b75ff;
  }

  &:hover {
    box-shadow: 0 0 0 2px #0b75ff;
  }

  input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 14px;
    width: 100%;
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ForgotButton = styled.button`
  text-align: right;
  background: none;
  border: none;
  cursor: pointer;
  color: #0b75ff;
  font-size: 14px;
`;

export const SignInButton = styled.button`
  background-color: #0b75ff;
  color: white;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  border: none;

  transition: all 0.3s ease;

  &:hover {
    background-color: #0b75ffe7;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #0b75ff;
  }
`;
