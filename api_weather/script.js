const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': '9a598be50cmsh48be9c441f98decp152745jsn72c635122c0a',
		'X-RapidAPI-Host': 'weather1395.p.rapidapi.com'
    } 
};

const getTemperature = async () => {
    try {
        const response = await fetch('https://weather1395.p.rapidapi.com/temperature?url=Casablanca', options);
    const responseResult = await response.json();
    console.log(responseResult);
    }
    catch(error) {
        console.log(error);
    }
}

getTemperature(); 
// 8:30/42