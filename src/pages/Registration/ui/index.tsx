import store from "@shared/lib/redux/store";
import SignUpForm from "@widgets/form/ui";
import { Provider } from "react-redux";

export const RegistrationPage = () => {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    </div>
  );
};
