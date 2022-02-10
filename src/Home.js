import { useState } from "react";
import { blogs as BlogList } from "./blogs"; // Issue is here

const Home = () => {
    let arrBlogs = [
        {title:'Hi', body:'Lorem ipsum dolor sit amet', author:'some', id: 1},
        {title:'Yes', body:'Lorem ipsmet', author:'any', id: 2}
    ];
    
    const [blogs, setBlogs] = useState(arrBlogs);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id );
        setBlogs(newBlogs);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            ))}
        </div>
     );
}
 
export default Home;