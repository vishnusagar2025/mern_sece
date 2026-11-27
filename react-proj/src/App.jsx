import Home from './Home';
import Flipkart from './components/Flipcart';
import Counter from './Hooks/Counter';
import Score from './Hooks/score';
import Run from './Hooks/run';
import User from './Hooks/useeffect/User';
import Fetch_Api from './Hooks/useeffect/Fetch_Api';

function App() {
  return (
    <div>
      <center>
        <h1>Welcome to App Components</h1>
        <hr />
        {/* <Counter /> */}
        <hr />
        {/* <Score /> */}
        <Flipkart mobile="Samsung" />
        <Flipkart mobile="Iphone" />
        {/* <User /> */}
        <Fetch_Api />
      </center>
    </div>
  );
}

export default App;
