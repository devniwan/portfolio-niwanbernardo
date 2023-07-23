import React, { useState, useEffect } from "react";

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Digita a próxima letra ou apaga a última letra
  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 20 : subIndex === words[index].length ? 2000 : 50, parseInt(Math.random() * 175)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Pisca o cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <span className="up">{`${words[index].substring(0, subIndex).replace(/\./g, "")}${blink ? "|" : " "}`}</span>
    </>
  );
};

export default Typewriter;
