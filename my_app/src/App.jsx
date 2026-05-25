// import ProfileCard from './components/ProfileCard.jsx'
//import MovieCard from './components/MovieCard.jsx'
import { useState } from 'react';
function App() {
  const[count, setCount] = useState(0);
  return(
    <>
      {/* <ProfileCard/> */}
      {/* <MovieCard
        title="Inception"
        genre="Sci-Fi"
        rating="8.8"
        duration={148}
        img="https://m.media-amazon.com/images/I/51s+qH+9nL._AC_SY679_.jpg"
        language="English"
      /> */}


      <h1>Counter: {count}</h1>
      <button  onClick={()=> setCount(count + 1)}>+</button>
      
      <button onClick={()=> setCount(count - 1)}>-</button>
      <button onClick={()=> setCount(0)}>reset</button>



    </>
  )
}

export default App
