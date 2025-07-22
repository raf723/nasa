import { useCallback, useState } from 'react';

const useArray = (defaultArray = []) => {
  const [arr, setArr] = useState(defaultArray);

  const add = useCallback(val => setArr([...arr, val]), [arr]);
  const remove = useCallback(val => setArr(arr.filter(v => v !== val)), [arr]);
  const alter = useCallback(val => setArr([...arr, ...val]), [arr]);
  const toggle = useCallback(
    val => (arr.includes(val) ? remove(val) : add(val)),
    [add, arr, remove],
  );
  const reset = useCallback(() => setArr(defaultArray), [defaultArray]);
  const clear = useCallback(() => setArr([]), []);

  return { arr, alter, toggle, add, remove, setArr, reset, clear };
};

export default useArray;
