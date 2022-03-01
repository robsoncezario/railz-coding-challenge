import styled from "styled-components";
import Color from "color";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70px;
  padding-left: 142px;
  padding-right: 142px;
  background: ${({ theme }) => theme.colors.background};
  z-index: 1;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const ExitButton = styled.div`
  width: 130px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.text.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  transition: opacity 0.3s;
  font-size: 16px;
  line-height: 16px;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
