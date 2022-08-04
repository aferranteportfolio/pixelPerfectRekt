let express = require('express')
let app = express()

let router = express.Router()

router.get('/', function(req, res, next){
    res.sendFile(__dirname + '/views/index.html')
})


app.use('/api/', router)

app.use(express.static("."));


var server = app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000')
})