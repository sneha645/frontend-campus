import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

export const HeaderSubContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SubHeading = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #666;
  width: 70%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #0b75ff;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0b75ff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
`;

export const StatCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #e5e7eb;
`;

export const StatHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StatHeading = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const StatLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: #e5e7eb;
`;

export const StatValue = styled.h4`
  font-size: 40px;
  font-weight: 600;
  color: #333;
`;

export const StatSubHeading = styled.h5`
  font-size: 14px;
  font-weight: 400;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ActivityContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const PlatformOverview = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #e5e7eb;
`;

export const PlatformOverviewHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const PlatformOverviewHeading = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PlatformOverviewSubHeading = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;

export const HrLine = styled.hr`
  width: 100%;
  color: #e5e7eb;
`;

export const PlatformOverviewChart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

export const ProgressSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProgressHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProgressHeading = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ProgressSubHeading = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;
