import { useState } from "react";

function useCount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, reset];
}

export default useCount;
