import { useState, useMemo } from "react";

function ExpensiveCalculation({ number }) {
  const computeFactorial = (num) => {
    console.log("Tính toán factorial...");
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  // Chỉ tính toán lại nếu "number" thay đổi
  const factorial = useMemo(() => computeFactorial(number), [number]);

  return <p>Kết quả: {factorial}</p>;
}

function AppTest() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Tăng count: {count}</button>
      <ExpensiveCalculation number={number} />
    </div>
  );
}

export default AppTest;
