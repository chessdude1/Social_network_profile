import axios from "axios";



const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/', 
    withCredentials : true,
    headers : {
        'API-KEY' : 'b6a90e3d-08cf-4247-9fbb-5fbf9d42b55d'
    }

});


export const ProfileAPI = {
    CurrentProfile (CurrentUserID) {
        return instance.get(`profile/` + CurrentUserID).then(response => {
           return( response.data)
        })
    }
}
