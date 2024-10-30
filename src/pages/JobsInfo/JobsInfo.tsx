import * as S from "./Style";
import { useParams } from "react-router-dom";
import { useFetchJobs } from "../../RequestApi/RequestApi";
import { UseMedia } from "../../Hooks/UseMedia";
import { AuthJobs } from "../../Context/ContextThemeColor";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import { PropsJobs } from "../../RequestApi/RequestApi";

const JobsInfo: React.FC = () => {
  const { mobile } = UseMedia("(max-width: 767px)");
  const { checkDark } = AuthJobs();
  const { position } = useParams();
  const { data } = useFetchJobs();

  const [findJobs, setFindJobss] = useState<PropsJobs>(() => {
    const temItem = localStorage.getItem("jobs");
    return temItem ? JSON.parse(temItem) : null;
  });

  useEffect(() => {
    const findJobss = data?.find((i) => i.position === position);
    if (findJobss) {
      setFindJobss(findJobss);
      localStorage.setItem("jobs", JSON.stringify(findJobss));
    }
  }, [position, data, findJobs]);

  return (
    <S.SectionJobs>
      <S.DivJobs>
        {""}
        <S.DivCompany mobile={mobile} checkDark={checkDark}>
          <figure style={{ background: `${findJobs?.logoBackground}` }}>
            <img src={"../" + findJobs?.logo} alt={findJobs?.company} />
          </figure>
          <S.DivScoot mobile={mobile} checkDark={checkDark}>
            <div>
              <h2>{findJobs?.company}</h2>
              <p>{findJobs?.website}</p>
            </div>
            <S.Button
              checkDark={checkDark}
              onClick={() => (window.location.href = `${findJobs?.apply}`)}
            >
              Company Site
            </S.Button>
          </S.DivScoot>
        </S.DivCompany>
        {""}

        {""}
        <S.DivInfo mobile={mobile} checkDark={checkDark}>
          <S.DivInfoTwo mobile={mobile}>
            <S.DivWrapper mobile={mobile} checkDark={checkDark}>
              <S.DivTime>
                <p>{findJobs?.postedAt}</p>
                {"•"}
                <p>{findJobs?.contract}</p>
              </S.DivTime>
              <h1>{findJobs?.position}</h1>
              <p>{findJobs?.location}</p>
            </S.DivWrapper>
            <S.BlueButton
              mobile={mobile}
              onClick={() => (window.location.href = `${findJobs?.apply}`)}
            >
              Apply Now
            </S.BlueButton>
          </S.DivInfoTwo>

          <p style={{ color: "#6d7fa4", marginTop: "30px", lineHeight: "1.5" }}>
            {findJobs?.description}
          </p>
          {""}
          <S.DivRequirements checkDark={checkDark}>
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

          <S.DivRole checkDark={checkDark}>
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
      {findJobs && <Footer findJobs={findJobs} />}
    </S.SectionJobs>
  );
};

export default JobsInfo;
