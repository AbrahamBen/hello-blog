const Home = () => {
    const handlerClikc =()=>{
        console.log('you are clicked me');
    };

    const handlerClikcAgain =(name, event)=>{
        console.log(`Hello, ${name}`,event.target);
    };
    return ( 
        <div className="home">
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