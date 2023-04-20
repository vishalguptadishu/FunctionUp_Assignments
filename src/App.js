
import './App.css';
import Logo from "./Components/ReactLogo"
import Button from "./Components/Button"
import ReactBenifits from "./Components/ReactBenifits"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ReactBenifits />  
        <Button />
      </header>
    </div>
  );
}

export default App;
