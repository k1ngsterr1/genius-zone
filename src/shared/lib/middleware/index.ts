import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://genzone.up.railway.app/api",
});

const refreshToken = Cookies.get("refreshToken");

axiosInstance.interceptors.response.use(
  (resonse) => {
    return resonse;
  },
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return axios
        .post("/account/refresh/", {
          headers: {
            Refresh: `Bearer ${refreshToken}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            Cookies.set("accessToken", res.data.accessToken);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + res.data.accessToken;
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
