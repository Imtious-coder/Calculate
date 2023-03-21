import React, { useState } from "react";

const Index = () => {
  // State...
  const [result, setResult] = useState("");

  // Functions..
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Opps! Error");
    }
  };
  return (
    <>
      <section className="container d-flex justify-content-center align-items-center mt-lg-5 pt-lg-5">
        <div className="row calculator mt-5">
          <div className="col-12">
            <input
              type="text"
              name="text"
              id="text"
              value={result}
              placeholder="Welcome!"
              onChange={() => {}}
            />
          </div>
          <div className="col-12 keypad">
            <button className="highlight m-2" onClick={clear} id="clear">
              Clear
            </button>
            <button
              className="highlight my-2 mx-1"
              onClick={backspace}
              id="backspace"
            >
              c
            </button>
            <button
              className="highlight my-2 mx-1"
              name="/"
              onClick={handleClick}
            >
              &divide;
            </button>
            <button className="my-2 mx-1" name="7" onClick={handleClick}>
              7
            </button>
            <button className="my-2 mx-1" name="8" onClick={handleClick}>
              8
            </button>
            <button className="my-2 mx-1" name="9" onClick={handleClick}>
              9
            </button>
            <button
              className="highlight my-2 mx-1"
              name="*"
              onClick={handleClick}
            >
              &times;
            </button>
            <button className="my-2 mx-1" name="4" onClick={handleClick}>
              4
            </button>
            <button className="my-2 mx-1" name="5" onClick={handleClick}>
              5
            </button>
            <button className="my-2 mx-1" name="6" onClick={handleClick}>
              6
            </button>
            <button
              className="highlight my-2 mx-1"
              name="-"
              onClick={handleClick}
            >
              &ndash;
            </button>
            <button className="my-2 mx-1" name="1" onClick={handleClick}>
              1
            </button>
            <button className="my-2 mx-1" name="2" onClick={handleClick}>
              2
            </button>
            <button className="my-2 mx-1" name="3" onClick={handleClick}>
              3
            </button>
            <button
              className="highlight my-2 mx-1"
              name="+"
              onClick={handleClick}
            >
              +
            </button>
            <button className="my-2 mx-1" name="0" onClick={handleClick}>
              0
            </button>
            <button
              className="highlight my-2 mx-1"
              name="."
              onClick={handleClick}
            >
              .
            </button>
            <button
              className="highlight my-2 mx-1"
              onClick={calculate}
              id="result"
            >
              =
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
