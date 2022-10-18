import PropTypes from "prop-types";
import useCount from "../hooks/useCount";

function ButtonCounter({ txt }) {
  const [count, increment, reset] = useCount();

  return (
    <>
      <p className="font text-center font-semibold text-blue-300 ">{count}</p>
      <button
        type="button"
        className="rounded border-2 p-3 hover:bg-blue-700 hover:text-white"
        onClick={increment}
      >
        {txt}
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

ButtonCounter.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default ButtonCounter;
