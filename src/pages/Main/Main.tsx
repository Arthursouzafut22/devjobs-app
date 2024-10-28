import * as S from "./Style";
import CardsJobs from "../../Components/CardsJobs/CardsJobs";
import NavSearch from "../../Components/NavSearch/NavSearch";
import { useLocation } from "react-router-dom";
import { AuthFilterJobs } from "../../Context/ContextFilterJobs";
import { Suspense } from "react";

const Main: React.FC = () => {
  const {
    positionn,
    locationn,
    checkLength,
    erroPosition,
    erroLocation,
    fullTime,
    data,
  } = AuthFilterJobs();
  const location = useLocation();

  const conditionItems =
    positionn.length > 0
      ? positionn
      : locationn.length > 0
      ? locationn
      : checkLength
      ? data
      : fullTime.length > 0
      ? fullTime
      : data;

  return (
    <>
      <S.DivWrapper>{location.pathname === "/" && <NavSearch />}</S.DivWrapper>
      <S.Main>
        {erroPosition || erroLocation ? (
          <p style={{ color: "#ffffff" }}>Nenhum Job encontrado...</p>
        ) : (
          conditionItems &&
          conditionItems.map((jobs) => (
            <Suspense fallback={<p>Loading jobs...</p>}>
              <CardsJobs jobs={jobs} key={jobs.id} />
            </Suspense>
          ))
        )}
      </S.Main>
    </>
  );
};

export default Main;
