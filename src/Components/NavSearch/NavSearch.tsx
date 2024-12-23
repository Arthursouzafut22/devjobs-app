import { useState } from "react";
import * as S from "./Style";
import SvgSearch from "../../assets/imagens/icon-search.svg";
import SvgLocation from "../../assets/imagens/icon-location.svg";
import { AuthJobs } from "../../Context/ContextThemeColor";
import { IoMdSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { UseMedia } from "../../Hooks/UseMedia";
import { AuthFilterJobs } from "../../Context/ContextFilterJobs";
import ModalMobile from "../ModalMobile/ModalMobile";

const NavSearch = () => {
  const { mobile } = UseMedia("(max-width: 998px)");
  const [activeModal, setActiveModal] = useState(false);
  const {
    filterJobs,
    inputByTitlle,
    inputByLocation,
    handleCheckboxChange,
    checkTime,
  } = AuthFilterJobs();
  const { checkDark } = AuthJobs();

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
          {mobile && (
            <S.MobileButton onClick={() => setActiveModal(true)}>
              <FaFilter style={{ fontSize: "20px", color: "#6E8098" }} />
            </S.MobileButton>
          )}{" "}
          {!mobile && (
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
            {mobile ? (
              <IoMdSearch style={{ fontSize: " 1.88rem" }} />
            ) : (
              "Search"
            )}
          </S.WebButton>
        </S.DivBox>
        <ModalMobile
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </S.Section>
    </S.Wrapper>
  );
};

export default NavSearch;
