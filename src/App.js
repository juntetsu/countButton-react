import React, { useState } from "react";
import "./App.css";
import aho from "./img/image.png";

const App = () => {
  const [num, setNum] = useState(0);
  const [nabeatsu, setNabeatsu] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  }

  if (num > 0) {
    if (num % 3 === 0 || Boolean(num.toString().match(/3/))) {
        nabeatsu || setNabeatsu(true);
    } else {
        nabeatsu && setNabeatsu(false);
    }
}

  return(
    <>
      <p>{num}</p>
      <button onClick={onClickButton}>Count Up!</button>
      {nabeatsu && <div id="image"><img src={aho} /></div>}
    </>
  );
}

export default App;