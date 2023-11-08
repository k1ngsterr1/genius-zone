import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../shared/config/routes";

export const MyRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME}></Route>
        <Route path={ROUTE_CONSTANTS.REGISTRATION}></Route>
        <Route path={ROUTE_CONSTANTS.LOGIN}></Route>
      </Routes>
    </Router>
  );
};
