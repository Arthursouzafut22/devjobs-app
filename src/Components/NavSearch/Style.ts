import styled from "styled-components";

export const Section = styled.section<{ checkDark: boolean | null }>`
  position: fixed;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.checkDark ? "#19212E" : "#ffffff")};
  border-radius: 0.375rem;
  gap: 12px;
`;

type PropsWidth = {
  width?: number;
  checkDark: boolean | null;
};

export const DivSerach = styled.div<PropsWidth>`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: start;
  gap: 10px;
  border-right: 1px solid
    ${(props) => (props.checkDark ? "#323843" : "#acafb4")};
  padding: 30px 15px;
  max-width: ${(props) => (props.width ? "width" : "350px")};
  width: 100%;
  margin: 0 auto;
  height: 89px;
`;

export const DivBox = styled.div<{ checkDark: boolean | null }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 30px 16px 30px 0px;
  max-width: 300px;
  width: 100%;
  height: 89px;

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: checkbox;
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 4px;

    &:checked {
      accent-color: #7c5dfa;
      background-color: transparent;
    }
  }

  p {
    font-size: 17px;
    font-size: 100%;
    font-weight: 700;
    color: ${(props) => (props.checkDark ? "#ffffff" : "#000000")};
  }

  button {
    font-size: 17px;
    font-weight: 700;
    background-color: #5762e0;
    color: #ffffff;
    padding: 18px 16px;
    max-width: 128px;
    width: 100%;
    cursor: pointer;
    border-radius: 0.375rem;
    border: none;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Input = styled.input<{ checkDark: boolean | null }>`
  font-size: 17px;
  color: #acafb4;
  border: none;
  outline: none;
  padding: 5px;
  background-color: ${(props) => (props.checkDark ? "#19212E" : "#ffffff")};
`;
