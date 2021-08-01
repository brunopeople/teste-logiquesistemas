import { Http } from "@material-ui/icons";
import HttpService from "./HttpService";

export const RegisterUserService = (credentials) => {
    const http = new HttpService();
    let signupUrl = "users/register";
    return http.postData(credentials, singupUrl).then((data) => {
        console.log(data);
        return data;
    }).catch((error) => {
        return error;
    })
}

export const LoginUserService = (credentials) => {
    const http = new HttpService();
    let loginUrl = "users/login";
    return http.postData(credentials, loginUrl).then((data) => {
        console.log(data);
        return data;
    }).catch((error) => {
        return error;
    })
}

export const LogOutUserService = () =>{
    const http = new HttpService();
    let loginUrl = "users/logout";
    const tokenId = "user-token";
    return http.getData(loginUrl, tokenId).then((data) => {
        console.log(data);
        return data;
    }).catch((error) => {
        return error;
    })
}