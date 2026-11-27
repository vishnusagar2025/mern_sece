import React, { useContext } from 'react';
import { MobileContext } from './MobileContent'


function Mobile() {

    const mobile = useContext(MobileContext);
    console.log(mobile);
    return (
        <div>
            <h2>Mobile component</h2>
            <p> Brand : {mobile}</p>
        </div>
    );
}

export default Mobile   