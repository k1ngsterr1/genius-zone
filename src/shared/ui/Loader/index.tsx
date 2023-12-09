import { Oval } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="loader">
      <Oval
        color="#0B1887"
        secondaryColor="#CFD4FB"
        width="clamp(50px,5.208vw,200px)"
        height="clamp(50px,5.208vw,200px)"
      />
    </div>
  );
};
