import * as S from "./Style";
import CardsJobs from "../CardsJobs/CardsJobs";
import { useFetchJobs } from "../../RequestApi/RequestApi";

const Main: React.FC = () => {
  const { data, isLoading } = useFetchJobs();
  if (!data) return null;

  return (
    <S.Main>
      {isLoading && <p>Carregando...</p>}
      {data && data.map((jobs) => <CardsJobs jobs={jobs} key={jobs.id} />)}
    </S.Main>
  );
};

export default Main;
