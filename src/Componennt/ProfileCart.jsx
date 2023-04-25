import './ProfileCart.css'
export default function Profile (props){
    return(
        <>
        <div className="cart">
          <img src={props.image} alt="" />
          <h3>{props.designation} </h3>
          <h2>{props.name}</h2>
          <p>{props.description} </p>
          <button onClick={props.fun} >see more</button>
        </div>
        </>
    )
}