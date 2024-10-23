import styled from "styled-components";

export const SectionJobs = styled.section`
  max-width: 1150px;
  /* margin: 120px auto auto auto; */ // Por enquanto...
  padding: 0px 20px;
  margin: 12px auto auto auto;
`;

export const DivJobs = styled.div`
  max-width: 737px;
  margin: 0 auto;
`;

export const DivCompany = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  height: ${(props) => (props.mobile ? "200px" : "150px")};
  background-color: #19212e;
  border-radius: 0.375rem;
  width: 100%;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.mobile ? "3rem" : "144px")};
    height: ${(props) => (props.mobile ? "3rem" : "150px")};
    border-radius: ${(props) =>
      props.mobile ? "1rem" : "0.375rem 0 0 0.375rem"};
    position: ${(props) => (props.mobile ? "absolute" : "initial")};
    top: 19.5%;

    img {
      display: block;
      max-width: 100%;
      width: ${(props) => (props.mobile ? "initial" : "80px")};
    }
  }
`;

export const DivScoot = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.mobile ? "center" : "space-between")};
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  flex: 1;
  padding: 30px;
  gap: 20px;

  div {
    h2 {
      font-size: 24px;
      color: #ffffff;
      margin-bottom: 12px;
      text-align: ${(props) => (props.mobile ? "center" : "left")};
      margin-top: ${(props) => (props.mobile ? "8px" : "0")};
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
  margin-top: 20px;
  margin-bottom: 170px;
  padding: 30px;
  background-color: #19212e;
  border-radius: 0.375rem;
`;

export const DivInfoTwo = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: ${(props) => (props.mobile ? "start" : "center")};
  justify-content: space-between;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  gap: 20px;
`;

export const DivWrapper = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: ${(props) => (props.mobile ? "20px" : "28px")};
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

export const BlueButton = styled(Button)<{ mobile: boolean }>`
  background-color: #5762e0;
  padding: 15px 28px;
  width: ${(props) => (props.mobile ? "100%" : "initial")};

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

    & :first-child {
      span {
        flex: 1 0 7px;
      }
    }

    li {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
      color: #6d7fa4;

      span {
        display: block;
        width: 7px;
        height: 7px;
        background-color: #5762e0;
        box-sizing: border-box;
        border-radius: 50%;
      }
    }
  }
`;

export const DivRole = styled.div`
  margin-top: 35px;

  h2 {
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
      align-items: start;
      gap: 12px;
      color: #6d7fa4;
      margin-bottom: 10px;

      span {
        font-weight: 700;
        color: #5762e0;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #19212e;
  padding: 25px 20px;
  width: 100%;
  position: fixed;
  bottom: 0;
  transform: translate(-0%, -0%);
  right: 0%;

  h2 {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 6px;
  }

  p {
    color: #6d7fa4;
  }
`;
