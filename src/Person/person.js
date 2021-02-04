import React, { useState } from 'react';
import '../Person/person.css'
const Person = (props) => {


    const [count, setCount] = useState(() => {
        console.log("this function");
        return 0;
    });


    const [state, setState] = useState({ count: 4, theme: "blue" });


    function decrementCount() {
        setState(prev => {
            return { count: prev.count - 1 }
        });
        setCount(prev => prev - 1);
        setState(prevState => {
            return { ...prevState, count: prevState.count - 1, theme: prevState.theme = 'yellow' };
        })
    }


    function incrementCount() {
        setState(nextState => {
            return { count: nextState.count + 1 }
        })
        setCount(prev => prev + 1);

        setState(nextState => {
            return { ...nextState, count: nextState.count + 1, theme: 'red' };
        })
    }


    return (
        <div style={props.style}className="person">
            <button onClick={decrementCount}>-</button>
            <span>{state.count}</span>
            <span>{state.theme}</span>
            <button onClick={incrementCount} >+</button>
        </div>


    )
};

export default Person;