import { Header } from "./Components/Header";
import { Post } from "./Post";
import './style.css';


export function App() {
 

  return (
    <>
    <Header/>
    
     <Post author="Bikel"
           content="paoapoamsaoede"
     />

     <Post author="Zé da manga"
           content="Ainn zé da manga !!"
     />
   
    </>
  )
}


