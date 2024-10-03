import React from 'react';
import { getPosts } from '../../services/postsApi.js';
import Link from "next/link";


const Posts = async () => {
    
    const postsData = await getPosts();
    // console.log(postsData);


    return (
      <div className="grid grid-cols-2 gap-4">
        {postsData?.slice(0, 20)?.map(({ title, body, id }) => (
          <div className="border-2 px-8 m-4 border-red-500 rounded-lg" key={id}>
            <h2 className="text-2xl font-bold">{title.toUpperCase()}</h2>
            <p>{body}</p>

            <button className="text-xl bg-yellow-500 rounded-lg px-4 py-3 my-4">
              <Link href={`/posts/${id}`}>View Details</Link>
            </button>
          </div>
        ))}
      </div>
    );
};

export default Posts;


