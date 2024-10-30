import { useQuery } from "react-query";

type RequirementsProps = {
  content: string;
  items: string[];
};

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
  requirements: RequirementsProps;
  role: RequirementsProps;
};

const fetchJobs = async (): Promise<PropsJobs[]> => {
  const $es = await fetch("/data.json");
  const $esposta = await $es.json();
  return $esposta;
};

export const useFetchJobs = () => {
  return useQuery<PropsJobs[]>({
    queryKey: ["Jobs"],
    queryFn: fetchJobs,
    suspense: true,
  });
};
