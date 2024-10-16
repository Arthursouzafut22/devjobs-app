import React from "react";
import * as S from "./Style";
import SvgSearch from "../../assets/imagens/icon-search.svg";
import SvgLocation from "../../assets/imagens/icon-location.svg";

const NavSearch: React.FC = () => {
  return (
    <S.Section>
      <S.DivSerach width={450}>
        <S.Input type="text" placeholder="Filter by title, companies" />
        <img src={SvgSearch} alt="serach" />
      </S.DivSerach>
      <S.DivSerach>
        <S.Input type="text" placeholder="Filter by location" />
        <img src={SvgLocation} alt="Location" />
      </S.DivSerach>
      <S.DivBox>
        <input type="checkbox" name="check" id="check" />
        <p>Full Time Only</p>
        <button>Search</button>
      </S.DivBox>
    </S.Section>
  );
};

export default NavSearch;
