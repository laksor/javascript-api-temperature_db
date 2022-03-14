
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
        div.classList.add('bg-light');
        div.classList.add('py-5');
        div.classList.add('text-dark');
        div.classList.add('shadow-lg');
        div.classList.add('rounded');
        div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png" alt="">
            <h1>${temp.name}</h1>
            <h3><span>${temp.main.temp}</span>&deg;F</h3>
            <h2>country: ${temp.sys.country} </h2>
            <h3>condition : ${temp.weather[0].main}</h3>
        `;
        divT.appendChild(div);
}

// using inner text
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTempp = tempp => {
    setInnerText('city', tempp.name);
    setInnerText('temperature', tempp.main.temp);
    setInnerText('condition', tempp.weather[0].main);
}