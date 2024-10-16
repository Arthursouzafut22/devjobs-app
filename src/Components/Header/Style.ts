import styled from "styled-components";

export const Header = styled.header`
  background-image: url("src/assets/imagens/bg-pattern-header.svg");
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 50px 70px 50px;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
