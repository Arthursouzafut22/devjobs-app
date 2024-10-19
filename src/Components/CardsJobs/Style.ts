import styled from "styled-components";

// Variaveis color...
const colorDark = "#6d7fa4";
const colorWhite = "#ffffff";
const colorBlue = "#5762e5";
const colorGunmetal = "#19212E";

export const DivCard = styled.div<{ checkDark: boolean | null }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  background-color: ${(propps) =>
    propps.checkDark ? colorGunmetal : colorWhite};
  padding: 25px;
  cursor: pointer;
  flex: 1 0 352px;
  border-radius: 0.375rem;
  width: 100%;
  height: 237px;
  position: relative;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    position: absolute;
    top: -10%;

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  h2 {
    font-size: 22px;
    color: ${(props) => (props.checkDark ? colorWhite : "#000000")};
  }
`;

export const DivTime = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    color: ${colorDark};
  }
`;

export const Company = styled.p`
  color: ${colorDark};
`;

export const Location = styled.p`
  font-weight: 600;
  color: ${colorBlue};
  margin-top: 25px;
`;
