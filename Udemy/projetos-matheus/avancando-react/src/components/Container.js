import React from "react";

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h3>Conteúdo do componente pai com variável: {myValue}</h3>
      {children}
    </div>
  );
};

export default Container;
