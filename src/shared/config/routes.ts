export const ROUTE_CONSTANTS = {
  HOME: "/",
  // Auth
  CHANGE_PASSWORD: "/change-password",
  REGISTRATION: "/registration",
  LOGIN: "/login",
  VERIFICATION: "/verification",
  // ! USER: "/:userID/user",
  // Users
  USER: "/user",
  USER_EDIT: "/user/:userID/edit",
  USER_COURSES: "/user/courses",
  // Courses
  COURSE: "/courses",
  CREATE_COURSE: "/create-course/new",
  COURSE_SYLLABUS: "/create-course/:courseID/syllabus",
  CREATE_COURSE_EDIT: "/create-course/:courseID/edit",
  // Chats
  CHATS: "/chats",
  // Lessons
  LESSON_SETTINGS:
    "/lesson-settings/:courseID/module/:moduleNumber/lesson/:lessonNumber/step/:stepNumber",
};
