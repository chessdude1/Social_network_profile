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
  Error = 1,
}

export enum ResultCodesEnumForCaptcha {
  CaptchaIsRequired = 10,
}

type getLoginDataType = {
  id: number;
  email: string;
  login: string;
};

type GetItemsType = {
  items: {
    name: string;
    id: number;
    photos: {
      small: null | string;
      large: null | string;
    };
    status: null | string;
    followed: boolean;
  };
};

type PhotosType = {
  photos : {
  small : string | null
  large: string | null
  }
}
type ResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};

type UserProfileFullData = {
  data: {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: object;
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
    photos: {
      small: string;
      large: string;
    };
  };
};

type getCaptchaUrlType = {
  url : string
}

export const ProfileAPI = {
  CurrentProfile(CurrentUserID: number) {
    return instance
      .get<UserProfileFullData>(`profile/` + CurrentUserID)
      .then((response) => {
        return response.data;
      });
  },

  getUserStatus(userID: number) {
    return instance.get<UserProfileFullData>(`profile/status/` + userID);
  },

  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },

  savePhotoAPI(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put<ResponseType<PhotosType>>(`profile/photo/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  SaveProfiles(profile: any) {
    return instance.put(`profile`, profile);
  },
};

export const ContactsAPI = {
  getUsers(CurrentPage: number, PageSize: number, term : string = '', friend = null ) {
    return instance
      .get<GetItemsType>(`users?page=${CurrentPage}&count=${PageSize}&term=${term}`+ (friend === null ? '' : `&friend=${friend}`))
      .then((response) => {
        return response.data.items;
      });
  },

  unfollow(userID: number) {
    return instance.delete(`follow/${userID}`).then((response) => {
      return response;
    });
  },

  follow(userID: number) {
    return instance.post(`follow/${userID}`, {}).then((response) => {
      return response;
    });
  },
};

export const AuthAPI = {
  getLoginData() {
    return instance
      .get<ResponseType<getLoginDataType>>(`auth/me`)
      .then((response) => response.data);
  },

  login(
    email: number,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logOut() {
    return instance.delete(`auth/login`);
  },
};

export const SecurityAPI = {
  getCaptchaUrl() {
    return instance.get<getCaptchaUrlType>(`/security/get-captcha-url`);
  },
};
