import React from 'react';
import { useReducer } from 'react';
import './Calculator.css'; // Nhớ tạo file CSS tương ứng

const Calculator = () => {
    const initialState = {
        num1: '',
        num2: '',
        result: null,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_NUM1':
                return { ...state, num1: action.payload };
            case 'SET_NUM2':
                return { ...state, num2: action.payload };
            case 'ADD':
                return { ...state, result: Number(state.num1) + Number(state.num2) };
            case 'SUBTRACT':
                return { ...state, result: Number(state.num1) - Number(state.num2) };
            case 'MULTIPLY':
                return { ...state, result: Number(state.num1) * Number(state.num2) };
            case 'DIVIDE':
                return {
                    ...state,
                    result: state.num2 !== '0' ? Number(state.num1) / Number(state.num2) : 'Không thể chia cho 0',
                };
            default:
                return state;
        }
    };

    // Khai báo useReducer đúng vị trí
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleCalculate = (operation) => {
        if (state.num1 === '' || state.num2 === '') {
            alert('Vui lòng nhập cả hai số!');
            return;
        }
        dispatch({ type: operation });
    };

    return (
        <div className="App">
            <div className="calculator">
                <h1>Máy Tính Đơn Giản</h1>
                <div>
                    <input
                        type="number"
                        value={state.num1}
                        onChange={(e) => dispatch({ type: 'SET_NUM1', payload: e.target.value })}
                        placeholder="Nhập số thứ nhất"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        value={state.num2}
                        onChange={(e) => dispatch({ type: 'SET_NUM2', payload: e.target.value })}
                        placeholder="Nhập số thứ hai"
                    />
                </div>
                <div className="buttons">
                    <button onClick={() => handleCalculate('ADD')}>+</button>
                    <button onClick={() => handleCalculate('SUBTRACT')}>-</button>
                    <button onClick={() => handleCalculate('MULTIPLY')}>*</button>
                    <button onClick={() => handleCalculate('DIVIDE')}>/</button>
                </div>
                {state.result !== null && (
                    <h2>Kết quả: {state.result}</h2>
                )}
            </div>
        </div>
    );
};

export default Calculator;