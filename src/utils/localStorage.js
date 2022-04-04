export const isAuth = () =>{
    if(!localStorage.getItem('user'))
        return [];
    return JSON.parse(localStorage.getItem('user'));
}