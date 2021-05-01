import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "b6a90e3d-08cf-4247-9fbb-5fbf9d42b55d",
  },
});

export const ProfileAPI = {
  CurrentProfile(CurrentUserID) {
    return instance.get(`profile/` + CurrentUserID).then((response) => {
      return response.data;
    });
  },
  getUserStatus(userID) {
    return instance.get(`profile/status/` + userID);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhotoAPI(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile)
    return instance.put(`profile/photo/`, formData, {
      headers: {
          'Content-Type' : 'multipart/form-data'
      }
    });
  },
  SaveProfiles(profile) {
    return instance.put(`profile`, profile); 
  }
};

export const ContactsAPI = {
  getUsers(CurrentPage, PageSize) {
    return instance
      .get(`users?page=${CurrentPage}&count=${PageSize}`)
      .then((response) => {
        return response.data.items;
      });
  },
  unfollow(userID) {
    return instance.delete(`follow/${userID}`).then((response) => {
      return response;
    });
  },
  follow(userID) {
    return instance.post(`follow/${userID}`, {}).then((response) => {
      return response;
    });
  },
};

export const AuthAPI = {
  getLoginData() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logOut() {
    return instance.delete(`auth/login`);
  },
};

export const SecurityAPI = {
  getCaptchaUrl() {
    return instance.get(`/security/get-captcha-url`)
  }
}
