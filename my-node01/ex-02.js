// function doTask1(){
//     console.log('Hi...');
// }

function doTask1(){
    setTimeout(() => {
        console.log('Hi...');
    }, 2000);
}

function doTask2(params) {
    console.log('Hey...');
}

doTask1();
console.log('Wow wow wow');
doTask2();