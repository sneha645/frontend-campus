import styled from "styled-components";

/* Container */
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 800px;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #00000033;
`;

/* Grid */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

/* Field Wrapper */
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* Label */
export const Label = styled.label``;

/* Input */
export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

/* Select */
export const Select = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

/* Textarea */
export const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
  height: 100px;
`;

/* Button Container */
export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
`;

/* Buttons */
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