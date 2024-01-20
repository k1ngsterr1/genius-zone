import axiosInstance from "../middleware";

export interface UpdatedUserData {
  first_name: string;
  last_name: string;
  username: string;
  photo?: any;
  city?: string;
  position?: string;
}

export function useUpdateUser() {
  const updateUserData = async (
    data: UpdatedUserData,
    image: File | null,
    userID: any
  ) => {
    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);

      if (image) {
        formData.append("photo", image, image.name);
      }

      console.log(JSON.stringify(formData));

      const response = await axiosInstance.put(`/account/${userID}/`, formData);
      console.log("User Data Updated Successfully:", response.data, userID);
    } catch (error: any) {
      console.error("There is an error with user data updating:", error);
    }
  };

  return { updateUserData };
}
