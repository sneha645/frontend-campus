// import styled from "styled-components";

// export const ProfileContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 32px;
//   overflow-y: auto;
//   background-color: #f7f8fa;
//   display: flex;
//   flex-direction: column;
//   gap: 24px;

//   &::-webkit-scrollbar {
//     width: 6px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: #e0e0e0;
//     border-radius: 10px;
//   }
// `;

// export const HeroSection = styled.div`
//   width: 100%;
//   position: relative;
//   background: white;
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
// `;

// export const HeroBackground = styled.div`
//   height: 160px;
//   width: 100%;
//   background: linear-gradient(135deg, #0b75ff 0%, #00d4ff 100%);
// `;

// export const HeroContent = styled.div`
//   padding: 0 40px 40px 40px;
//   display: flex;
//   align-items: flex-end;
//   gap: 24px;
//   margin-top: -60px;
// `;

// export const AvatarWrapper = styled.div`
//   position: relative;
//   width: 120px;
//   height: 120px;
//   border-radius: 20px;
//   background: white;
//   padding: 6px;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
// `;

// export const ProfileInfo = styled.div`
//   flex: 1;
//   padding-bottom: 10px;
// `;

// export const Name = styled.h1`
//   font-size: 28px;
//   font-weight: 700;
//   color: #1a1a1a;
//   margin-bottom: 4px;
// `;

// export const Headline = styled.p`
//   font-size: 16px;
//   color: #64748b;
//   font-weight: 500;
// `;

// export const InfoGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 24px;
// `;

// export const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;

// export const Card = styled.div`
//   background: white;
//   border-radius: 16px;
//   padding: 24px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
//   border: 1px solid rgba(0, 0, 0, 0.02);
// `;

// export const CardHeader = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// export const CardTitle = styled.h2`
//   font-size: 18px;
//   font-weight: 600;
//   color: #1a1a1a;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// export const ContactItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   margin-bottom: 16px;
//   color: #475569;
//   font-size: 14px;

//   svg {
//     color: #0b75ff;
//   }
// `;

// export const SkillsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
// `;

// export const SkillTag = styled.span`
//   background: #f1f5f9;
//   color: #475569;
//   padding: 6px 14px;
//   border-radius: 8px;
//   font-size: 13px;
//   font-weight: 500;
//   transition: all 0.2s;

//   &:hover {
//     background: #0b75ff;
//     color: white;
//   }
// `;

// export const TimelineItem = styled.div`
//   position: relative;
//   padding-left: 24px;
//   margin-bottom: 24px;

//   &:last-child {
//     margin-bottom: 0;
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     top: 5px;
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background: #0b75ff;
//   }

//   &:not(:last-child)::after {
//     content: "";
//     position: absolute;
//     left: 4.5px;
//     top: 20px;
//     width: 1px;
//     height: calc(100% - 10px);
//     background: #e2e8f0;
//   }
// `;

// export const ItemTitle = styled.h3`
//   font-size: 15px;
//   font-weight: 600;
//   color: #1e293b;
//   margin-bottom: 2px;
// `;

// export const ItemSubtitle = styled.p`
//   font-size: 13px;
//   color: #64748b;
//   margin-bottom: 4px;
// `;

// export const ItemDate = styled.span`
//   font-size: 12px;
//   color: #94a3b8;
//   font-weight: 500;
// `;

// export const ResumeArea = styled.div`
//   border: 2px dashed #e2e8f0;
//   border-radius: 12px;
//   padding: 32px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 16px;
//   text-align: center;
//   transition: all 0.2s;

//   &:hover {
//     border-color: #0b75ff;
//     background: #f8faff;
//   }
// `;

// export const ActionButton = styled.button<{ $primary?: boolean }>`
//   background: ${(props) => (props.$primary ? "#0b75ff" : "white")};
//   color: ${(props) => (props.$primary ? "white" : "#0b75ff")};
//   border: 1px solid #0b75ff;
//   padding: 10px 20px;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 14px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   transition: all 0.2s;

//   &:hover {
//     transform: translateY(-1px);
//     box-shadow: 0 4px 12px rgba(11, 117, 255, 0.15);
//     background: ${(props) => (props.$primary ? "#0066eb" : "#f0f7ff")};
//   }
// `;

// export const Badge = styled.span`
//   background: #ecfdf5;
//   color: #10b981;
//   padding: 4px 10px;
//   border-radius: 20px;
//   font-size: 11px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
// `;
