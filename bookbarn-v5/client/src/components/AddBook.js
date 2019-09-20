import React, {Component} from 'react';
import '../App.css';

class AddBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            genre: '',
            publisher: '',
            year: '',
            imageurl: ''
        }

    }

    handleSave = () => {
        //value is in the state
        fetch('http://localhost:3001/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                imageurl: this.state.imageurl
    
            })
        })
        .then(() => {
            this.props.history.push("/books")
        })
    }

    handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
       this.handleSave()
    }

    render() {
        return <div>
            <input type="text" name="title" placeholder="Enter title" onChange={this.handleTextBoxChange} />
            <input type="text" name="genre" placeholder="Enter genre" onChange={this.handleTextBoxChange} />
            <input type="text" name="publisher" placeholder="Enter publisher" onChange={this.handleTextBoxChange} />
            <input type="text" name="year" placeholder="Enter year" onChange={this.handleTextBoxChange} />
            <input type="text" name="imageurl" placeholder="Enter imageurl" onChange={this.handleTextBoxChange} />
            <button onClick={this.handleSubmit}>Submit</button>

        </div>
    }

    
}

export default AddBook;