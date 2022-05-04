import axios from "axios";

import { useMutation } from "react-query";

export function useLogin() {
    return useMutation((user) => {
        return axios.post("https://reqres.in/api/login", user);
    });
}

export function useRegister() {
    return useMutation((user) => {
        return axios.post("https://reqres.in/api/login", user);
    });
}
