import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  max-width: 1150px;
  width: 100%;
  padding: 0px 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Section = styled.div<{ checkDark: boolean | null }>`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -45%);
  max-width: 1118px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.checkDark ? "#19212E" : "#ffffff")};
  border-radius: 0.375rem;
  gap: 12px;
  z-index: 100;

  &.fixo {
    position: fixed;
    border: 1px solid wheat;
  }
`;

type PropsWidth = {
  mobile: boolean | null;
  borderMobile: boolean | null;
  width?: number;
  checkDark: boolean | null;
};

export const DivSearch = styled.div<PropsWidth>`
  display: ${(props) => (props.mobile ? "none" : "flex")};
  align-items: center;
  flex-direction: row-reverse;
  justify-content: start;
  gap: 10px;
  padding: 30px 15px;
  max-width: ${(props) => (props.width ? "width" : "350px")};
  width: ${(props) => (props.mobile ? "90%" : "100%")};
  margin: 0 auto;
  height: 89px;
  border-right: 1px solid
    ${(props) =>
      props.borderMobile
        ? "transparent"
        : props.checkDark
        ? "#323843"
        : "#acafb4"};
`;

export const DivBox = styled.div<Pick<PropsWidth, "checkDark" | "mobile">>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.mobile ? "end" : "center")};
  gap: 10px;
  padding: 30px 16px 30px 0px;
  max-width: ${(props) => (props.mobile ? "90px" : "300px")};
  width: 100%;
  height: 89px;

  input[type="checkbox"] {
    display: ${(props) => (props.mobile ? "none" : "block")};
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
    display: ${(props) => (props.mobile ? "none" : "block")};
    color: ${(props) => (props.checkDark ? "#ffffff" : "#000000")};
  }
`;

export const WebButton = styled.button<{ mobile: boolean }>`
  font-size: 17px;
  display: ${(props) => (props.mobile ? "flex" : "flex")};
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background-color: #5762e0;
  color: #ffffff;
  padding: ${(props) => (props.mobile ? "0px 12px" : "0px 16px")};
  max-width: ${(props) => (props.mobile ? "60px" : "128px")};
  width: 100%;
  height: 55px;
  cursor: pointer;
  border-radius: 0.375rem;
  border: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input<{ checkDark: boolean | null }>`
  font-size: 17px;
  color: #acafb4;
  border: none;
  outline: none;
  padding: 5px;
  background-color: ${(props) => (props.checkDark ? "#19212E" : "#ffffff")};
  width: 100%;
`;

export const MobileButton = styled.button`
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
