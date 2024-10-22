import * as S from "./Style";
import { PropsJobs } from "../../RequestApi/RequestApi";
import { memo } from "react";
import { AuthJobs } from "../../Context/ContextThemeColor";
import { NavLink } from "react-router-dom";

const CardsJobs = ({ jobs }: { jobs: PropsJobs }) => {
  const { checkDark } = AuthJobs();

  return (
    <>
      <S.DivCard checkDark={checkDark}>
        <NavLink
          to={`jobs/${encodeURI(jobs.position)}`}
          style={{ display: "block" }}
        >
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
        </NavLink>
      </S.DivCard>
    </>
  );
};

export default memo(CardsJobs);
