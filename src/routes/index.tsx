import { useRoutes } from "react-router-dom";
import Login from "../pages/login";

function AppRoutes() {
  const element = useRoutes([{ path: "/login", element: <Login /> }]);
  return <>{ element }</>
}

export default AppRoutes;
