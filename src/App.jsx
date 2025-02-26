import { useState } from "react";
import { Table } from "./samplePage/Table";
import { SelectBox } from "./samplePage/SelectBox.usestate";
import { ParantComponent } from "./samplePage/Hook.useEffect/ParantComponent";
import { MemoComponent } from "./samplePage/MemoComponent.useMemo";
import { ChildComponent } from "./samplePage/Hook.useEffect/ChildComponent.props";
import {
  HeavyJobComponent,
  HeavyJobComponent2,
  MemoHeavyJobComponent,
  MemoHeavyJobComponent2,
} from "./samplePage/MemoComponent.React.Memo";

function App() {
  const [plusNum, setPlusNum] = useState(0);
  const [multiNum, setMultiNum] = useState(0);

  return (
    <>
      {/* <Button /> */}
      {/* <Input /> */}
      {/* <SelectBox /> */}
      {/* <Table /> */}
      {/* <ParantComponent></ParantComponent> */}
      {/* <MemoComponent /> */}
      {/* <ChildComponent title={"제목1"} content={"내용을 작성해요1"} />
      <ChildComponent title={"제목2"} content={"내용을 작성해요2"} />
      <ChildComponent title={"제목3"} content={"내용을 작성해요3"} />
      <ChildComponent title={"제목4"} content={"내용을 작성해요4"} />
      <ChildComponent title={"제목5"} content={"내용을 작성해요5"} />
      <ChildComponent title={"제목6"} content={"내용을 작성해요6"} /> */}
      <input type="number" onChange={(e) => setPlusNum(e.target.value)} />
      {/* <HeavyJobComponent
        num={Number(plusNum)}
        numObj={{ num: Number(plusNum) }}
      /> */}
      <MemoHeavyJobComponent num={Number(plusNum)} />
      <input type="number" onChange={(e) => setMultiNum(e.target.value)} />
      {/* <HeavyJobComponent2
        num={Number(multiNum)}
        numObj={{ num: Number(multiNum) }} */}
      <MemoHeavyJobComponent2 num={Number(multiNum)} />
    </>
  );
}

export default App;
