import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Content = styled.div`
  width: 100%;
  padding-left: 142px;
  padding-right: 142px;
  padding-top: 110px;
  padding-bottom: 40px;
  overflow-x: scroll;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
