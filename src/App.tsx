import Greet from './components/Greet';
import Heading from './components/Heading';

function App() {
  return (
    <div className='container'>
      <h1 className='display-2'>React dev app</h1>
      <Heading title='Sveiki' />
      <Greet name='James' amount={500_000_000} />
    </div>
  );
}

export default App;
