import { use, useState } from "react";

function Add2number() {
    var [a,setA] = useState(0)
    var [b,setB] = useState(0)
    var [result,setResult] = useState(0)

    const handleChangeA = (e) => {
        setA(e.target.value)
    }

    const handleChangeB = (e) => {
        setB(e.target.value)
    }

    const handleClick = () => {
        setResult(parseInt(a)+parseInt(b))
    }

    return (
        <>
            <input onChange={handleChangeA} name="inputA" type="text" />
            <input onChange={handleChangeB} name="inputB" type="text" />
            <button onClick={() => handleClick()}>Click</button>
            <div>Result: {result}</div>
        </>
    )
}

export default Add2number;
