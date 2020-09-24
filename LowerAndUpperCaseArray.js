const planets = [
    'MeRcuRy',
    'vEnuS',
    'eArTh',
    'MarS',
    'jUpitER'
]


const main = document.querySelector('main');
let html = '';
alert(`These are your planets as you have them spelled ${planets} , what would you like done to them ?`)

let action = prompt('1. Lowercase all letters , 2. Capitalize all letters , 3. Capitalize just the first letters of each word')

if ( action == 1 ) {
    for ( let i = 0 ; i < planets.length ; i++) {
        const newPlanets = planets[i].toLowerCase()
        html += `<h2>${newPlanets}</h2>`;
        main.innerHTML = html; 
    }
}

else if ( action == 2) {
    for ( let i = 0 ; i < planets.length ; i++) {
        const newPlanets = planets[i].toUpperCase()
        html += `<h2>${newPlanets}</h2>`;
        main.innerHTML = html; 
    }
}

else if ( action == 3) {
    for ( let i = 0 ; i < planets.length ; i++) {
        const newPlanets = planets[i].charAt(0).toUpperCase() + planets[i].slice(1).toLowerCase();
        html += `<h2>${newPlanets}</h2>`;
        main.innerHTML = html; 
    }
}
else {
    alert('please reload and enter a valid number')
}


