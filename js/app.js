
const API_KEY = `e2f02b2123c076151e918adf9e3d90c5`;

const searchTemp = () => {
    const city = document.getElementById('search-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
}

const displayTemp = temp => {
    const divT = document.getElementById('divT');
    divT.textContent = '';
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png" alt="">
            <h1>${temp.name}</h1>
            <h3><span>${temp.main.temp}</span>&deg;F</h3>
            <h2>country: ${temp.sys.country} </h2>
            <h1 class="lead">condition : ${temp.weather[0].main}</h1>
        `;
        divT.appendChild(div);
}