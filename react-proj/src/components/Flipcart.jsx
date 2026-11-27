import React from 'react'
import Electronics from './Electronics'
import Mobile from './Mobile'

function Flipcart({mobile}){

    console.log(mobile);
    return (
        <>
        <h2>Welcome to flipcart</h2>
        <p>{mobile}</p>
        {/*<electronics mobile = {mobile} />*/}
        </>

    )
        }
export default Flipcart 