import Greet from './components/Greet';
import Heading from './components/Heading';
import Person from './components/Person';

function App() {
  return (
    <div className='container'>
      <h1 className='display-2'>React dev app</h1>
      <Heading title='Sveiki' />
      <Greet name='James' amount={500_000_000} favColor='tomato' />
      <Greet name='Mike' amount={10_000_000} />
      <Person firstName='John' lastName='Doe' />
    </div>
  );
}

export default App;
