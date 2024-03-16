import React, { useState } from 'react'
import '../Style/Calculator.css'

function Calculator() {

    const [display, setDisplay] = useState('')

    const handleClick = (value) => {
        setDisplay(display + value)
    }

    const calculatorResult = () => {
        try {
            const result = eval(display)
            setDisplay(result)
        } catch (error) {
            setDisplay('EROOR,invalid entry')
        }
    }

    const clearDisplay = () => {
        setDisplay('')
    }

    return (
        <div className='calc'>
            <div className="section">
                <div className="display " id="display">{display}</div>
                <button className="col clear" onClick={clearDisplay}>C</button>
                <div className="buttons">
                    <div className="row">
                        <button className="col" onClick={() => handleClick('7')}>7</button>
                        <button className="col" onClick={() => handleClick('8')}>8</button>
                        <button className="col" onClick={() => handleClick('9')}>9</button>
                        <button className="col symbol" onClick={() => handleClick('/')}>/</button>
                    </div>
                    <div className="row">
                        <button className="col" onClick={() => handleClick('4')}>4</button>
                        <button className="col" onClick={() => handleClick('5')}>5</button>
                        <button className="col" onClick={() => handleClick('6')}>6</button>
                        <button className="col symbol" onClick={() => handleClick('*')}>X</button>
                    </div>
                    <div className="row">
                        <button className="col" onClick={() => handleClick('1')}>1</button>
                        <button className="col" onClick={() => handleClick('2')}>2</button>
                        <button className="col" onClick={() => handleClick('3')}>3</button>
                        <button className="col symbol" onClick={() => handleClick('-')}>-</button>
                    </div>
                    <div className="row">
                        <button className="col" onClick={() => handleClick('.')}>.</button>
                        <button className="col" onClick={() => handleClick('0')}>0</button>
                        <button className="col symbol" onClick={() => handleClick('+')}>+</button>
                        <button className="col symbol" onClick={calculatorResult}>=</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator