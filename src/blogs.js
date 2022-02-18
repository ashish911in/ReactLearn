const blogs = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blogList">
            {title} <br />
            {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
                <h2>{ blog.title }</h2>
                <h3> {`${blog.title}`} </h3>
                <p>Written by { blog.author }</p>
                <button onClick={() => handleDelete(blog.id)}>delete blog</button>
            </div>
        ))}
        </div>
    );
};
 
export default blogs;