import React, { useState } from "react";
import * as S from "./Style";
import SvgSearch from "../../assets/imagens/icon-search.svg";
import SvgLocation from "../../assets/imagens/icon-location.svg";
import { AuthJobs } from "../../Context/ContextThemeColor";
import { IoMdSearch } from "react-icons/io";
import { useEffect } from "react";

const NavSearch: React.FC = () => {
  const { checkDark } = AuthJobs();
  const [match] = useState("(max-width: 998px)");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mathDay = () => {
      const { matches } = matchMedia(match);
      setMobile(matches);
    };

    window.addEventListener("resize", mathDay);
    mathDay();

    return () => window.removeEventListener("resize", mathDay);
  }, [match]);

  return (
    <S.Wrapper>
      <S.Section checkDark={checkDark}>
        <S.DivSearch
          width={450}
          checkDark={checkDark}
          mobile={null}
          borderMobile={mobile}
        >
          <S.Input
            type="text"
            placeholder="Filter by title..."
            checkDark={checkDark}
          />
          {!mobile && <img src={SvgSearch} alt="serach" />}
        </S.DivSearch>
        <S.DivSearch checkDark={checkDark} mobile={mobile} borderMobile={null}>
          <S.Input
            type="text"
            placeholder="Filter by location"
            checkDark={checkDark}
          />
          <img src={SvgLocation} alt="Location" />
        </S.DivSearch>
        <S.DivBox checkDark={checkDark} mobile={mobile}>
          <input type="checkbox" name="check" id="check" />
          <p>Full Time Only</p>
          <button>
            {mobile ? <IoMdSearch style={{ fontSize: "30px" }} /> : "Search"}
          </button>
        </S.DivBox>
      </S.Section>
    </S.Wrapper>
  );
};

export default NavSearch;
