import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header/Header";
import StorageJobs from "./Context/ContextThemeColor";
import Router from "./Router/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <StorageJobs>
        <GlobalStyle />
        <Header />
        <RouterProvider router={Router} />
      </StorageJobs>
    </>
  );
}

export default App;
