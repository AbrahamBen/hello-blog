import { useState } from "react";
import BlogList from "./BlogList";
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
          <BlogList blogs={blogs} title ={'Liste des blogs'}/>
        </div>
     );
}
 
export default Home;