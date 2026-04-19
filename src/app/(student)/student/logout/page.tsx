"use client";

import { useAuth } from "@/context/AuthContext";
import {
  ButtonContainer,
  CancelButton,
  LogoutButton,
  LogoutCard,
  LogoutContainer,
  LogoutHeading,
  LogoutHeadingContainer,
  LogoutSubHeading,
} from "./styled";
import { redirect } from "next/navigation";

export default function LogoutPage() {
  const { logout, user } = useAuth();
  return (
    <LogoutContainer>
      <LogoutCard>
        <LogoutHeadingContainer>
          <LogoutHeading>Logout</LogoutHeading>
          <LogoutSubHeading>Are you sure you want to logout?</LogoutSubHeading>
        </LogoutHeadingContainer>
        <ButtonContainer>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
          <CancelButton
            onClick={() => {
              redirect(`/${user?.role}/dashboard`);
            }}
          >
            Cancel
          </CancelButton>
        </ButtonContainer>
      </LogoutCard>
    </LogoutContainer>
  );
}
