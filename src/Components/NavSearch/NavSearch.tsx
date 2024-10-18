import React from "react";
import * as S from "./Style";
import SvgSearch from "../../assets/imagens/icon-search.svg";
import SvgLocation from "../../assets/imagens/icon-location.svg";
import { AuthJobs } from "../../Context/ContextThemeColor";

const NavSearch: React.FC = () => {
  const { checkDark } = AuthJobs();

  return (
    <S.Wrapper>
      <S.Section checkDark={checkDark}>
        <S.DivSerach width={450} checkDark={checkDark}>
          <S.Input
            type="text"
            placeholder="Filter by title, companies"
            checkDark={checkDark}
          />
          <img src={SvgSearch} alt="serach" />
        </S.DivSerach>
        <S.DivSerach checkDark={checkDark}>
          <S.Input
            type="text"
            placeholder="Filter by location"
            checkDark={checkDark}
          />
          <img src={SvgLocation} alt="Location" />
        </S.DivSerach>
        <S.DivBox checkDark={checkDark}>
          <input type="checkbox" name="check" id="check" />
          <p>Full Time Only</p>
          <button>Search</button>
        </S.DivBox>
      </S.Section>
    </S.Wrapper>
  );
};

export default NavSearch;
