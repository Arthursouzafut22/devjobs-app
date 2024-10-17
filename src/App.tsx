import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header/Header";
import NavSearch from "./Components/NavSearch/NavSearch";
import Main from "./Components/Main/Main";
import StorageJobs from "./Context/ContextJobs";

function App() {
  return (
    <>
      <StorageJobs>
        <GlobalStyle />
        <Header />
        <NavSearch />
        <Main />
      </StorageJobs>
    </>
  );
}

export default App;
