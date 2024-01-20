import axiosInstance from "../middleware";

export interface UpdatedUserData {
  first_name: string;
  last_name: string;
  username: string;
  photo?: string;
  city?: string;
  position?: string;
}

export function useUpdateUser() {
  const updateUserData = async (userID: any, data: any) => {
    try {
      const response = await axiosInstance.put(`/account/${userID}/`, data);
      console.log("User Data Updated Successfully:", response.data);
    } catch (error: any) {
      console.error("There is an error with user data updating:", error);
    }
  };

  return { updateUserData };
}
