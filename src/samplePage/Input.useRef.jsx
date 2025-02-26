import { useRef, useState } from "react";

export const Input = () => {
  const [text, setText] = useState("");
  const refText = useRef("");

  return (
    <>
      {/* <input onChange={(e) => {
                setText(e.target.value);
                console.log(e.target.value);
            }} /> */}
      <input ref={refText} />
      <button onClick={() => alert(`입력하신 단어는 ${text}입니다`)}>
        클릭!
      </button>
    </>
  );
};
