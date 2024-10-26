import { createContext, useContext, useRef, useState } from "react";
import { useFetchJobs } from "../RequestApi/RequestApi";
import { PropsJobs } from "../RequestApi/RequestApi";

type PropsContext = {
  handleCheckboxChange: (Event: React.ChangeEvent<HTMLInputElement>) => void;
  filterJobs: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  inputByLocation: React.LegacyRef<HTMLInputElement>;
  inputByTitlle: React.LegacyRef<HTMLInputElement>;
  positionn: PropsJobs[];
  locationn: PropsJobs[];
  fullTime: PropsJobs[];
  checkLength: boolean | null;
  erroLocation: boolean;
  erroPosition: boolean;
  checkTime: boolean;
};

const ContextFill = createContext<PropsContext | null>(null);

export const AuthFilterJobs = () => {
  const context = useContext<PropsContext | null>(ContextFill);
  if (context === null) throw new TypeError("Erro no provider");

  return context;
};

const UseContextJobs = ({ children }: React.PropsWithChildren) => {
  const inputByLocation = useRef<HTMLInputElement | null>(null);
  const inputByTitlle = useRef<HTMLInputElement | null>(null);
  const [locationn, setLocationn] = useState<PropsJobs[]>([]);
  const [fullTime, setFullTime] = useState<PropsJobs[]>([]);
  const [positionn, setPositionn] = useState<PropsJobs[]>([]);
  const [erroLocation, setErroLocation] = useState(false);
  const [erroPosition, setErroPosition] = useState(false);
  const [checkTime, setCheckTime] = useState(false);
  const [checkLength, setCheckLength] = useState<boolean | null>(null);
  const { data } = useFetchJobs();
  if (!data) return null;

  // Filtrar jobs...
  function filterJobs(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const valueTitlle = inputByTitlle?.current?.value;
    const valueLocation = inputByLocation?.current?.value;

    let titlee;
    let location;

    if (valueTitlle) {
      titlee = data?.filter(({ position }) => {
        const item = position
          .toLowerCase()
          .includes(valueTitlle?.toLowerCase());

        return item;
      });
    }

    if (valueLocation) {
      location = data?.filter(({ location }) => {
        const item = location
          .toLowerCase()
          .includes(valueLocation?.toLowerCase());

        return item;
      });
    }

    checKJobsLocation(valueLocation, location);
    checKJobsPosition(valueTitlle, titlee);

    setPositionn(titlee ?? []);
    setLocationn(location ?? []);
    setCheckLength(valueLocation?.length === 0 && valueTitlle?.length === 0);
  }

  // Verificar se exite jobs por Localização...
  function checKJobsLocation(
    jobsLocation: string | undefined,
    arrayLocation: PropsJobs[] | undefined
  ) {
    const index = arrayLocation?.findIndex(({ location }) => {
      return location.toLowerCase() === jobsLocation?.toLowerCase();
    });

    return index === -1 ? setErroLocation(true) : setErroLocation(false);
  }

  // Verificar se exite jobs por Posição...
  function checKJobsPosition(
    jobsPosition: string | undefined,
    arrayPosition: PropsJobs[] | undefined
  ) {
    const index = arrayPosition?.findIndex(({ position }) => {
      return position.toLowerCase() === jobsPosition?.toLowerCase();
    });

    return index === -1 ? setErroPosition(true) : setErroPosition(false);
  }

  // Filtrar Jobs por modalidade Full-time...
  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCheckTime(event.target.checked);

    let full;

    if (event.target.checked) {
      full = data?.filter((i) => i.contract === "Full Time");
      setFullTime(full || []);
    }

    if (!event.target.checked) {
      full = data?.filter((i) => i.id > 0);
      setFullTime(full || []);
    }
  }

  return (
    <ContextFill.Provider
      value={{
        handleCheckboxChange,
        filterJobs,
        fullTime,
        inputByTitlle,
        inputByLocation,
        locationn,
        positionn,
        checkLength,
        erroPosition,
        erroLocation,
        checkTime,
      }}
    >
      {children}
    </ContextFill.Provider>
  );
};

export default UseContextJobs;
