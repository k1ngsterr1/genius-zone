import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/store/menuSlice";

export const useOpenMenu = (isOpen: boolean) => {
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return openMenu;
};
