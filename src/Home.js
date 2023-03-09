import { useState } from "react";
const Home = () => {

    const [blogs, setBlog]=useState([
        {
            id:1,
            title:'Bienvenue à mon blog',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas asperiores architecto eligendi.',
            author:'Ben Abraham',
            date:'09-03-2023'
        },

        {
            id:2,
            title:'La nuit des codeurs',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas asperiores architecto eligendi.',
            author:'Dahlia Honorine',
            date:'02-02-2023'
        },

        {
            id:3,
            title:'ChatGPT le truc du mement',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas asperiores architecto eligendi.',
            author:'Dahlia Honorine',
            date:'02-12-2022'
        },
        {
            id:4,
            title:'Le réseau 5G au coeur des débats entre la Chine et USA',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas asperiores architecto eligendi.',
            author:'Blaise Pascal',
            date:'22-12-2023'
        },
    ]);
    return ( 
        <div className="home">
           <div className="bloglist">
                {
                    blogs.map((blog)=>(
                        <div className="blog" key={blog.id}>
                        <a href="" className="blog-titre">{blog.title}</a>
                        <small className="blog-publication-date">Publié le : {blog.date}</small>
                        <p className="blog-author">Publié par : {blog.author}</p>
                    </div>
                    ))
                }
           </div>
        </div>
     );
}
 
export default Home;