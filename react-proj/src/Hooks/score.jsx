import React , { useState } from 'react';

function Score(){
    return(
        <div>
            <h2> Display</h2>
            <h2>Runs : 0</h2>
            <h2>Wickets : 0</h2>
            
            {/*0 1 2 3 4 6 W */}

        </div>
    )
}

function run(){
    const [runs, setRuns] = useState(0);
    function increment(){
        setRuns(runs+1)
    }

}

function onerun(){
    const [runs, setRuns] = useState(0);
    function increment(){
        setRuns(runs+1)
    }
}
function tworun(){
    const [runs, setRuns] = useState(0);
    function increment(){
        setRuns(runs+2)
    }
}
function threerun(){

    const [runs, setRuns] = useState(0);
    function increment(){
        setRuns(runs+3)
    }
}
function fourrun(){
    const [runs, setRuns] = useState(0);
    function increment(){
        setRuns(runs+4)
    }
}
function sixrun(){
    const [runs, setRuns] = useState(0);    
function increment(){
        setRuns(runs+6)
    }
}
function wicket(){ 

    const [wickets, setWickets] = useState(0);
    function increment(){
        setWickets(wickets+1)
    }
}
export default Score ;