function showHi(){
    console.log('Hi...')
}

function sumNumber(x,y){
    return x + y
}

VAT = 0.07

module.exports.showHi = showHi
module.exports.sumNumber = sumNumber
module.exports.VAT = VAT

// module.exports = showHi
// module.exports = sumNumber
// module.exports = VAT