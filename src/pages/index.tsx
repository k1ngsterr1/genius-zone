import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { HomePage } from "./Home/ui";
import { RegistrationPage } from "./Registration/ui";
import { LoginPage } from "./Login";
import { VerificationPage } from "./Verification/ui";
import { ChangePasswordPage } from "./ChangePassword";
import { UserPage } from "./User/ui";
import { CoursePage } from "./Course/ui";
import { CreateCoursePage } from "./CreateCourse/ui";
import { CreateNewCourse } from "./CreateNewCourse/ui";
import { NewCourseEdit } from "./NewCourseEdit/ui";

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
        <Route path={ROUTE_CONSTANTS.COURSE} element={<CoursePage />} />
        <Route
          path={ROUTE_CONSTANTS.COURSE_EDIT}
          element={<CreateCoursePage />}
        />
        <Route
          path={ROUTE_CONSTANTS.CREATE_COURSE}
          element={<CreateNewCourse />}
        />
        <Route
          path={ROUTE_CONSTANTS.CREATE_COURSE_EDIT}
          element={<NewCourseEdit />}
        />
        <Route path={ROUTE_CONSTANTS.USER} element={<UserPage />} />
      </Routes>
    </Router>
  );
};
