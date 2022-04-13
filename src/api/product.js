import { isAuth } from "../utils/localStorage";
import { instance } from "./instance";


const {token , user} = isAuth();


export const list = (q_limit) =>{
    if(q_limit){
        const url = `/product?limit=${q_limit}`;
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