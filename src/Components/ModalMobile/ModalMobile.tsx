import * as S from "../NavSearch/Style";
import { AuthJobs } from "../../Context/ContextThemeColor";
import { AuthFilterJobs } from "../../Context/ContextFilterJobs";
import SvgLocation from "../../assets/imagens/icon-location.svg";
import { FaWindowClose } from "react-icons/fa";
import { UseMedia } from "../../Hooks/UseMedia";
import { useEffect } from "react";

type ModalProps = {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalMobile = ({ activeModal, setActiveModal }: ModalProps) => {
  const { checkDark } = AuthJobs();
  const { mobile } = UseMedia("(max-width: 998px)");
  const { handleCheckboxChange, inputByLocation, checkTime, filterJobs } =
    AuthFilterJobs();

  // Efeito no body se activeModal tiver ativo ou não...
  useEffect(() => {
    const bodyStyle = window.document.body;

    if (activeModal) {
      bodyStyle.style.overflow = "hidden";
    }
    if (!activeModal) {
      bodyStyle.style.overflow = "initial";
    }

    return () => {
      bodyStyle.style.overflow = "initial";
    };
  }, [activeModal]);

  return (
    <>
      {" "}
      {activeModal && (
        <S.SectionWrapper onClick={() => setActiveModal(false)}>
          <div
            style={{ width: "100%", maxWidth: "1120px", position: "relative" }}
          >
            <S.ModalWrapper
              checkDark={checkDark}
              onClick={(e) => e.stopPropagation()}
            >
              <S.DivModal checkDark={checkDark}>
                <img src={SvgLocation} alt="Location" />
                <S.Input
                  ref={inputByLocation}
                  type="text"
                  placeholder="Filter by location"
                  checkDark={checkDark}
                />
              </S.DivModal>

              <S.DivModal checkDark={checkDark} columm={true} border={true}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    justifyContent: "flex-start",
                    width: "160%",
                  }}
                >
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    checked={checkTime}
                    onChange={handleCheckboxChange}
                  />
                  <p>Full Time Only</p>
                </div>

                <S.ModalButton onClick={filterJobs} width={mobile}>
                  Search
                </S.ModalButton>
              </S.DivModal>
            </S.ModalWrapper>
            <S.ButtonClose onClick={() => setActiveModal(false)}>
              <FaWindowClose style={{ color: " #5762e0", fontSize: "35px" }} />
            </S.ButtonClose>
          </div>
        </S.SectionWrapper>
      )}{" "}
    </>
  );
};

export default ModalMobile;
