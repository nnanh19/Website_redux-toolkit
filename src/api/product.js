import { instance } from "./instance";

export const list = () =>{
    const url = "/product";
    return instance.get(url);
}
export const add = product =>{
    const url = "/product/create";
    return instance.post(url,product);
}
export const remove = id =>{
    const url = `/product/${id}`;
    return instance.delete(url)
}
export const read = (id) => {
    const url = `product/${id}`;
    return instance.get(url);
}