// const randomSelectFromArray = (fruits) => {
//    const randomIndex = Math.floor(Math.random() * fruits.length);
//    console.log(fruits[randomIndex]);
// }

// const fruits = ['apple', 'banana', 'mango'];
// randomSelectFromArray(fruits);

const weatherScorer = (weatherTypes) => {
    const randomIndex = Math.floor(Math.random() * weatherTypes.length);
    const weatherType = weatherTypes[randomIndex];
    if(weatherType == 'rainy') {
        return "rainy. Marks 1";
    }
    else if(weatherType == 'overcast') {
        return "overcast. Marks 0";
    }
    if(weatherType == 'sunny') {
        return "sunny. Marks -1";
    }
}

const weatherScoreResult = weatherScorer(['sunny', 'overcast', 'rainy']);
console.log(`The weather result is ${weatherScoreResult}`);