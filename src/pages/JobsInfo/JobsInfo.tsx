import * as S from "./Style";
import { useParams } from "react-router-dom";
import { useFetchJobs } from "../../RequestApi/RequestApi";

const JobsInfo: React.FC = () => {
  const { data } = useFetchJobs();
  const { position } = useParams();

  if (!data) return null;
  const findJobs = data.find((i) => i.position === position);
  console.log(findJobs);

  return (
    <S.SectionJobs>
      <S.DivJobs>
        {""}
        <S.DivCompany>
          <figure style={{ background: `${findJobs?.logoBackground}` }}>
            <img src={findJobs?.logo} alt={findJobs?.company} />
          </figure>
          <S.DivScoot>
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
          <S.DivInfoTwo>
            <S.DivWrapper>
              <S.DivTime>
                <p>{findJobs?.postedAt}</p>
                {"•"}
                <p>{findJobs?.contract}</p>
              </S.DivTime>
              <h1>{findJobs?.position}</h1>
              <p>{findJobs?.location}</p>
            </S.DivWrapper>
            <S.BlueButton>Apply Now</S.BlueButton>
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
                  <span style={{ color: "#5762e0", fontSize: "45px" }}>
                    {"•"}
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </S.DivRequirements>
          {""}
        </S.DivInfo>
        {""}
      </S.DivJobs>
    </S.SectionJobs>
  );
};

export default JobsInfo;
