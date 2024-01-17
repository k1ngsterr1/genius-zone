import axiosInstance from "../middleware";

export function useLoadUserData() {
  const loadUserData = async (userID: string | number) => {
    try {
      const response = await axiosInstance.get(`/account/${userID}/`);
    } catch {}
  };
}
