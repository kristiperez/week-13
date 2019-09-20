import React, { useState, useEffect } from 'react'
import '../App.css'

function CodeSnippets() {
    const [codeSnippets,setCodeSnippets] = useState([])

    useEffect(() => {
        fetchCodeSnippets()
    },[])

    const fetchCodeSnippets = () => {
        fetch('http://localhost:3002/code-snippets')
        .then(response => response.json())
        .then(cs => {
            console.log(cs)
            setCodeSnippets(cs)
        })
    }

    return (
        <div>
            {codeSnippets.map(codeSnippet => {
                return(
                    <div key={codeSnippet._id}>
                        <h4>{codeSnippet.title}</h4>
                        <p>{codeSnippet.body}</p>
                        <h5>{codeSnippet.tag}</h5>
                    </div>
                )
            })}
        </div>
    )


}

export default CodeSnippets
