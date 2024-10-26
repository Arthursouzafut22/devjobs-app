import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header/Header";
import StorageJobs from "./Context/ContextThemeColor";
import UseContextJobs from "./Context/ContextFilterJobs";
import Router from "./Router/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <UseContextJobs>
        <StorageJobs>
          <GlobalStyle />
          <Header />
          <RouterProvider router={Router} />
        </StorageJobs>
      </UseContextJobs>
    </>
  );
}

export default App;
