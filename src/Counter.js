import {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const Counter = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="App">
            <button onClick={Counter}> {counter} </button>
            {counter > 5 &&
                <button onClick={Counter}> {counter} </button>
            }
        </div>
    );
}

export default Counter