import { use, useState } from "react";
function Calc() {
    var [a, setA] = useState(0)
    var [b, setB] = useState(0)
    var [result, setResult] = useState(0)

    const handleChangeA = (e) => {
        setA(e.target.value)
    }

    const handleChangeB = (e) => {
        setB(e.target.value)
    }

    const handleClick = (key) => {
        setResult(result)
    }

    const handleClickButton = (key) => {
        console.log(key)
        switch (key) {
            case "+":
                result = parseInt(a) + parseInt(b)
                break;
            case "-":
                result = parseInt(a) - parseInt(b)
                break;
            case "*":
                result = parseInt(a) * parseInt(b)
                break;
            case "/":
                result = parseInt(a) / parseInt(b)
                break;
            default:
                break;
        }
    }

    return (
        <>
            <input onChange={handleChangeA} name="inputA" type="text" />
            <input onChange={handleChangeB} name="inputB" type="text" />
            <div>
                <label>+</label>
                <input type="radio" name="sum" onClick={() => handleClickButton("+")}></input>
            </div>
            <div>
                <label>-</label>
                <input type="radio" name="sum" onClick={() => handleClickButton("-")}></input>
            </div>
            <div>
                <label>*</label>
                <input type="radio" name="sum" onClick={() => handleClickButton("*")}></input>
            </div>
            <div>
                <label>/</label>
                <input type="radio" name="sum" onClick={() => handleClickButton("/")}></input>
            </div>
            <button onClick={() => handleClick()}>Click</button>
            <div>Result: {result}</div>
        </>
    )
}

export default Calc;