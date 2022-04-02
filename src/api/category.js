import { instance } from "./instance"

export const list = () =>{
    const url = "/category";
    return instance.get(url)
}