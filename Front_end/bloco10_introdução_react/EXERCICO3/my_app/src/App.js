import './App.css';
import './cards.css'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='blocoCard'>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
