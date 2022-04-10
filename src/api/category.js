import { instance } from "./instance"

export const list = () =>{
    const url = "/category";
    return instance.get(url)
}
export const listById = (id) =>{
    const url = "/category/"+id;
    return instance.get(url)
}
export const update = (category) => {
    const url = "/category/"+category._id;
    return instance.put(url,category)
}
export const add = (category) => {
    const url = "/category";
    return instance.post(url,category)
}
export const remove = (id) =>{
    const url = "/category/"+id;
    return instance.delete(url)
}