import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../shared/config/routes";
import { HomePage } from "./Home/ui";
import { RegistrationPage } from "./Registration/ui";
import { LoginPage } from "./Login";

export const MyRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route
          path={ROUTE_CONSTANTS.REGISTRATION}
          element={<RegistrationPage />}
        />
        <Route path={ROUTE_CONSTANTS.LOGIN} element={<LoginPage />} />
      </Routes>
    </Router>
  );
};
