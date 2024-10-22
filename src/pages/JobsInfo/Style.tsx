import styled from "styled-components";

export const SectionJobs = styled.section`
  max-width: 1150px;
  /* margin: 120px auto auto auto; */ // Por enquanto...
  padding: 0px 20px;
  margin: 12px auto auto auto;
`;

export const DivJobs = styled.div`
  /* border: 1px solid wheat; */
  max-width: 737px;
  margin: 0 auto;
`;

export const DivCompany = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
  height: 150px;
  background-color: #19212e;
  border-radius: 0.375rem;
  width: 100%;
`;

export const DivScoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 30px;

  div {
    h2 {
      font-size: 24px;
      color: #ffffff;
      margin-bottom: 12px;
    }
    p {
      color: #6d7fa4;
    }
  }
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  padding: 15px 16px;
  display: block;
  cursor: pointer;
  border: none;
  color: #ffffff;
  background-color: #ffffff1a;
  border-radius: 0.375rem;
  transition: 0.4s;

  &:hover {
    background-color: #696e77;
  }
`;

export const DivInfo = styled.div`
  border: 1px solid wheat;
  margin-top: 20px;
  padding: 30px;
  background-color: #19212e;
  border-radius: 0.375rem;
`;

export const DivInfoTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 28px;
    color: #ffffff;
  }

  p {
    font-weight: 700;
    color: #5762e0;
  }
`;

export const DivTime = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #6d7fa4;

  p {
    color: #6d7fa4;
    font-weight: normal;
  }
`;

export const BlueButton = styled(Button)`
  background-color: #5762e0;
  padding: 15px 28px;

  &:hover {
    background-color: #949cf4;
  }
`;

export const DivRequirements = styled.div`
  margin-top: 35px;

  h2 {
    font-size: 20px;
    color: #ffffff;
  }

  p {
    color: #6d7fa4;
    margin-top: 25px;
  }

  ul {
    margin-top: 20px;

    li {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
      color: #6d7fa4;
    }
  }
`;
