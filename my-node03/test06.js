const path = require('path');
// const fs = require('fs');
const {writeFile} = require('fs');
const os = require('os');

console.log(os.totalmem());
console.log(os.freemem());

// fs.writeFile()
writeFile('myFile01.txt',
    'Hello...' + os.EOL +
    'Hi...' + os.EOL +
    'Hey...' + os.EOL,
    function(err){
        if (err) throw err
        console.log('สร้างฟล์ใหม่และบันทึกเรียบร้อยแล้ว');
    }
)