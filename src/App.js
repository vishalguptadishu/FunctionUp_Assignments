import { useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [image , setImage] = useState('')

  useEffect(()=>{
      axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      setImage(response.data.message)
    })
    .catch(function (error) {
      console.log(error);
    })
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