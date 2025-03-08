import { useState } from "react"

function Todo() {
    var [inputText,setInputText] = useState('') 

    var [newArr,setNewArr] = useState([
        "Cong viec 1",
        "Cong viec 2",
        "Cong viec 3"
    ])

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const handleClick = () => {
        setNewArr([
            ...newArr,
            inputText
        ])
    }

    const handleRemove = (index) => {
        setNewArr(newArr.filter((item,i) => i != index))
    }

    return (
        <>
            <input type="text" name="inputText" onChange={handleChange}></input>
            <button onClick={handleClick}>Them cong viec</button>
            <p>Danh sach cac cong viec can lam</p>
            <ul>
                {newArr.map((item,index) => {
                    return (
                        <li key={index}>
                            {item}
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </li>
                    )
                } 
                )}
            </ul>
        </>
    )
}

export default Todo;