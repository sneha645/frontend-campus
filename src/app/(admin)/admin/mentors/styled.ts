import styled from "styled-components";

export const MentorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProfileHeader = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 30px;
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AvatarPlaceholder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: linear-gradient(135deg, #0b75ff 0%, #00d2ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(11, 117, 255, 0.3);
`;

export const HeaderInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProfileName = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`;

export const ProfileRole = styled.span`
  font-size: 16px;
  color: #666;
  font-weight: 500;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const InfoCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #f0f0f0;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #0b75ff;
  border-bottom: 2px solid #f0f7ff;
  padding-bottom: 10px;
  margin: 0;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f9f9f9;

  &:last-child {
    border-bottom: none;
  }
`;

export const DetailLabel = styled.span`
  font-size: 14px;
  color: #888;
  font-weight: 500;
`;

export const DetailValue = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 600;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #fee2e2;
  color: #ef4444;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid #fecaca;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ef4444;
    color: white;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const StatusBadge = styled.div<{ status: string }>`
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  width: fit-content;
  text-transform: capitalize;

  background-color: ${(props) =>
    props.status === "approved"
      ? "#def2e6"
      : props.status === "rejected"
        ? "#fbdfe5"
        : "#fdefd8"};
  color: ${(props) =>
    props.status === "approved"
      ? "#16a34a"
      : props.status === "rejected"
        ? "#e11d48"
        : "#f59e0b"};
`;
