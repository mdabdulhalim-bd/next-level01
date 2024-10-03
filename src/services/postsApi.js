// export const getPosts = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data = await res.json();
//   return data;
// };


const getPosts = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  return data;
}


module.exports = {
  getPosts
}