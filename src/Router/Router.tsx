import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import JobsInfo from "../pages/JobsInfo/JobsInfo";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "jobs/:position",
    element: <JobsInfo />,
  },
]);

export default Router;
