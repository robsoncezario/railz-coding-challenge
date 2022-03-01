import styled from "styled-components";
import Color from "color";

export const Row = styled.div`
  margin-top: 30px;
  max-width: 550px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => Color(theme.text.colors.primary).alpha(0.7)};
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  height: 56px;
  font-size: 16px;

  &.full-width {
    width: 100%;
  }

  &.w-47 {
    width: 47.5%;
  }

  &.w-60 {
    width: 60%;
  }

  &.w-35 {
    width: 35%;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.text.colors.primary};
    border: 1px solid ${({ theme }) => theme.text.colors.primary};
  }
`;

export const Button = styled.div`
  width: 180px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  transition: opacity 0.3s;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  margin-top: 30px;
  align-self: flex-end;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
