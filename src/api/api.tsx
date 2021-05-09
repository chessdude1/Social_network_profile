import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "b6a90e3d-08cf-4247-9fbb-5fbf9d42b55d",
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodesEnumForCaptcha {
    CaptchaIsRequired = 10,
}

export const ProfileAPI = {
  CurrentProfile(CurrentUserID : number) {
    return instance.get(`profile/` + CurrentUserID).then((response) => {
      return response.data;
    });
  },
  getUserStatus(userID : number) {
    return instance.get(`profile/status/` + userID);
  },
  updateStatus(status : string) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhotoAPI(photoFile : any) {
    const formData = new FormData();
    formData.append('image', photoFile)
    return instance.put(`profile/photo/`, formData, {
      headers: {
          'Content-Type' : 'multipart/form-data'
      }
    });
  },
  SaveProfiles(profile : any) {
    return instance.put(`profile`, profile); 
  }
};

export const ContactsAPI = {
  getUsers(CurrentPage : number, PageSize : number) {
    return instance
      .get(`users?page=${CurrentPage}&count=${PageSize}`)
      .then((response) => {
        return response.data.items;
      });
  },
  unfollow(userID : number) {
    return instance.delete(`follow/${userID}`).then((response) => {
      return response;
    });
  },
  follow(userID : number) {
    return instance.post(`follow/${userID}`, {}).then((response) => {
      return response;
    });
  },
};

type getLoginDataType = {
  data : {
    id: number
    email: string
    login: string
  }
  resultCode : ResultCodesEnum | ResultCodesEnumForCaptcha
  messages : Array<string>
}

export const AuthAPI = {
  getLoginData() {
    return instance.get<getLoginDataType>(`auth/me`).then(response => response.data);
  },
  login(email : number, password : string, rememberMe = false, captcha: null | string = null) {
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
