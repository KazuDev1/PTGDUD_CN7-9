import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Reducer/CounterReducer';
import "./style.css"

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Bài 1</h1>
      <div className="card">
        <h1 className="count">
          Count: <span className="countValue">{count}</span>
        </h1>
        <div className="buttons">
          <button className="button incrementButton" onClick={() => dispatch(increment())}>
            Tăng
          </button>
          <button className="button decrementButton" onClick={() => dispatch(decrement())}>
            Giảm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;