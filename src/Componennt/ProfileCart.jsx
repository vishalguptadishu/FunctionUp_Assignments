import './ProfileCart.css'
export default function Product_card ({obj}){
 




    return(
        <>
        <div key={obj.productId} className="cart">  
        <img src={obj.productPic} alt="" />
          <h2>{obj.productName} </h2>
          <h2>{obj.Brand}</h2>
          <p>{obj.productDescription} </p>
          <h1>{obj.Price}</h1>
          <button>ADD TO CART</button>
        </div>
        </>
    )
}