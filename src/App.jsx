import "./App.css";
import ButtonCounter from "./components/ButtonCounter";

function App() {
  return (
    <>
      <h1 className="mt-10 text-center uppercase text-red-500">
        Button Counter
      </h1>
      <ButtonCounter />
      <ButtonCounter />

      <ButtonCounter />
    </>
  );
}

export default App;
