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
              // Update the access token in cookies
              Cookies.set("accessToken", res.data.access, { expires: 7 }); // Set cookie to expire in 7 days or your preferred duration

              // Update the authorization header
              axiosInstance.defaults.headers.common["Authorization"] =
                "Bearer " + res.data.access;

              // Update the authorization header for the original request
              originalRequest.headers["Authorization"] =
                "Bearer " + res.data.access;

              // Retry the original request with the new access token
              return axiosInstance(originalRequest);
            }
          })
          .catch((refreshError) => {
            // Handle failed refresh here (e.g., redirect to login or clear cookies)
            console.error("Unable to refresh token:", refreshError);
            // Potentially redirect to login or clear cookies
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            // Add any additional cleanup or redirects here
            return Promise.reject(refreshError);
          });
      } else {
        // No refresh token available; you might want to redirect to login
        console.error("No refresh token available");
        // Potentially redirect to login or clear cookies
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        // Add any additional cleanup or redirects here
        return Promise.reject(error);
      }
    }

    // If the error is not due to a 401 Unauthorized response, just reject the promise
    return Promise.reject(error);
  }
);

export default axiosInstance;
