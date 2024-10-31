import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  max-width: 71.88rem;
  width: 100%;
  padding: 0 1.25rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

type PropsSearchBar = {
  searchBar: boolean;
  checkDark: boolean | null;
};

export const Section = styled.div<PropsSearchBar>`
  position: ${(props) => (props.searchBar ? "fixed" : "absolute")};
  top: 0%;
  left: 50%;
  /* transform:translate(-50%, -45%); */
  transform: ${(props) =>
    props.searchBar ? "translate(-50%, 5%)" : "translate(-50%, -45%)"};
  box-shadow: ${(props) =>
    props.searchBar ? "0 0 32px -4px rgba(139, 92, 246, 0.5)" : "0 0 0 0 0"};
  will-change: opacity;
  max-width: 69.88rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.checkDark ? "#19212E" : "#ffffff")};
  border-radius: 0.375rem;
  gap: 0.75rem;
  z-index: 8880;
  transition: none;
  backface-visibility: hidden;

  &.fixo {
    position: fixed;
    border: 1px solid wheat;
  }
`;

type PropsWidth = {
  mobile?: boolean | null;
  borderMobile: boolean | null;
  width?: number;
  checkDark: boolean | null;
};

export const DivSearch = styled.div<PropsWidth>`
  display: ${(props) => (props.mobile ? "none" : "flex")};
  align-items: center;
  flex-direction: row-reverse;
  justify-content: start;
  gap: 0.63rem;
  padding: 1.88rem 0.94rem;
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
  gap: 0.63rem;
  padding: 1.88rem 1rem 1.88rem 0;
  max-width: ${(props) => (props.mobile ? "90px" : "300px")};
  width: 100%;
  height: 89px;

  input[type="checkbox"] {
    display: ${(props) => (props.mobile ? "none" : "block")};
    display: block;
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
    font-size: 1.06rem;
    font-size: 100%;
    font-weight: 700;
    display: ${(props) => (props.mobile ? "none" : "block")};
    color: ${(props) => (props.checkDark ? "#ffffff" : "#000000")};
  }
`;

export const WebButton = styled.button<{ mobile?: boolean | null }>`
  display: ${(props) => (props.mobile ? "flex" : "flex")};
  align-items: center;
  justify-content: center;
  font-size: 1.06rem;
  font-weight: 700;
  background-color: #5762e0;
  color: #ffffff;
  padding: ${(props) => (props.mobile ? "0 0.75rem" : "0 1.00rem")};
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
  font-size: 1.06rem;
  color: #acafb4;
  border: none;
  outline: none;
  padding: 0.31rem;
  background-color: ${(props) => (props.checkDark ? "#19212E" : "#ffffff")};
  width: 100%;
`;

export const MobileButton = styled.button`
  padding: 0.31rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

//Modal....

type PropsModal = {
  columm?: boolean;
  checkDark: boolean | null;
  border?: boolean;
};

export const SectionWrapper = styled.section`
  position: fixed;
  height: 100vh;
  top: -126%;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.538);
  z-index: 400;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ModalWrapper = styled.section<{ checkDark: boolean | null }>`
  position: absolute;
  transform: translateY(-50%);
  transform: translateX(-50%);
  left: 50%;
  right: 50%;
  top: 35%;
  overflow-x: hidden;
  max-width: 500px;
  height: 222px;
  width: 100%;
  background-color: ${(props) => (props.checkDark ? "#19212E" : "#ffffff")};
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid wheat;
  z-index: 500;
`;

export const DivModal = styled.div<PropsModal>`
  display: flex;
  align-items: ${(props) => (props.columm ? "start" : "center")};
  flex-direction: ${(props) => props.columm && "column"};
  gap: 15px;
  padding: 20px;
  border-top: ${(props) => props.border && "1px solid"};
  border-color: ${(props) => (props.checkDark ? "#323843" : "#acafb4")};

  p {
    font-weight: 700;
    color: ${(props) => (props.checkDark ? "#ffffff" : "#000000")};
  }

  input[type="checkbox"] {
    display: block;
    appearance: none;
    -webkit-appearance: checkbox;
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 0.25rem;

    &:checked {
      accent-color: #7c5dfa;
      background-color: transparent;
    }
  }
`;

export const ModalButton = styled(WebButton)<{ width: boolean }>`
  max-width: 100%;
`;
