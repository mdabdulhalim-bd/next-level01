
export default async function loadData() {

    // let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })

    let response = await fetch('https://api.vercel.app/blog',)
    let posts = await response.json();
    console.log(posts)


    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}