import React from "react";

const Regex = () => {
  const array1 = [
    "Carlos Arturo ",
    4491234567,
    "carlos_@hotmail.com",
    "www.carlos.com",
    "Manuel Alejandro",
    '449-234-56-78',
    '448-23-56-78',
    "alejandro@outlook.com",
    "https://www.manuel.alejandro.com.mx",
    "http://alejandro.com.mx",
    "http://alejandro.com.mx",
    "http:/alejandro.com.mx",
    "Cesar Alan",
    '423 345 67 891',
    '423 34 67 89',
    '123 345 67 89',
    '449@345 67 89',
    '449 345 67 89',
    '449.345.67.89',
    "cesar@hotmail.com",
    "-_",
    "cesar.net",
    "cesar.org",
  ];

  return (
    <div>
      <h2>Expresiones Regulares</h2>
      {array1.map((i, j) =>
        /^(http(s?):\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[^0-9]/gm.test(i) ? <p key={j}>{i} </p> : null
      )}
    </div>
  );
};

export default Regex;
