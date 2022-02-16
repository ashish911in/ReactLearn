import { useState, useEffect } from "react";
import BlogList from "./blogs";

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

    const [name, setName] = useState('Mario');

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('Luigi')}>Change Name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;