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
  const updateUserData = async (data: any, userID: any) => {
    try {
      console.log(JSON.stringify(data));

      const response = await axiosInstance.put(`/account/${userID}/`, data);
      console.log("User Data Updated Successfully:", response.data, userID);
    } catch (error: any) {
      console.error("There is an error with user data updating:", error);
    }
  };

  return { updateUserData };
}
