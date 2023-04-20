import { Fragment } from "react"

export default function Invitation ({data}){

    let {Subject,To,name,events,some_names,addres,from}=data;

    return (
     <Fragment>
        <p>Subject : {Subject}</p>
        <p> To : {To}</p>
        <p>Hi , {name} </p>
        <p>I am having a {events}  next Friday at my Home . Would you like to come ? It will be fun . 
        Lots of people from my school are coming . you know some of them - {some_names}  .
        My house is behind our school , near {addres}  .</p>
        <p> I hope you will come and see you soon .</p>
        <p>from ,</p>
        <p>{from} </p>
     </Fragment>
    )
}