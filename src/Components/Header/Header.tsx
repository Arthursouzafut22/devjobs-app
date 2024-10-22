import * as S from "./Style";
import Logo from "../../assets/imagens/logo.svg";
import { FaSun, FaMoon } from "react-icons/fa";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const stylesIcon: React.CSSProperties = {
  fontSize: "20px",
  color: "#ffffff",
};

const Header: React.FC = () => {
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
    </S.Header>
  );
};

export default Header;
