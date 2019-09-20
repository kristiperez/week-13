const express = require('express')
const app = express()
var mongoose = require('mongoose')
const CodeSnippet = require('./schemas/codeSnippet')
const cors = require('cors')

app.use(cors())
app.use(express.json())


// using promises
// mongoose.connect('mongodb://localhost:27017/code-snippetdb',{useNewUrlParser: true}).then()

// connecting to the MongoDB database
mongoose.connect('mongodb://localhost:27017/code-snippetdb', {useNewUrlParser:true}, (error) => {
    console.log(error)
    if(!error) {
        console.log('Successfully connected to MongoDB database!!!  Yaaay!!')
    }
})
// create a code snippet
app.post('/add-code', async (req,res) => {
    const title = req.body.title
    const body = req.body.description
    const tag = req.body.tag

    let codeSnippet = new CodeSnippet({
        title: title,
        body: body,
        tag: tag
    })

    try {
        await codeSnippet.save()
        res.json({success: true})
    } catch(error) {
        res.json({error: 'Unable to save'})
    }
    
    // codeSnippet.save((error) => {
    //     if(error) {
    //         res.json({error: 'Unable to save'})
    //     } else {
    //         res.json({success: true, message: 'Saved new post!'})
    //     }
    // })

})
//  /posts/5d8246dcd94aa228362d1e33
app.get('./code-snippets/:codeId', (req,res) => {
    // get the codeId from the route parameter
    const codeId = req.params.codeId

    CodeSnippet.findById(codeId, ((error, post) => {
        if(error) {
            res.json({error: 'Unable to get post'})
        } else {
            res.json(post)
        }
    }))

   
})

// get all codeSnippets
app.get('/code-snippets', async (req,res) => {
    
    //using promise with async and await
    try {
        const codeSnippets = await CodeSnippet.find({})
    res.json(codeSnippets)
    } catch(error) {
        res.json({error: 'unable to get all code-snippets'})
    }
    
    // using Promises
    // CodeSnippet.find({}).then((codeSnippets) => {
    //     res.json(codeSnippets)
    // }).catch(error => {
    //     res.json({error: 'Unable to get all code-snippets'})
    // })

    // using Callbacks, here error, and codeSnippets are args for the call back.  original function is find
    // CodeSnippet.find({},(error,codeSnippets) => {
    //     if(error) {
    //         res.json({error: 'Unable to fetch code-sippets'})
    //     } else {
    //         res.json(codeSnippets)
    //     }
    // })
})



app.listen(3002,() => {
    console.log('Server is running...')
})