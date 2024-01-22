import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://genzone.up.railway.app/api",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    // Check if we're dealing with a token expiration error
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get("refreshToken"); // Get the refresh token from the cookie

      // Make sure refreshToken exists before attempting to refresh
      if (refreshToken) {
        return axiosInstance
          .post("/account/refresh/", { refresh: refreshToken })
          .then((res) => {
            if (res.status === 200) {
              Cookies.set("accessToken", res.data.access, { expires: 7 }); // Set cookie to expire in 7 days or your preferred duration
              console.log("refresh:", refreshToken);

              axiosInstance.defaults.headers.common["Authorization"] =
                "Bearer " + res.data.access;

              originalRequest.headers["Authorization"] =
                "Bearer " + res.data.access;

              return axiosInstance(originalRequest);
            }
          })
          .catch((refreshError) => {
            console.error("Unable to refresh token:", refreshError);
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            return Promise.reject(refreshError);
          });
      } else {
        console.error("No refresh token available");
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
