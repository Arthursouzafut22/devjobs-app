import styled from "styled-components";

export const Header = styled.header`
  background-image: url("../src/assets/imagens/bg-pattern-header.svg");
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3.13rem 1.25rem 4.38rem 1.25rem;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 70rem;
  margin: 0 auto;

  img {
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.63rem;
`;
