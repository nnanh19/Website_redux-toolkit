import { instance } from "./instance";

export const list = () =>{
    const url = "/product";
    return instance.get(url);
}
export const add = product =>{
    const url = "/product/create";
    return instance.post(url,product);
}