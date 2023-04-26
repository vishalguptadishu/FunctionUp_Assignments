import './App.css';
import Product_card from './Componennt/ProfileCart'
function App() {


 let arrayOfobj =[ {
    productId : 1,
    productPic : "https://m.media-amazon.com/images/I/61QeNWSSHaL._UL1001_.jpg",
    productName : " WATCH ",
    Brand : "FASTRACK",
    productDescription : "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
    Price : "$60",
    
 }
  ,{
  productId : 2,
  productPic : " https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51QlJex2d+L.jpg",
  productName : " SHOES ",
  Brand : "REEBOK",
  productDescription : "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
  Price : "$55",
  
}

, {
  productId : 3,
  productPic : " https://imagescdn.thecollective.in/img/app/product/6/690755-7349684.jpg?",
  productName : " T SHIRT",
  Brand : "POLO",
  productDescription : "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
  Price : "$40",
  
}

,{
  productId : 4,
  productPic : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qugWXMhA0jKy-Z1ID2hVGVZ80DAxDh_nVg&usqp=CAU",
  productName : "SUNGLASSES ",
  Brand : "APOLO R",
  productDescription : "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
  Price : "$63",
  
}

, {
  productId : 5,
  productPic : " https://m.media-amazon.com/images/I/71KQOSp+5IL._UX466_.jpg",
  productName : "JEANS",
  Brand : "URBANO",
  productDescription : "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
  Price : "$70",
  
}
]
 

  return (
    <div className="App">
{
      arrayOfobj.map((elem,i) => 
      <Product_card obj={elem}  />
    )};
</div>
  );
}
export default App;
