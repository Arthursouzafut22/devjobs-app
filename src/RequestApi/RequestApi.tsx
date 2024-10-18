import { useQuery } from "react-query";

export type PropsJobs = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
};

const fetchJobs = async (): Promise<PropsJobs[]> => {
  const $es = await fetch("data.json");
  const resposta = await $es.json();
  return resposta;
};

export const useFetchJobs = () => {
  return useQuery<PropsJobs[]>({
    queryKey: ["Jobs"],
    queryFn: fetchJobs,
  });
};
