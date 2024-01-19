import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://genzone.up.railway.app/api",
});

const refreshToken = Cookies.get("refreshToken");

const refreshJSON = {
  refresh: refreshToken,
};

axiosInstance.interceptors.response.use(
  (resonse) => {
    return resonse;
  },
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return axiosInstance
        .post("/account/refresh/", refreshJSON)
        .then((res) => {
          if (res.status === 200) {
            Cookies.set("accessToken", res.data.access);
            console.log(refreshJSON);
            console.log(res.data.access);
            axiosInstance.defaults.headers.common["Authorization"] =
              "Bearer " + res.data.access;
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
