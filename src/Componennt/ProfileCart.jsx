import './ProfileCart.css'
export default function Product_card ({proDetail}){
  console.log(proDetail)
  let {productPic,productName,Brand,productDescription,Price }=proDetail;
  function itemInfo (){
    alert(productName + productDescription)
  }
    return(
        <>
        <div className="cart">
          <img src={productPic} alt="" />
          <h2>{productName} </h2>
          <h2>{Brand}</h2>
          <p>{productDescription} </p>
          <h1>{Price}</h1>
          <button onClick={itemInfo}  >ADD TO CART</button>
        </div>
        </>
    )
}