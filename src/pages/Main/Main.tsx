import * as S from "./Style";
import CardsJobs from "../../Components/CardsJobs/CardsJobs";
import { useFetchJobs } from "../../RequestApi/RequestApi";
import NavSearch from "../../Components/NavSearch/NavSearch";
import { useLocation } from "react-router-dom";

const Main: React.FC = () => {
  const { data, isLoading } = useFetchJobs();
  const location = useLocation();
  if (!data) return null;

  return (
    <>
      <S.DivWrapper>{location.pathname === "/" && <NavSearch />}</S.DivWrapper>
      <S.Main>
        {isLoading && <p>Carregando...</p>}
        {data && data.map((jobs) => <CardsJobs jobs={jobs} key={jobs.id} />)}
      </S.Main>
    </>
  );
};

export default Main;
