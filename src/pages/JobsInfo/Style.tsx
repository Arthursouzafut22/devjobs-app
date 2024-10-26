import styled from "styled-components";

// Variaveis color...
const whiteColor = "#ffffff";
const darKChumbo = "#6d7fa4";
const darkBlack = "#19212e";
const blueColor = "#5762e0";

export const SectionJobs = styled.section`
  max-width: 71.88rem;
  padding: 0 1.25rem;
  margin: 12px auto auto auto;
`;

export const DivJobs = styled.div`
  max-width: 46.06rem;
  margin: 0 auto;
  position: relative;
`;

type PropsStyles = {
  checkDark: boolean | null;
  mobile: boolean;
};

export const DivCompany = styled.div<PropsStyles>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  height: ${(props) => (props.mobile ? "200px" : "150px")};
  background-color: ${(props) => (props.checkDark ? darkBlack : "#ffffff")};
  border-radius: 0.375rem;
  width: 100%;
  position: absolute;
  left: 0%;
  transform: translate(-0%, -115%);

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.mobile ? "3rem" : "9.00rem")};
    height: ${(props) => (props.mobile ? "3rem" : "150px")};
    border-radius: ${(props) =>
      props.mobile ? "1rem" : "0.375rem 0 0 0.375rem"};
    position: ${(props) => (props.mobile ? "absolute" : "initial")};
    top: -12%;

    img {
      display: block;
      max-width: 100%;
      width: ${(props) => (props.mobile ? "initial" : "80px")};
    }
  }
`;

export const DivScoot = styled.div<PropsStyles>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.mobile ? "center" : "space-between")};
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  flex: 1;
  padding: 1.88rem;
  gap: 1.25rem;

  div {
    h2 {
      font-size: 1.5rem;
      color: ${(props) => (props.checkDark ? whiteColor : "#000000")};
      margin-bottom: 12px;
      text-align: ${(props) => (props.mobile ? "center" : "left")};
      margin-top: ${(props) => (props.mobile ? "8px" : "0")};
    }
    p {
      color: ${darKChumbo};
    }
  }
`;

export const Button = styled.button<{ checkDark?: boolean | null }>`
  font-size: 1rem;
  font-weight: 700;
  padding: 0.94rem 1rem;
  display: block;
  cursor: pointer;
  border: none;
  color: ${(props) => (props.checkDark ? whiteColor : blueColor)};
  background-color: ${(props) => (props.checkDark ? "#ffffff1a" : "#EEEFFC")};
  border-radius: 0.375rem;
  transition: 0.4s;

  &:hover {
    background-color: #696e77;
  }
`;

export const DivInfo = styled.div<PropsStyles>`
  margin-top: ${(props) => (props.mobile ? " 210px" : "130px")};
  margin-bottom: 170px;
  padding: 1.88rem;
  background-color: ${(props) => (props.checkDark ? darkBlack : "#ffffff")};
  border-radius: 0.375rem;
`;

export const DivInfoTwo = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: ${(props) => (props.mobile ? "start" : "center")};
  justify-content: space-between;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  gap: 1.25rem;
`;

export const DivWrapper = styled.div<PropsStyles>`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;

  h1 {
    font-size: ${(props) => (props.mobile ? "1.25rem" : " 1.75rem")};
    color: ${(props) => (props.checkDark ? whiteColor : "#000000")};
  }

  p {
    font-weight: 700;
    color: ${blueColor};
  }
`;

export const DivTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.63rem;
  color: ${darKChumbo};

  p {
    color: ${darKChumbo};
    font-weight: normal;
  }
`;

export const BlueButton = styled(Button)<{ mobile: boolean }>`
  color: ${whiteColor};
  background-color: ${blueColor};
  padding: 15px 28px;
  width: ${(props) => (props.mobile ? "100%" : "initial")};

  &:hover {
    background-color: #949cf4;
  }
`;

export const DivRequirements = styled.div<{ checkDark: boolean | null }>`
  margin-top: 35px;

  h2 {
    font-size: 1.25rem;
    color: ${(props) => (props.checkDark ? whiteColor : "#000000")};
  }

  p {
    color: ${darKChumbo};
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
      gap: 0.75rem;
      margin-bottom: 10px;
      color: ${darKChumbo};

      span {
        display: block;
        width: 7px;
        height: 7px;
        background-color: ${blueColor};
        box-sizing: border-box;
        border-radius: 50%;
      }
    }
  }
`;

export const DivRole = styled.div<{ checkDark: boolean | null }>`
  margin-top: 35px;

  h2 {
    color: ${(props) => (props.checkDark ? whiteColor : "#000000")};
  }

  p {
    color: ${darKChumbo};
    margin-top: 25px;
  }

  ul {
    margin-top: 20px;

    li {
      display: flex;
      align-items: start;
      gap: 0.75rem;
      color: ${darKChumbo};
      margin-bottom: 10px;

      span {
        font-weight: 700;
        color: ${blueColor};
      }
    }
  }
`;

export const Footer = styled.footer<{ checkDark: boolean | null }>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.checkDark ? darkBlack : "#ffffff")};
  padding: 1.56rem 1.25rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  transform: translate(-0%, -0%);
  right: 0%;

  h2 {
    font-size: 1.25rem;
    color: ${(props) => (props.checkDark ? whiteColor : "#000000")};
    margin-bottom: 6px;
  }

  p {
    color: ${darKChumbo};
  }
`;
