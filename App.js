
import './App.css';
import Data from './component.js/Data';
import Navbar from './component.js/Navbar';
import TextForm from './component.js/TextForm'
function App() {
  return (
<>

<Navbar/>
<div className="contaninr my-3">

<Data/>

</div>
<div className="container" my-3>
<TextForm heading="Enter your thoughts "/>
</div>

</>
  )
}

export default App;
