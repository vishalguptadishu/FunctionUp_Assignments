import './App.css';
import Invitation from "./component/Invitation"
function App() {

  let obj = {
    Subject : "Birthday party Invitation",
    To : "jaGdish@gmail.com",
    name : "jaGdish", 
    events :"birthday party",
    some_names : [ "Ritu ," , "Saurabh ," , "Kartik ,"],
    addres : "Green field Avenue ",
    from : "JaGdish"
  }

  return (
    <div className="App">
      <Invitation data={obj} />
    </div>
  );
}

export default App;
