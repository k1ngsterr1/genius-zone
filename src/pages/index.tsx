import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../shared/config/routes";

// Pages
import { HomePage } from "./Home/ui";
import { RegistrationPage } from "./Registration/ui";
import { LoginPage } from "./Login";
import { VerificationPage } from "./Verification/ui";
import { ChangePasswordPage } from "./ChangePassword";

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
        <Route
          path={ROUTE_CONSTANTS.VERIFICATION}
          element={<VerificationPage />}
        />
        <Route
          path={ROUTE_CONSTANTS.CHANGE_PASSWORD}
          element={<ChangePasswordPage />}
        />
      </Routes>
    </Router>
  );
};
