import React, {useState, useCallback} from 'react';

const Calculator = React.memo(() => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleInput = useCallback((value) => {
      // 현재 입력값의 마지막 문자가 연산자인지 확인
      const lastCharIsOperator = /[-+*/.]$/.test(input);

      // 연속된 연산자가 입력되었을 때 마지막 연산자를 새로운 연산자로 대체
      if (lastCharIsOperator && /[-+*/.]/.test(value)) {
        setInput(input.slice(0, -1) + value);
      } else {
        setInput(input + value);
      }
    }, [input]);

    const handleCalculate = useCallback(() => {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    }, [input]);

    const clearInput = useCallback(() => {
      setInput('');
      setResult('');
    }, []);

    const handleButtonClick = useCallback((value) => {
      if (value === '=') {
        handleCalculate();
      } else if (value === 'C') {
        clearInput();
      } else {
        handleInput(value);
      }
    }, [handleCalculate, handleInput]);

    return (
      <div className="container mx-auto max-w-xs p-4">
        <h2 className="text-xl mb-4">간단한 계산기</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          placeholder="계산식을 입력하세요"
        />
        <div className="grid grid-cols-4 gap-2">
          {[7, 8, 9, 'C', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', '*'].map((value) => (
            <button key={value} onClick={() => handleButtonClick(value)}>
              {value}
            </button>
          ))}
        </div>
        <button onClick={() => handleButtonClick('=')}
                className="w-full mt-4 bg-gray-300 text-white p-2 rounded-md hover:bg-gray-400 transition-colors">=
        </button>
        <div className="mt-4">결과: {result}</div>
      </div>
    );
  }
);

export default Calculator;
