const express = require('express');
const app = express();
const session = require('express-session')
const port = /*process.env.PORT ||*/ 3002;

const foodRoute = require('./router/foodRoute')
const userRoute = require('./router/userRoute')
const restaurantRoute = require('./router/restaurantRoute')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static('images'))

app.use(session({
  secret: 'apa ya',
  name: 'sessionId',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

const redirectFood= (req, res, next) => {
  if(req.session.user){
    res.redirect('/foods')
  }else{
    next();
  }
}

app.get('/', redirectFood, (req, res) => {
    let user = req.session.user
    res.render('home', { user })
})

app.use('/foods', foodRoute)

app.use('/user', userRoute)

app.use('/restaurants', restaurantRoute)


app.listen(port, () => {
    console.log('listening on port: ', port)
})