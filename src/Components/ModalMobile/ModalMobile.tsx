import * as S from "../NavSearch/Style";
import { AuthJobs } from "../../Context/ContextThemeColor";
import { AuthFilterJobs } from "../../Context/ContextFilterJobs";
import SvgLocation from "../../assets/imagens/icon-location.svg";
import { UseMedia } from "../../Hooks/UseMedia";

type ModalProps = {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalMobile = ({ activeModal, setActiveModal }: ModalProps) => {
  const { checkDark } = AuthJobs();
  const { mobile } = UseMedia("(max-width: 998px)");
  const { handleCheckboxChange, inputByLocation, checkTime, filterJobs } =
    AuthFilterJobs();

  return (
    <>
      {" "}
      {activeModal && (
        <S.SectionWrapper onClick={() => setActiveModal(false)}>
            <section style={{padding:"0px 60px"}}> 
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
          </section>
        </S.SectionWrapper>
      )}{" "}
    </>
  );
};

export default ModalMobile;
