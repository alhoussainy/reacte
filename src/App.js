

import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={News} />
        <Route path="/about" exact component={About} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
