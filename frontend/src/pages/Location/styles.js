import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 150px);
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 112px;
  padding-right: 112px;

  @media (max-width: 1024px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 45px;
  font-weight: 700;
  line-height: 82px;
  text-align: center;
`;

export const Description = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: 700;
  line-height: 32px;
  margin-top: 8px;
  text-align: center;
`;

export const Spacer = styled.div`
  margin-top: 40px;
`;

export const MapsContainer = styled.div`
  width: 100%;
  height: 50vh;
`;
