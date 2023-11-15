import { useSelector } from "react-redux";
import illustration from "@assets/secure.svg";

export const VerificationScreen = () => {
  const email = useSelector((state: any) => state.yourReducer.email);

  return (
    <div className="wrapper">
      <img src={illustration} alt="illustration" className="w-1/4 h-auto" />
      <h1 className="main-heading mt-8">На вашу почту {email} </h1>
    </div>
  );
};
