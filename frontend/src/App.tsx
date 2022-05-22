import React, { FC, FormEvent, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { Layout } from "./components/Layout/Layout";

interface CalculationResult {
  result: number;
  message: string;
}

const App: FC = () => {
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [secondNumber, setSecondNumber] = useState<number | null>(null);
  const [resultNumber, setResultNumber] = useState<number | null>(null);
  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstNumber === null || secondNumber === null) {
      alert("Please enter both numbers");
      return;
    }
    try {
      const res = await fetch("http://localhost:3001/api/calculation", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ a: firstNumber, b: secondNumber }),
      });
      const result: CalculationResult = await res.json();
      setResultNumber(result.result);
    } catch (e) {
      alert("There seems to be some error");
    }
  };
  return (
    <Layout>
      <div className='calculationContainer'>
        <p className='text'>Hello enter the numbers</p>
        <form onSubmit={onSubmitHandler} className='center'>
          <Input
            onChange={(e) => {
              setFirstNumber(parseFloat(e.target.value));
            }}
            placeholder='number 1'
            value={firstNumber}
          />
          <Input
            onChange={(e) => {
              setSecondNumber(parseFloat(e.target.value));
            }}
            placeholder='number 2'
            value={secondNumber}
          />
          <Button children='Sum' />
        </form>
        <hr className='hrLine' />
        <p className='text'>Results</p>
        <div className='center'>
          <Input value={resultNumber} placeholder='1523' />
        </div>
      </div>
    </Layout>
  );
};

export default App;
