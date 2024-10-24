import * as S from "./Style";
import { useParams } from "react-router-dom";
import { useFetchJobs } from "../../RequestApi/RequestApi";
import { UseMedia } from "../../Hooks/UseMedia";
import Footer from "../../Components/Footer/Footer";

const JobsInfo: React.FC = () => {
  const { data } = useFetchJobs();
  const { position } = useParams();
  const { mobile } = UseMedia("(max-width: 767px)");

  if (!data) return null;
  const findJobs = data.find((i) => i.position === position);
  

  return (
    <S.SectionJobs>
      <S.DivJobs>
        {""}
        <S.DivCompany mobile={mobile}>
          <figure style={{ background: `${findJobs?.logoBackground}` }}>
            <img src={"../" + findJobs?.logo} alt={findJobs?.company} />
          </figure>
          <S.DivScoot mobile={mobile}>
            <div>
              <h2>{findJobs?.company}</h2>
              <p>{findJobs?.website}</p>
            </div>
            <S.Button
              onClick={() => (window.location.href = `${findJobs?.apply}`)}
            >
              Company Site
            </S.Button>
          </S.DivScoot>
        </S.DivCompany>
        {""}

        {""}
        <S.DivInfo>
          <S.DivInfoTwo mobile={mobile}>
            <S.DivWrapper mobile={mobile}>
              <S.DivTime>
                <p>{findJobs?.postedAt}</p>
                {"•"}
                <p>{findJobs?.contract}</p>
              </S.DivTime>
              <h1>{findJobs?.position}</h1>
              <p>{findJobs?.location}</p>
            </S.DivWrapper>
            <S.BlueButton mobile={mobile}
              onClick={() => (window.location.href = `${findJobs?.apply}`)}
            >
              Apply Now
            </S.BlueButton>
          </S.DivInfoTwo>

          <p style={{ color: "#6d7fa4", marginTop: "30px", lineHeight: "1.5" }}>
            {findJobs?.description}
          </p>
          {""}
          <S.DivRequirements>
            <h2>requirements</h2>
            <p>{findJobs?.requirements.content}</p>

            <ul>
              {findJobs?.requirements.items.map((i) => (
                <li key={i}>
                  <span></span>
                  {i}
                </li>
              ))}
            </ul>
          </S.DivRequirements>
          {""}

          <S.DivRole>
            <h2>What You Will Do</h2>
            <p>{findJobs?.role.content}</p>

            <ul>
              {findJobs?.role.items.map((role, i) => (
                <li key={i}>
                  {" "}
                  <span>{i + 1}</span>
                  {role}
                </li>
              ))}
            </ul>
          </S.DivRole>
        </S.DivInfo>
        {""}
      </S.DivJobs>
      {findJobs && <Footer findJobs={findJobs}/>}

    </S.SectionJobs>
  );
};

export default JobsInfo;
