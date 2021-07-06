import { BrowserRouter as Router, Route } from 'react-router-dom';
import GoogleBookSearch from "./pages/GoogleBookSearch/GoogleBookSearch";
import Saved from "./pages/Saved/Saved";

import './App.css';


function App() {
  return (
    <Router>
      <div>
        
          <Route exact path="/" component={GoogleBookSearch} />
          <Route exact path="/saved" component={Saved} />
        
      </div>
    </Router>
  );
}

export default App;