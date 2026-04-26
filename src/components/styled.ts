import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #00000033;
`;

export const FormHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 100%;
  color: #000;
  padding: 20px;
`;

export const Hrline = styled.hr`
  color: #ccc;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  color: #000;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #0b75ff;
  }

  &:hover {
    border-color: #0b75ff;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;

    &:focus {
    outline: none;
    border-color: #0b75ff;
  }

  &:hover {
    border-color: #0b75ff;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
  height: 100px;

    &:focus {
    outline: none;
    border-color: #0b75ff;
  }

  &:hover {
    border-color: #0b75ff;
  }
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  padding: 20px;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  border: 1px solid #e5e7eb;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`;
