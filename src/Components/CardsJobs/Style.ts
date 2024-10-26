import { keyframes } from "styled-components";
import styled from "styled-components";

// Variaveis color...
const colorDark = "#6d7fa4";
const colorWhite = "#ffffff";
const colorBlue = "#5762e5";
const colorGunmetal = "#19212E";

const customAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.9;
  }
`;

export const DivCard = styled.div<{ checkDark: boolean | null }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${(propps) =>
    propps.checkDark ? colorGunmetal : colorWhite};
  padding: 1.5625rem;
  cursor: pointer;
  /* max-width: 350px; */
  flex: 1 0 290px;
  border-radius: 0.375rem;
  width: 100%;
  height: 237px;
  position: relative;
  transition: box-shadow 0.3s ease;
  animation: ${customAnimation} 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 32px -4px rgba(139, 92, 246, 0.5);
  }

  &::before {
    content: "";
    position: absolute;
    background-color: #8b5cf6;
  }

  @keyframes customAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

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
  gap: 0.5rem;

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
