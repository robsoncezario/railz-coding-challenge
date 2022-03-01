import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 150px);
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 112px;
  padding-right: 112px;

  @media (max-width: 1024px) {
    padding-left: 40px;
    padding-right: 40px;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  max-width: 542px;
  width: 100%;
  font-size: 55px;
  font-weight: 700;
  line-height: 82px;

  @media (max-width: 1024px) {
    margin-top: 30px;
    line-height: 60px;
    text-align: center;
  }
`;

export const Description = styled.div`
  max-width: 432px;
  width: 100%;
  font-size: 23px;
  font-weight: 700;
  line-height: 32px;
  margin-top: 30px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const Spacer = styled.div`
  margin-top: 30px;
`;

export const Illustration = styled.img`
  max-width: 608px;
  width: 35%;
  margin-left: 85px;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-bottom: 30px;
    order: -1;
    width: 75%;
  }
`;
