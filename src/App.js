import './App.css';
import Banner from './Banner'
import Exhibit from './Exhibit';
function App() {
  return (
    <>
    <div className='main'>
    <div className='Banner'>
    <Banner title = "Sextant Dashboard"></Banner>
    </div>
    <div className='exhibit'>
      <Exhibit></Exhibit>
    </div>
    </div>
    </>
  );
}

export default App;
