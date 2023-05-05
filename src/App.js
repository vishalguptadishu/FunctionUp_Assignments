import './App.css';
import axios from 'axios';
import {React, useState} from 'react';

  function App(){

  const [mobile, setMobile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

function GetOtp (){

    if(!NumValidation(mobile)) {
      setErrorMessage("Enter a 10-digit number...")
      return;
    }

  const body = JSON.stringify({mobile});
  axios
    .post("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
     body, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
          // console.log(response)
          if (response.status==200) {
            setMobile('');
            setErrorMessage("OTP Sended")
          }
        })
        .catch(error => {
          setErrorMessage("Some Error");
        });
    }
  
  const NumValidation = (mobile) => {
    if(mobile.length==10){
      return true
    }
  };

  return (
    <div className='App'>
      <h1> Generate Otp 👍</h1>
      <input type="number" value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Enter your mobile number" />
      <button onClick={GetOtp}>GET OTP</button>
      <p className="error">{errorMessage}</p>
    </div>
  );
};

export default App;

