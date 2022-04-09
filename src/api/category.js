import { instance } from "./instance"

export const list = () =>{
    const url = "/category";
    return instance.get(url)
}
export const remove = (id) =>{
    const url = "/category/"+id;
    return instance.delete(url)
}