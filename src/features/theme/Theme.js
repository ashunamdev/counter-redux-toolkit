import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { changeTextColor } from "./themeSlice";

function Theme() {
  const [color, setColor] = useState("red");
  const dispatch = useDispatch();
//   const color2 = useSelector((state) => state.counter.count);

  return (
    <div>
      <input
        className="textbox"
        type="text"
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        className="button"
        onClick={() => {
          dispatch(changeTextColor(color));
        }}
      >
        change Text Color
      </button>
    </div>
  );
}

export default Theme;
