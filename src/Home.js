import { useState, useEffect } from "react";
import BlogList from "./blogs";

const Home = () => {
    let arrBlogs = [
        {title:'Hi', body:'Lorem ipsum dolor sit amet', author:'some', id: 1},
        {title:'Yes', body:'Lorem ipsmet', author:'any', id: 2}
    ];
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setPending] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id );
        setBlogs(newBlogs);
        console.log('blogs updated');
    }

    const [name, setName] = useState('Mario');

    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
        fetch('http://localhost:8000/blogs')
        .then(res => {
            console.log(res);
            return res.json();
        }).then(data => {
            
            setTimeout(()=>{
                setBlogs(data);
                setPending(false);
            }, 2000);
            
        }).catch(e => {
            console.log(`${e.message}`);
        })
    }, []);

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            { isPending && <div>Loading ... </div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> }
            {/* <button onClick={() => setName('Luigi')}>Change Name</button>
            <p>{ name }</p> */}
        </div>
     );
}

// comment

export default Home;