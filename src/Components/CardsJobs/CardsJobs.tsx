import * as S from "./Style";
import { PropsJobs } from "../../RequestApi/RequestApi";
import { memo } from "react";
import { AuthJobs } from "../../Context/ContextThemeColor";

const CardsJobs = ({ jobs }: { jobs: PropsJobs }) => {
  const { checkDark } = AuthJobs();
  return (
    <>
      <S.DivCard checkDark={checkDark}>
        <figure style={{ background: `${jobs.logoBackground}` }}>
          <img src={jobs.logo} alt={jobs.company} />
        </figure>
        <S.DivTime>
          <p>{jobs.postedAt}</p>
          {"•"}
          <p>{jobs.contract}</p>
        </S.DivTime>
        <h2>{jobs.position}</h2>
        <S.Company>{jobs.company}</S.Company>
        <S.Location>{jobs.location}</S.Location>
      </S.DivCard>
    </>
  );
};

export default memo(CardsJobs);
