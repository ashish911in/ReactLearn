const blogs = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blogList">
            {`${blogs.title} \n ${title} written by ${blogs.author}`} <br />
            <button>delete this</button>
        </div>
    );
};
 
export default blogs;