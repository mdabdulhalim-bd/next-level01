export const getUsers = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    return data;
}