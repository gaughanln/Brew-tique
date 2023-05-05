import React from 'react';
// import Header from './Header' 
import homePhoto from '../assets/homePhoto.png'

// TODO 
// Create onclicks
// pathing
// CSS
// link image

function Home() {
  return (
<>
< Header />
 
 <h1> Brewtique</h1>
 <p> At Brewtique, we specialize in finding and curating the best niche coffee from around the world, so you can experience something new and exciting each month </p>


 <button type= "button" onClick={() => {}}> Shop </button>
 <button type= "button" onClick={() => {}}> Learn more </button>

 <img src = {homePhoto} alt = "Cup of coffee" />

</>
  );
}


export default Home;
