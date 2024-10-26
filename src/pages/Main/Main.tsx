import * as S from "./Style";
import CardsJobs from "../../Components/CardsJobs/CardsJobs";
import { useFetchJobs } from "../../RequestApi/RequestApi";
import NavSearch from "../../Components/NavSearch/NavSearch";
import { useLocation } from "react-router-dom";
import { AuthFilterJobs } from "../../Context/ContextFilterJobs";

const Main: React.FC = () => {
  const { positionn, locationn, checkLength, erroPosition, erroLocation } =
    AuthFilterJobs();
  const { data, isLoading } = useFetchJobs();
  const location = useLocation();
  if (!data) return null;

  const listItems =
    positionn.length > 0
      ? positionn
      : locationn.length > 0
      ? locationn
      : checkLength
      ? data
      : data;

  return (
    <>
      <S.DivWrapper>{location.pathname === "/" && <NavSearch />}</S.DivWrapper>
      <S.Main>
        {erroPosition || erroLocation ? (
          <p style={{ color: "#ffffff" }}>Nenhum Job encontrado...</p>
        ) : (
          listItems &&
          listItems.map((jobs) => <CardsJobs jobs={jobs} key={jobs.id} />)
        )}
        {isLoading && <p>Carregando...</p>}
      </S.Main>
    </>
  );
};

export default Main;
