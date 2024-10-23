import * as S from "../../pages/JobsInfo/Style";
import { PropsJobs } from "../../RequestApi/RequestApi";
import { UseMedia } from "../../Hooks/UseMedia";

const Footer = ({ findJobs }: { findJobs: PropsJobs }) => {
  const { mobile } = UseMedia("(max-width: 767px)");
  
  return (
    <S.Footer>
      <div
        style={{
          maxWidth: "737px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
