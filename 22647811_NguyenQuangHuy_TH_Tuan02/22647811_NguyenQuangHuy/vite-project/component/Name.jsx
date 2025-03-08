import { useState } from "react"

function Name() {
    var [name,setName] = useState("")

    const handleChange = (e) => {
        name = e.target.value
    }

    const handleClick = () => {
        setName(name)
    }

    return (
        <>
            <input onChange={handleChange} name="inputName" type="text" />
            <button onClick={() => handleClick()}>Click</button>
            <div>{name}</div>
        </>
    )
}

export default Name;