import { useDispatch } from "react-redux";
import { logOut } from "../redux/store/authSlice";
import { useNavigate } from "react-router-dom";

function useLogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    console.log("zhopa");
    dispatch(logOut());
    navigate("/login");
  };

  return handleLogOut;
}

export default useLogOut;
