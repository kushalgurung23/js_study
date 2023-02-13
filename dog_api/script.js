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