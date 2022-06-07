const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage': {
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation' : 'London, England',
        'age' : 29
    },
    'Chance the Rapper' :{
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
        'age' : 29
    },
    'Unknown': {
        'birthName': "unknown",
        'birthLocation': 'unknown',
        'age': 0
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(rappers)
})

app.listen( PORT, ()=> {
    console.log(`The server is now running on port ${PORT} ! Betta Go Catch It!`)
})