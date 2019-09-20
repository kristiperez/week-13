const mongoose = require('mongoose')

const codeSnippetSchema = new mongoose.Schema({
    title: String,
    body: String,
    tag: String
})
// mongoose will create a codeSnippets collection in the database
//mongoose.model('CodeSnippet....) returns you a model.  here I am callig the model it returns the constant CodeSnippet
const CodeSnippet = mongoose.model('CodeSnippet', codeSnippetSchema)

module.exports = CodeSnippet