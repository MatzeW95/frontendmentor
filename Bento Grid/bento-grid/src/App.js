import './style.css';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Item6 from './components/item6';
import Item7 from './components/item7';
import Item8 from './components/item8';

function App() {
  return (
    <div className="App">
      <div className="GridMain">
        <div className="GridLeft">
          <Item7/>
          <Item8/>
        </div>
        <div className="GridRight">
          <Item1/>
          <Item2/>
          <Item3/>
          <Item4/>
          <Item5/>
          <Item6/>
        </div>
      </div>
    </div>
  );
}

export default App;
