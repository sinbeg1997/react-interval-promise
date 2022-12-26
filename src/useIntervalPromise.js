import { useEffect, useRef } from 'react';

const useIntervalPromise = () => {
  const isUnmount = useRef();

  useEffect(() => {
    return () => (isUnmount.current = true);
  }, []);

  /**
   * Callback: An async function excecute a promise
   * ms: delay time
   * trisLeft: number of attempts
   * stopCondtionFunc: A function to check stop condition
   */

  const intervalPromiseFn = async (
    callback,
    ms = 1500,
    triesLeft = 5,
    stopCondtionFunc = () => {}
  ) => {
    while (triesLeft > 0 && !isUnmount.current) {
      const data = await callback();
      const hasStop = stopCondtionFunc(data);
      if (hasStop) {
        return data;
      } else {
        triesLeft--;
        await new Promise((resolve) => setTimeout(() => resolve(), ms));
      }
    }
    return {};
  };
  return [intervalPromiseFn];
};

export default useIntervalPromise;
