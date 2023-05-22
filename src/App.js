
import './App.css';
import './Pages/allpages.css'
import './Component/Style.css'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Component/Home"
import Bollywood from './Component/Bollywood';
import Technology from './Component/Technology';
import Food from './Component/Food';
import Fitness from './Component/Fitness';
import Hollywood from './Component/Hollywood';
import Homebox from './Pages/Homebox';
import Kashmir from './Component/Kashmir';
import Cat from './Component/Cat';
function App() {
  return (


      <div className="App">
        <BrowserRouter>
          <Home />
          <Routes>
            <Route path="/" element= {<Homebox />} />
            <Route path="/api" element= {<Homebox />} />
            <Route path="/api/datas" element= {<Homebox />} />
            <Route path="/api/bolly" element={<Bollywood />} />
            <Route path="/api/tech" element={<Technology />} />
            <Route path="/api/holly" element={<Hollywood />} />
            <Route path="/api/fitty" element={<Fitness />} />
            <Route path="/api/food" element={<Food />} />
            <Route path="/kashmir" element={<Kashmir />} />
            <Route path="/cat" element={<Cat />} />

          </Routes>
        </BrowserRouter>
        
      </div>
  );
}

export default App;