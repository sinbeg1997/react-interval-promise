import React, { useEffect } from 'react';
import useIntervalPromise from './useIntervalPromise';

const NumberDisplay = () => {
  const [intervalPromiseFn] = useIntervalPromise();

  useEffect(() => {
    getNumber();
  }, []);

  const getRandomNumber = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random());
      }, Math.random() * 5000);
    });
  };

  const stopfunc = (data) => {
    console.log('$$data', data);
    if (data > 0.9) return true;
    return false;
  };
  const getNumber = async () => {
    const number = await intervalPromiseFn(getRandomNumber, 1500, 10, stopfunc);
    console.log('$$$number', number);
  };
  return <div>CONTENT HERE</div>;
};

export default NumberDisplay;
