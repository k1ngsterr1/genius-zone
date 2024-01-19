import axiosInstance from "../middleware";

export interface UpdatedUserData {
  first_name: string;
  last_name: string;
  username: string;
  photo: string;
  city?: string;
  position?: string;
}

export function useUpdateUser() {
  const updateUserData = async (data: UpdatedUserData, userID: string) => {
    try {
      const formData = new FormData();
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.first_name);
      formData.append("username", data.username);
      formData.append("photo", data.photo);

      const response = await axiosInstance.put(`/account/${userID}`);
      console.log("User Data Updated Successfully:", response.data);
    } catch (error: any) {
      console.error("There is an error with user data updating:", error);
    }
  };

  return { updateUserData };
}
