import React, { useState } from "react";

function Run() {
    const [run, setRun] = useState(0);

    function handleRunChange(runsToAdd) {
        setRun(prevRun => prevRun + runsToAdd);
    }

    function resetRun() {
        setRun(0);
    }

    return (
        <center>        
        <div style={{ margin: "30px 480px" }}>
            <h2>Total Runs : {run}</h2>
            <div style={{ display: "flex", gap: "8px" }}>
                <center>
                <button onClick={() => handleRunChange(0)}>0</button>
                <button onClick={() => handleRunChange(1)}>1</button>
                <button onClick={() => handleRunChange(2)}>2</button>
                <button onClick={() => handleRunChange(3)}>3</button>
                <button onClick={() => handleRunChange(4)}>4</button>
                <button onClick={() => handleRunChange(5)}>5</button>
                <button onClick={() => handleRunChange(6)}>6</button>
                <button onClick={resetRun} style={{ backgroundColor: "#ef4444", color: "white" }}>Reset</button>
                </center>
            </div>
        </div>
        </center>
    );
}

export default Run;