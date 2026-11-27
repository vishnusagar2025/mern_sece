import React, { useState, useEffect } from 'react'

function Fetch_Api(){
    const [quotes, setQuotes] = useState([]);

    useEffect(()=>{ 
        fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then((data) => setQuotes(data.quotes))

    },[])

    return(
        <div>
        <h2> Fetch_Api </h2>
        <table border={2}>
            <thead>
                <tr>
                <th>id</th>
                <th>quote</th>
                <th>author</th>
                </tr>
            </thead>
            <tbody>
                {
                    quotes.map( quote => (
                        <tr key={quote.id}>
                        <td>{quote.id}</td>
                        <td>{quote.quote}</td>
                        <td>{quote.author}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
        
        </div>
    )
}

export default Fetch_Api;
