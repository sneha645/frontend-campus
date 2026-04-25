import styled from "styled-components";

export const CompanyProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const CompanyProfileSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
`;

export const CompanyProfileForm = styled.div`
  width: 65%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const CompanyProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const CompanyProfileSubHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const FormSubHeading = styled.p`
  font-size: 14px;
  color: #666666;
`;

export const Hrline = styled.hr`
  color: #e5e7eb;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 14px;
  resize: none;
`;

export const LogoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  background-color: #e3e8edff;
  padding: 20px;
  border-radius: 4px;
  border: 1px dashed #e5e7eb;
`;

export const InputTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const InputSubTitle = styled.p`
  font-size: 12px;
  color: #666666;
`;

export const LogoInput = styled.input`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const ResetButton = styled.button`
  padding: 10px 20px;
  background-color: #ffffff;
  color: #666666;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const CompanyProfile = styled.div`
  width: 35%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileSubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

export const ProfileLogo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const Website = styled.a`
  font-size: 14px;
  color: #0b75ff;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666666;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoLabel = styled.label`
  font-size: 14px;
  color: #666666;
`;

export const InfoValue = styled.p`
  font-size: 14px;
  color: #000;
`;

export const NotFound = styled.div`
  width: 35%;
  height: 500px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;