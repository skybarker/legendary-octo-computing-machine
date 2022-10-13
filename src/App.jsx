import "./App.css";
import useCount from "./hooks/useCount";

function App() {
  const [count, increment, reset] = useCount();

  return (
    <>
      <h1 className="mt-10 text-center uppercase text-red-500">
        Button Counter
      </h1>
      <p className="font text-center font-semibold text-blue-300 ">{count}</p>
      <button
        type="button"
        className="rounded border-2 p-3 hover:bg-blue-700 hover:text-white"
        onClick={increment}
      >
        Click Me
      </button>
      <button
        type="button"
        className="rounded border-2 p-3 hover:bg-red-600 hover:text-white"
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
}

export default App;
