import './App.css';
import Profile from './Componennt/ProfileCart'
function App() {
  let src1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC01wlvjqPWqF7tbbqPoP4rvAtQHpcnH16LBjOOJGmb1gadEIQqEPREpxoCgp0_gvzjXc&usqp=CAU"
  let description1="lorenm9 kjhga ahgo aohgoaiw suf dpgupg iogw uogosdp upfigp  osup pugporitg peg pw pg ptipotoejg pupowt peg pw"

  let src2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4xts2uEl8ZiNUQ1U72oppJlIc_XydTIKcYmVWYsF8W-MmfbTR79nGRoBQ7o2-2q6Z7U&usqp=CAU"
  let description2="lorenm9 kjhga ahgo aohgoaiw suf dpgupg iogw uogosdp upfigp  osup pugporitg peg pw pg ptipotoejg pupowt peg pw"
  
  let src3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvG0wfr36l2BoSmiaMu1jGw6aCLQRifZb3Bg&usqp=CAU"
  let description3="lorenm9 kjhga ahgo aohgoaiw suf dpgupg iogw uogosdp upfigp  osup pugporitg peg pw pg ptipotoejg pupowt peg pw"
  
  function my1 (){
    alert("Vishal Gupta = " + description1)
  }

  function my2 (){
    alert("Pablo Panday = " + description1)
  }

  function my3 (){
    alert("Chanki Panday = "+ description1)
  }


  return (
    <div className="App">

      <Profile image ={src1} designation ="UI UX DEGINER" name="Vishal Gupta" description ={description1} fun={my1}  />
      <Profile image ={src2} designation ="UI UX DEGINER" name="Pablo Panday" description ={description2} fun={my2} />
      <Profile image ={src3} designation ="UI UX DEGINER" name="Chanki Panday" description ={description3} fun={my3} />

    </div>
  );
}

export default App;
