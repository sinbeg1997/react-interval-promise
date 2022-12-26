import React, { useEffect } from 'react';
import useIntervalRandomNumber from './useIntervalRandomNumber';

const NumberDisplay = () => {
  const { intervalRandomNumberFn } = useIntervalRandomNumber();

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
  const getNumber = async () => {
    const number = await intervalRandomNumberFn(getRandomNumber, 1500, 10);
    console.log('$$NUMBER', number);
  };
  return <div>CONTENT HERE</div>;
};

export default NumberDisplay;
