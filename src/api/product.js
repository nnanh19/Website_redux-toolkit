import { instance } from "./instance";

export const list = () =>{
    const url = "/product";
    return instance.get(url);
}