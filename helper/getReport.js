function getReport(data, userdata, calories) {
    let text = `Hallo ${userdata.getFullName()},\n\nKamu hari ini sudah makan:\n\n`
    for(let i = 0; i < data.length; i++){
        if(data[i].Food){
            text += `-${data[i].Food.name}\n`
        }
    }
    text += `\nTotal kalori kamu hari ini adalah ${calories}`
    return text
}

module.exports = getReport;