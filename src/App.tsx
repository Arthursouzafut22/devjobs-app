import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import StorageJobs from "./Context/ContextThemeColor";

function App() {
  return (
    <>
      <StorageJobs>
        <GlobalStyle />
        <Header />
        <Main />
      </StorageJobs>
    </>
  );
}

export default App;
