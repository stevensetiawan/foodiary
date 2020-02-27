const express = require('express');
const app = express();
const session = require('express-session')
const port = 3002;

const foodRoute = require('./router/foodRoute')
const userRoute = require('./router/userRoute')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'apa ya',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

app.get('/', (req, res) => {
    res.render('login')
})

app.use('/foods', foodRoute)

app.use('/user', userRoute)


app.listen(port, () => {
    console.log('listening on port: ', port)
})