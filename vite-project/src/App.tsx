import './App.css';
import Form from './components/Form.tsx';
import Cards from './components/Cards.tsx';
import { DATA } from './data.ts';


function App() {

  return (
    <div className="App">
      <div className = 'content'>
      <Form />

      <ul className='cardscontent'> 
          {DATA.map(conceptItem => (
            <li key={conceptItem.title}> 
              <Cards {...conceptItem} />
            </li> 
          ))}
        </ul>
       </div>
    </div>
  );
}

export default App;

