import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveEmail } from "@shared/lib/redux/store/emailSlice";

import axios from "axios";

export interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function useSignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const watchedPassword = watch("password");

  // ! Axios Fetch Submit

  // const onSubmit = async (data: FormData) => {
  //   try {
  //     const response = await axios.post(
  //       "https://probable-sole-crucial.ngrok-free.app/api/account/register/",
  //       data
  //     );

  //     console.log("Registration successful:", response.data);
  //     dispatch(saveEmail(data.email));

  //     navigate("/verification");
  //   } catch (error: any) {
  //     if (error.response) {
  //       console.error(
  //         "Registration failed with status:",
  //         error.response.status
  //       );
  //       console.error("Failed response data", error.response.data);
  //     } else if (error.request) {
  //       console.error("No response received:", error.request);
  //     } else {
  //       console.error("Error during setup:", error.message);
  //     }
  //   }
  // };

  // ! JavaScript Fetch Submit

  // const onSubmit = async (data: FormData) => {
  //   try {
  //     const response = await fetch(
  //       "https://probable-sole-crucial.ngrok-free.app/api/account/register/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log(result);
  //     navigate('/verification')
  //     // Handle the success case - perhaps navigate to a thank you page or clear the form
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //     // Handle the error case - show user feedback, log the error, etc.
  //   }
  // };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    onSubmit,
    watchedPassword,
  };
}
