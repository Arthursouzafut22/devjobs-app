import { useRef } from "react";
import * as S from "./Style";
import SvgSearch from "../../assets/imagens/icon-search.svg";
import SvgLocation from "../../assets/imagens/icon-location.svg";
import { AuthJobs } from "../../Context/ContextThemeColor";
import { IoMdSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { useEffect } from "react";
import { UseMedia } from "../../Hooks/UseMedia";
import { AuthFilterJobs } from "../../Context/ContextFilterJobs";

const NavSearch = () => {
  const { mobile } = UseMedia("(max-width: 998px)");
  const refNav = useRef<HTMLDivElement | null>(null);
  const {
    filterJobs,
    inputByTitlle,
    inputByLocation,
    handleCheckboxChange,
    checkTime,
  } = AuthFilterJobs();
  const { checkDark } = AuthJobs();
  const element = refNav.current;

  // Scroll effect search nav...
  useEffect(() => {}, [element]); //  Nada por enquanto...

  return (
    <S.Wrapper>
      <S.Section checkDark={checkDark} ref={refNav}>
        <S.DivSearch
          width={450}
          checkDark={checkDark}
          mobile={null}
          borderMobile={mobile}
        >
          <S.Input
            ref={inputByTitlle}
            type="text"
            placeholder="Filter by title..."
            checkDark={checkDark}
          />
          {!mobile && <img src={SvgSearch} alt="serach" />}
        </S.DivSearch>

        <S.DivSearch checkDark={checkDark} mobile={mobile} borderMobile={null}>
          <S.Input
            ref={inputByLocation}
            type="text"
            placeholder="Filter by location"
            checkDark={checkDark}
          />
          <img src={SvgLocation} alt="Location" />
        </S.DivSearch>

        <S.DivBox checkDark={checkDark} mobile={mobile}>
          {mobile ? (
            <S.MobileButton>
              <FaFilter style={{ fontSize: "20px", color: "#6E8098" }} />
            </S.MobileButton>
          ) : (
            <>
              <input
                type="checkbox"
                name="check"
                id="check"
                checked={checkTime}
                onChange={handleCheckboxChange}
              />
              <p>Full Time Only</p>
            </>
          )}

          <S.WebButton mobile={mobile} onClick={filterJobs}>
            {mobile ? <IoMdSearch style={{ fontSize: "30px" }} /> : "Search"}
          </S.WebButton>
        </S.DivBox>
      </S.Section>
    </S.Wrapper>
  );
};

export default NavSearch;

// function scrollNavSearch() {
//   if (element) {
//     const top = element.getBoundingClientRect().top;

//     if (Math.floor(top) < 0) {
//       element.style.position = "fixed";
//       element.style.zIndex = "100";

//     } else if (Math.floor(top) > 0) {
//       element.style.position = "absolute";
//       element.style.zIndex = "100";
//     }
//   }
// }

// window.addEventListener("scroll", scrollNavSearch);
// scrollNavSearch();

// return () => window.removeEventListener("scroll", scrollNavSearch);
