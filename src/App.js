import './App.css';
import {useState} from "react";
import * as math from 'mathjs';

function App() {
  const [result, setResult] = useState(''); // 계산결과

  const handleCalc = (e) => {
    console.log(`value : ${e.target.value}`);
    switch (e.target.value) {
      case 'AC':
        setResult('');
        break;
      case 'DEL':
        setResult(result.slice(0, -1));
        break;
      case '.':
        break;
      case '=':
        setResult(math.evaluate(result).toString());
        break;
      default:
        setResult(result.concat(e.target.value));
        break;
    }
  };
  return (
    <>
      <div className="border-solid border-2 border-gray-500 m-20 shadow-md">
        <h2 className="text-center">계산기</h2>
        <div className="m-5 text-right">
          <input className="border-solid border-2 border-gray-500" value={result} readOnly/>
        </div>
        <div className="m-5 grid grid-cols-4 gap-1 text-center">
          <button className="border-solid border-2 border-gray-400" value='AC' onClick={handleCalc}>AC</button>
          <button className="border-solid border-2 border-gray-400" value='DEL' onClick={handleCalc}>DEL</button>
          <button className="border-solid border-2 border-gray-400" value='%' onClick={handleCalc}>%</button>
          <button className="border-solid border-2 border-gray-400" value='/' onClick={handleCalc}>/</button>
          <button className="border-solid border-2 border-gray-400" value='7' onClick={handleCalc}>7</button>
          <button className="border-solid border-2 border-gray-400" value='8' onClick={handleCalc}>8</button>
          <button className="border-solid border-2 border-gray-400" value='9' onClick={handleCalc}>9</button>
          <button className="border-solid border-2 border-gray-400" value='*' onClick={handleCalc}>*</button>
          <button className="border-solid border-2 border-gray-400" value='4' onClick={handleCalc}>4</button>
          <button className="border-solid border-2 border-gray-400" value='5' onClick={handleCalc}>5</button>
          <button className="border-solid border-2 border-gray-400" value='6' onClick={handleCalc}>6</button>
          <button className="border-solid border-2 border-gray-400" value='-' onClick={handleCalc}>-</button>
          <button className="border-solid border-2 border-gray-400" value='1' onClick={handleCalc}>1</button>
          <button className="border-solid border-2 border-gray-400" value='2' onClick={handleCalc}>2</button>
          <button className="border-solid border-2 border-gray-400" value='3' onClick={handleCalc}>3</button>
          <button className="border-solid border-2 border-gray-400" value='+' onClick={handleCalc}>+</button>
          <button className="border-solid border-2 border-gray-400" value='+/-' onClick={handleCalc}>+/-</button>
          <button className="border-solid border-2 border-gray-400" value='0' onClick={handleCalc}>0</button>
          <button className="border-solid border-2 border-gray-400" value='.' onClick={handleCalc}>.</button>
          <button className="border-solid border-2 border-gray-400" value='=' onClick={handleCalc}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
