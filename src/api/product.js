import { isAuth } from "../utils/localStorage";
import { instance } from "./instance";


const {token , user} = isAuth();


export const list = (q_page) =>{
    if(q_page){
        const url = `/product?page=${q_page}`;
        return instance.get(url);
    }
    const url = `/product`;
    return instance.get(url);
    
}
export const listSearch = (q_name) =>{
    if(q_name){
        const url = `/product?name=${q_name}`;
        return instance.get(url);
    }
    const url = `/product`;
    return instance.get(url);
    
}
export const listByCategory = (q_category) => {
    if( q_category){
        const url = `/product?category=${q_category}`;
        return instance.get(url);
    }
    const url = `/product`;
    return instance.get(url);
}
export const add = product =>{
    const url = `/product/${user._id}`;
    return instance.post(url, product , {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    });
}
export const update = (product) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product);
}
export const remove = id =>{
    const url = `/product/${id}/${user._id}`;
    return instance.delete(url, {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    })
}
export const read = (id) => {
    const url = `product/${id}`;
    return instance.get(url);
}