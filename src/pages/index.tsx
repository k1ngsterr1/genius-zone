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
import { CreateNewCourse } from "./CreateNewCourse/ui";
import { UserEditPage } from "./UserEdit/ui";
import { CourseSyllabus } from "./CourseSyllabus/ui";
import { CourseEditorPage } from "./CourseEditor/ui";
import { UserCoursesPage } from "./UserCourses/ui";
import { LessonSettings } from "./LessonSettings/ui";
import { ChatsPage } from "./Chats/ui";
import { ConversationPage } from "./ConversationPage/ui";
import { EditUserProfilePage } from "./EditUserProfile/ui";

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
          path={ROUTE_CONSTANTS.USER_COURSES}
          element={<UserCoursesPage />}
        />
        <Route
          path={ROUTE_CONSTANTS.CREATE_COURSE}
          element={<CreateNewCourse />}
        />
        <Route
          path={ROUTE_CONSTANTS.COURSE_SYLLABUS}
          element={<CourseSyllabus />}
        />
        <Route
          path={ROUTE_CONSTANTS.CHAT_CONVERSATION}
          element={<ConversationPage />}
        />
        <Route
          path={ROUTE_CONSTANTS.USER_EDIT}
          element={<EditUserProfilePage />}
        />
        <Route path={ROUTE_CONSTANTS.CHATS} element={<ChatsPage />} />
        <Route
          path={ROUTE_CONSTANTS.CREATE_COURSE_EDIT}
          element={<CourseEditorPage />}
        />
        <Route path={ROUTE_CONSTANTS.USER} element={<UserPage />} />
        <Route path={ROUTE_CONSTANTS.USER_EDIT} element={<UserEditPage />} />
        <Route
          path={ROUTE_CONSTANTS.LESSON_SETTINGS}
          element={<LessonSettings />}
        />
      </Routes>
    </Router>
  );
};
