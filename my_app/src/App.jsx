// import ProfileCard from './components/ProfileCard.jsx'
//import MovieCard from './components/MovieCard.jsx'
import StudentCard from './components/StudentCard.jsx'
// import { useState } from 'react';
function App() {
  // const[count, setCount] = useState(0);
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

{/* 
      <h1>Counter: {count}</h1>
      <button  onClick={()=> setCount(count + 1)}>+</button>
      
      <button onClick={()=> setCount(count - 1)}>-</button>
      <button onClick={()=> setCount(0)}>reset</button> */}


      <StudentCard name="Ayesha" age={20} city="Pune"/><br/>
      <StudentCard name="Ravi" age={21} city="Mumbai"/><br/>
      <StudentCard name="Priya" age={19} city="Nagpur"/><br/>

    </>
  )
}

export default App
