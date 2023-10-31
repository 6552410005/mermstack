const path = require('path');
// const fs = require('fs');
const {writeFile, appendFile} = require('fs');
const os = require('os');

console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));
console.log(path.parse(__filename).base);

// fs.writeFile
// writeFile
appendFile(
    'myfile01.txt',
    'Hi, I love Node.js...' + os.EOL,
    function(err){
        if(err) throw err
        console.log('สร้างและบันทึกเรียบร้อยแล้ว...');
    }
)
