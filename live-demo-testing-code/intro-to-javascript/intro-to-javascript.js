let changeableVar = 'change me';
const doesntChange = 'you can\'t change me :P';

changeableVar = false;
// doesntChange = 'please i beg you to change';

console.log(changeableVar);
console.log(doesntChange);

const myArray = [1, 2, 3, 'do', 're', 'me']
myArray[2] = 7;
myArray.push('new item');
console.log(myArray);
const myObj = {
    color: 'red',
    day: 'monday',
    name: 'kendall'
};

console.log(myArray[0]);
console.log(myObj[0]);

myObj[0] = true;

console.log(myObj);

// if (1 == '1') {
//     console.log('These are the same');
// } else {
//     console.log('These are NOT the same')
// }

if (1 === '1') {
    console.log('These are the same');
} else {
    console.log('These are NOT the same')
};

let x = 0
while (x < 5) {
    console.log(x);
    x++;
};

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// };


for (const arrVar of myArray) {
    console.log(arrVar);
};

for (const arrVar in myArray) {
    console.log(arrVar);
};

for (const objProp in myObj) {
    console.log(objProp, myObj[objProp]);
};

function multiply (x, y) {
    return x * y;
};

console.log(multiply(2, 4));

// const addition = () => 2 + 2;

// console.log(addition());

// const addition = (x, y) => x + y;

// console.log(addition(7, 8));

const addition = (x, y) => {
    const num1 = x;
    const num2 = y;
    return num1 + num2;
};

console.log(addition(7, 9));