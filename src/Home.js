import { useState } from "react";
const Home = () => {

    let initialName = 'Ben Abraham';
    let changeName='Dahlia Honorine';
    const actualAge = 29;

    const [name,setName] = useState(initialName);
    const [age,setAge] = useState(actualAge);

    const handlerClikc =()=>{
        setName(changeName);
        setAge(27);
    };

    const handlerClikcAgain =(name, event)=>{
        console.log(`Hello, ${name}`,event.target);
    };
    return ( 
        <div className="home">
            <h2>{name} a {age} ans</h2>
            <h2>Notre page d'accueil</h2>
            <button onClick={handlerClikc}>
                Ckick me
            </button>

            <button onClick={(e)=>handlerClikcAgain('Ben Abrahm',e)}>
                Ckick me agin
            </button>
        </div>
     );
}
 
export default Home;