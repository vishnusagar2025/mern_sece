import React from 'react'
import Mobile from './Mobile';

function Electronics({mobile}){
    console.log(mobile);
    return (
        <div>
        <h2>Electronics</h2>
        <Mobile mobile={mobile}     />
        </div>
    );
}

export default Electronics;