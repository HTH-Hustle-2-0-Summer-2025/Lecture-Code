const favColors = {
    imani: 'green',
    kylania: 'blue',
    chrisG: 'purple',
    joi: 'yellow',
    kiara: 'pink'
};

console.log(favColors);

// console.log(Object.keys(favColors).length);
// for (let i = 0; i < Object.keys(favColors).length; i++) {
//     console.log(favColors[i]);
// }

for (const name in favColors) {
    console.log(favColors[name]);
}
