import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../App.css';

function MyBooks() {
    
    const [books,setBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    })

    const fetchBooks = () => {
    
        axios.get('http://localhost:3001/api/my-books')
        .then(response => {
            console.log(response.data)
            setBooks(response.data)
        })
    }

    return (
        <div>
            {books.map(book => {
                return (
                    <div>
                        <h3>{book.title}</h3>
                        <img src={book.imageurl} alt="book cover"/>
                    </div>
                )
            })}
        </div>
    )

}


export default MyBooks