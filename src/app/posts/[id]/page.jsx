import React from 'react';


const getDetailsPost = async(id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}



const PostDetailsPage = async ({params}) => {
    console.log(params.id);

    // const postDetails = await getDetailsPost(params.id);
    const {title, body} = await getDetailsPost(params.id);
    // console.log(postDetails);
    

    
    return (
        <div>
            <h2 className="text-3xl font-bold">Title: {title}</h2>
            <h2>Description: {body}</h2>
        </div>
    );
};

export default PostDetailsPage;