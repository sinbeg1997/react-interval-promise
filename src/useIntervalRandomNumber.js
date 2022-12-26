import { useEffect, useRef } from 'react';

const useIntervalRandomNumber = () => {
  const timerId = useRef();

  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, []);

  const intervalRandomNumberFn = async (callback, ms, triLefts = 5) => {
    return new Promise((resolve) => {
      timerId.current = setInterval(async () => {
        const value = await callback();
        console.log('value', value);
        if (value > 0.99) {
          console.log('DONE value > 0.99');
          resolve(value);
          clearInterval(timerId.current);
        } else {
          triLefts--;
          if (triLefts === 0) {
            clearInterval(timerId.current);
          }
        }
      }, ms);
    });
  };

  return {
    intervalRandomNumberFn,
  };
};

export default useIntervalRandomNumber;
