import { useState } from "react";
import { Table } from "./samplePage/Table";
import { SelectBox } from "./samplePage/SelectBox.usestate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <SelectBox /> */}
      <Table />
    </>
  );
}

export default App;
