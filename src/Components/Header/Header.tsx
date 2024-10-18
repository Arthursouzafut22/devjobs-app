import * as S from "./Style";
import Logo from "../../assets/imagens/logo.svg";
import { FaSun, FaMoon } from "react-icons/fa";
import NavSearch from "../NavSearch/NavSearch";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const stylesIcon: React.CSSProperties = {
  fontSize: "20px",
  color: "#ffffff",
};

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <img src={Logo} alt="logo-marca" />
        <S.Wrapper>
          <FaSun style={stylesIcon} />
          <ToggleSwitch />
          <FaMoon style={stylesIcon} />
        </S.Wrapper>
      </S.Nav>
      <NavSearch />
    </S.Header>
  );
};

export default Header;
