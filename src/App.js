import React from "react";
import TestResponse from "./Page/TestResponse/TestResponse";
import { q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h } from "./img/index.ts";

const App = () => {
  const arrImg = [q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h];

  return (
    <div>
      <h4 style={{ color: "red" }}>
        qidirish uchun : "ctrl + f" ni bosing va savolni yozing!
      </h4>
      <TestResponse />
      {/* {arrImg.map((item) => (
        <img style={{ width: "100%" }} src={item} alt="#" />
      ))} */}
    </div>
  );
};

export default App;
