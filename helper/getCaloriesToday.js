function getCaloriesToday (data) {
    let today = new Date().getDay()
    let calories = 0;
    data.forEach((item) => {
        if(new Date(item.createdAt).getDay() === today){
            calories += item.Food.calories
        }
    })
    return calories
}

module.exports = getCaloriesToday