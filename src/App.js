
import './App.css';
import {React , useEffect ,useRef ,useState } from "react"
function App() {

  const imageRef = useRef(null);
  const [imageUrl, setImageUrl] = useState('https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg');
  const [index, setindex] = useState(0);


  let ArrOfImg=[
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Rainforest_Fatu_Hiva.jpg/800px-Rainforest_Fatu_Hiva.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuhVTnx6_5OORqjMqRzZDQwLr-Tx9L9S7pzAZWEjtDWDU4GmqPF5dpic1Yz5R40p6bME&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8b52dhOc-vqe0orvRDPmh8QAUeGyBuK-m26IG19qJePQrsJLmKVIqYDJzR27QyG6XQU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkm9xdF1RQ94iWuOpWqXj_ZOem-G42dR7dUvQQUUrVR7dEVwt5OOhIbmHZqa88yUnQrA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQb8htTkxAQ1axsQJIiCZ8hgnCgwboKJbrQicwfc1vH2VFdkvEai80I4g4uJmLETXOcI&usqp=CAU",
  ]

  useEffect(() => {
    imageRef.current.src = imageUrl;
  }, [imageUrl]);

  const handleButtonClick = () => {
    if(index==4){
      setindex(0)
    }else{
      setindex(index+1)
    }

    setImageUrl(ArrOfImg[index]);
  };

  return (
    <div className="App">
      <img ref={imageRef}  alt="image" />
      <br />
      <button onClick={handleButtonClick}>Change The Image</button>
      </div>
  );
};

export default App;
