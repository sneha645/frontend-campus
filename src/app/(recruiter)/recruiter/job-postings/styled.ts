import styled from "styled-components";

export const JobPostingsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow: auto;
  overflow-y: hidden;
`;

export const Button = styled.button`
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
    background-color: #007bff;
  }
`;

export const JobCard = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const JobSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const JobTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const JobTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

export const Status = styled.div<{ $status: string }>(
  ({ $status = "open" }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${$status === "open" ? "#def2e6" : $status === "closed" ? "#fbdfe5" : "#fdefd8"};
  color: ${$status === "open" ? "#16a34a" : $status === "closed" ? "#e11d48" : "#f59e0b"};
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
`,
);

export const JobDetailsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const JobDetailsSubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const JobText = styled.p`
  font-size: 14px;
  color: #666;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ViewJobButton = styled.button`
  color: #000;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.95);
  }
`;






/* Card */
export const JobCardModal = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

/* Header */
export const Header = styled.div`
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #222;
`;

export const CompanyName = styled.p`
  margin: 4px 0;
  color: #666;
`;

/* Tags */
export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

/* Badge (dynamic props) */
export const Badge = styled.span<{ bg: string; color: string }>`
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`;

/* Info */
export const InfoText = styled.p`
  margin: 6px 0;
  color: #555;
`;

/* Divider */
export const Divider = styled.hr`
  margin: 20px 0;
  border-color: #eee;
`;

/* Section */
export const SectionWrapper = styled.div`
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h4`
  margin-bottom: 6px;
  color: #333;
`;

export const List = styled.ul`
  padding-left: 18px;
  color: #555;
  margin: 0;
`;

/* Footer */
export const FooterText = styled.p`
  margin-top: 20px;
  font-size: 12px;
  color: #999;
`;