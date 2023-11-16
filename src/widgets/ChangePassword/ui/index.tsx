import { ChangePasswordForm } from "@widgets/form/ui/changePasswordForm";
import React from "react";

export const ChangePasswordScreen = () => {
  return (
    <div className="wrapper">
      <h1 className="main-heading">Смените свой пароль</h1>
      <ChangePasswordForm />
    </div>
  );
};
