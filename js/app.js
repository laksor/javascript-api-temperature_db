
const API_KEY = `e2f02b2123c076151e918adf9e3d90c5`;

const searchTemp = () => {
    const city = document.getElementById('search-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}
searchTemp();

const displayTemp = temp => {
    
}