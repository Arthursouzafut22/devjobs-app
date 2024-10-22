import { useRef, useState } from "react";
import * as S from "./Style";
import SvgSearch from "../../assets/imagens/icon-search.svg";
import SvgLocation from "../../assets/imagens/icon-location.svg";
import { AuthJobs } from "../../Context/ContextThemeColor";
import { IoMdSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { useEffect } from "react";

const NavSearch = () => {
  const { checkDark } = AuthJobs();
  const [match] = useState("(max-width: 998px)");
  const [mobile, setMobile] = useState(false);
  const refNav = useRef<HTMLDivElement | null>(null);
  const element = refNav.current;

  // Scroll effect search nav...
  useEffect(() => {
    // function scrollNavSearch() {
    //   if (element) {
    //     const top = element.getBoundingClientRect().top;
    //     if (Math.floor(top) < 0) {
    //       element.classList.add("fixo");
    //     } else if (Math.floor(top) > 0) {
    //       element.classList.remove("fixo");
    //     }
    //   }
    // }
    // scrollNavSearch();
    // window.addEventListener("scroll", scrollNavSearch);
    // return () => window.removeEventListener("scroll", scrollNavSearch);
  }, [element]);

  // Mobile....
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
      <S.Section checkDark={checkDark} ref={refNav}>
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
          {mobile ? (
            <S.MobileButton>
              <FaFilter style={{ fontSize: "20px", color: "#6E8098" }} />
            </S.MobileButton>
          ) : (
            <>
              <input type="checkbox" name="check" id="check" />
              <p>Full Time Only</p>
            </>
          )}

          <S.WebButton mobile={mobile}>
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
