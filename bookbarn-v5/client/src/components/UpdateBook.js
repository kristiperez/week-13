import React, {Component} from 'react';
import '../App.css';

class UpdateBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            genre: '',
            publisher: '',
            year: '',
            imageurl: '',
            bookId: this.props.match.params.bookId
        }


        this.fetchBook()

    }

    fetchBook = () => {
        fetch(`http://localhost:3001/update-book/${this.state.bookId}`)
        .then(response => response.json())
        .then(book => {
        
            this.setState({
                title: book.title,
                genre: book.genre,
                publisher: book.publisher,
                year: book.year,
                imageurl: book.imageurl
            })
        })
    }
     
    updateBook = () => {
        //value is in the state
        fetch('http://localhost:3001/update-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                imageurl: this.state.imageurl,
                bookId: this.props.match.params.bookId
            })
        }).then(() => {
            this.props.history.push("/books")
        })

    }


    handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        this.updateBook()
     }

    render() {
        return <div>
            <input type="text" name="title" value={this.state.title} onChange={this.handleTextBoxChange} />
            <input type="text" name="genre" value={this.state.genre} onChange={this.handleTextBoxChange} />
            <input type="text" name="publisher" value={this.state.publisher} onChange={this.handleTextBoxChange} />
            <input type="text" name="year" value={this.state.year} onChange={this.handleTextBoxChange} />
            <input type="text" name="imageurl" value={this.state.imageurl} onChange={this.handleTextBoxChange} />
            <button onClick={this.handleSubmit}>Submit</button>

        </div>
    }

    
}

export default UpdateBook;