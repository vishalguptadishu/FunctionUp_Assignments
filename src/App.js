import { useState , useEffect} from 'react';
import './App.css';

function App() {

  const [image , setImage] = useState('')

  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data)=> data.json())
    .then ((response)=> setImage(response.message))
    .catch((errr) => console.log(errr))  
  },[])

  return (
    <div className="App">
      <img 
        src={image}
        height={'400px'}
        width={'400px'}
        alt='dog image'
      />
    </div>
  );
}

export default App;