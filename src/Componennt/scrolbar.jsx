import * as React from 'react';
import "./scrolbar.css"

export default function Scrolbar() {

  const users = [
    {
      "id": 1,
      "url": "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fpritesh.3b7c44ee9f2c717c5301037740bb6eb6.jpeg&w=1920&q=75",
      "name": "Pritesh Kumar , IIT Delhi",
      "company": "CTO @ FunctionUp",
      "experience": "9 Yrs Exp.",
    },
    {
      "id": 2,
      "url": "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanubhav.6a3b4e1b4097967be9b5418ab786f1ce.jpeg&w=1920&q=75",
      "name": "Anubhav Singh , IIT Kanpur",
      "company": "Co-founder @ Dubdub.ai",
      "experience": "7 Yrs Exp.",
    },
    {
      "id": 3,
      "url": "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906235709x512347696206974850%2FMentor-4.jpeg&w=1920&q=75",
      "name": "Aviral Sharma , IIT Delhi",
      "company": "Data Scientist Manager @ Optum",
      "experience": "7 Yrs Exp.",
    },
    {
      "id": 4,
      "url": "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906303309x809592985984049700%2F1517597437249.jpeg&w=1920&q=75",
      "name": "Rahul Garg , IIT Kanpur",
      "company": "Co-founder @ Dubdub.ai",
      "experience": "7 Yrs Exp.",
    },
    {
      "id": 5,
      "url": "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906339831x204777177063368830%2F1669699961094.jpeg&w=1920&q=75",
      "name": "Uddhav Bamba , IIT Dhanbad",
      "company": "Applied Scientist @ Amazon",
      "experience": "3 Yrs Exp.",
    },
    {
      "id": 6,
      "url": "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanchal.b2ab3290c2c9167be3c3ca3a0487eff9.jpeg&w=1920&q=75",
      "name": "Anchal Jaiswal,IIT Kanpur",
      "company": "Senior Data Scientist @ Tredence",
      "experience": "7 year Exp",
    },
    {
      "id": 7,
      "url": "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanchal.b2ab3290c2c9167be3c3ca3a0487eff9.jpeg&w=1920&q=75",
      "name": "Rahul Sankhwar,IIT Kanpur",
      "company": "Senior Data Scientist @ Sharechat",
      "experience": "6 year Exp",
    },
   
    
  ]
  return (
    <div className="Carousol">
      <div className="wrapper">
   {
     users.map((elem) => {
       return (
       <div className="cards" key={elem.id}>
        <img src={elem.url} alt="avatar" height="120px"  className="imageset" width="120px" /> 
        <h1 className="heading">{elem.name}</h1>
        <h1 className="heading-2">{elem.company}</h1>
        <h1 className="heading-3">{elem.experience}</h1>
         </div>
       )
     })
   }
   </div>
    </div>
  );
}