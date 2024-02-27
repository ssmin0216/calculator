import './App.css';
import {useState} from "react";

function Test() {
  const keyboard = [
    {
      name: 'AC',
      func: '',
    },
    {
      name: 'DEL',
      func: '',
    },
    {
      name: '%',
      func: '',
    },
    {
      name: '/',
      func: '',
    },
    {
      name: '7',
      func: '',
    },
    {
      name: '8',
      func: '',
    },
    {
      name: '9',
      func: '',
    },
    {
      name: '*',
      func: '',
    },
    {
      name: '4',
      func: '',
    },
    {
      name: '5',
      func: '',
    },
    {
      name: '6',
      func: '',
    },
    {
      name: '-',
      func: '',
    },
    {
      name: '1',
      func: '',
    },
    {
      name: '2',
      func: '',
    },
    {
      name: '3',
      func: '',
    },
    {
      name: '+',
      func: '',
    },
    {
      name: '+/-',
      func: '',
    },
    {
      name: '0',
      func: '',
    },
    {
      name: '.',
      func: '',
    },
    {
      name: '=',
      func: '',
    }
  ];

  const [calc, setCalc] = useState(''); // 계산식
  const [result, setResult] = useState(''); // 계산결과

  const handleCalc = (e) => {
    console.log(`value : ${e.target.value}`);
    setCalc([...calc, e.target.value]);
  };
  return (
    <>
      <h2>계산기</h2>
      <div>식 : {calc}</div>
      <div>결과 : {result}</div>
      <div className="grid grid-cols-4 gap-1">
        {keyboard.map(k => (<button key={k.name} value={k.name} onClick={handleCalc}>{k.name}</button>))}
      </div>
    </>
  );
}

export default Test;
