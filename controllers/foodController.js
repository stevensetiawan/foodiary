const { Food } = require('../models')

class FoodController{
    static show(req, res){
        Food.findAll()
        .then( data => {
            res.render('foods', { data })
        }).catch(err => {
            res.send(err)
        })
    }
}

module.exports = FoodController