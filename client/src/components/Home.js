import React from 'react';
// import Header from './Header' 
import homeImage from './'

function Home() {
  return (
<>
{/* < Header /> */}
 <img src = {homeImage} alt = "Cup of coffee" />
 <h1> Brewtique</h1>
 <p> At Brewtique, we specialize in finding and curating the best niche coffee from around the world, so you can experience something new and exciting each month </p>

 <button type= "button" onClick={() => {}}> Shop </button>
 <button type= "button" onClick={() => {}}> Learn more </button>

</>
  );
}


export default Home;
