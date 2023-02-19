const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '10a0ee735emshe0bb42c2e55369ep15dbfbjsn31206a2214fb',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

const getTemperature = async () => {
    try {
        const response = await fetch('https://open-weather13.p.rapidapi.com/city/london', options);
        const responseResult = await response.json();
        console.log(responseResult.weather[0].description);
    }
    catch(error) {
        console.log(error);
    }
}

getTemperature(); 
