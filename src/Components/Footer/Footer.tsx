import * as S from "../../pages/JobsInfo/Style";
import { PropsJobs } from "../../RequestApi/RequestApi";
import { UseMedia } from "../../Hooks/UseMedia";
import { AuthJobs } from "../../Context/ContextThemeColor";

const Footer = ({ findJobs }: { findJobs: PropsJobs }) => {
  const { mobile } = UseMedia("(max-width: 767px)");
  const { checkDark } = AuthJobs();

  return (
    <S.Footer checkDark={checkDark}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "46.06rem",
          margin: "0 auto",
          flex: "1",
        }}
      >
        {!mobile && (
          <div>
            <h2>{findJobs?.position}</h2>
            <p>{findJobs?.company}</p>
          </div>
        )}
        <S.BlueButton
          mobile={mobile}
          onClick={() => (window.location.href = `${findJobs?.apply}`)}
        >
          Apply Now
        </S.BlueButton>
      </div>
    </S.Footer>
  );
};

export default Footer;
