import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default Router;
