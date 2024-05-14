import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Table from './pages/Table';
function App() {

  const handleClick = (x) => {
    fetch(`http://localhost:8000/control/${x}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    console.log(x + ": OK")
  };

  return (
    <div >
      <Navbar />
        <Table />
       {/* <div className='ful'>
        <h1 className='label'>Điều khiển đèn led - Bài 4</h1>
      </div>
      <div className='ful'>
        <button className='btn' onClick={()=>handleClick(1)}>Bật led</button>
        <button className='btn' onClick={()=>handleClick(0)}>Tắt led</button>
      </div>  */}
    </div>
  );
}

export default App;
