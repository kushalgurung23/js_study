const getNewDogButton = document.getElementById("getNewDogButton");
const dogImage = document.getElementById("dogImageDiv");

const fetchDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(json=> {
        dogImage.innerHTML = `<img src ='${json.message}' height="300px" width="300px"/>`;
        console.log(json);
    })
}

getNewDogButton.onclick = () => {
    fetchDogImage();
}


// ASYNC AWAIT
const getDog = async () => {
    const tipObject = {rating:0, tip:0, pay:0, review: 0};
    try {
        const kURL = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(kURL);
    const data = await response.json();
    console.log(data.message);
    tipObject.rating = 5;
    tipObject.tip = .1;
    tipObject.pay = 10;
    tipObject.review = 5;
    return tipObject;
    }
    catch(error) {
        console.log(error);
        tipObject.rating = 1;
    tipObject.tip = 0;
    tipObject.pay = 0;
    tipObject.review = 1;
    return tipObject; 
    }
}

// ways to get promise value is either await by wrapping in an async function or using then keyword
getDog().then(value => console.log(value)); 

