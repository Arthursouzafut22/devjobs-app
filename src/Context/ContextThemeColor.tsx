import {
  ChangeEventHandler,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextProps = {
  checkDark: boolean | null;
  onChangeTeme: ChangeEventHandler<HTMLInputElement>;
};

const ContextJobs = createContext<ContextProps | null>(null);

export const AuthJobs = () => {
  const context = useContext(ContextJobs);
  if (!context) throw new Error("Erro no provider.");

  return context;
};

const StorageJobs = ({ children }: React.PropsWithChildren) => {
  const [checkDark, setCheckDark] = useState(false);

  const onChangeTeme: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setCheckDark(target.checked);
    localStorage.setItem("theme", JSON.stringify(target.checked));
  };

  // Salvar Tema no localStorage...
  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    setCheckDark(JSON.parse(getTheme ?? "false"));
  }, []);

  // Mudar color do body...
  useEffect(() => {
    const bodyBackground = window.document.body;

    if (checkDark) {
      bodyBackground.style.background = "#121721";
    } else if (!checkDark) {
      bodyBackground.style.background = "#F2F2F2";
    }

    return () => {
      bodyBackground.style.background = "";
    };
  }, [checkDark]);

  return (
    <ContextJobs.Provider value={{ checkDark, onChangeTeme }}>
      {children}
    </ContextJobs.Provider>
  );
};

export default StorageJobs;
