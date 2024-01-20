const l = (log) => {
    console.log(log)
}

let pageCounter = 1;

let btn = document.getElementById('btn');
let animalContainer = document.getElementById('animal-info')

btn.addEventListener('click', function() {
    
    if (pageCounter >= 3) { 
        btn.classList.add('hideMe');
    }

    let ourRequest = new XMLHttpRequest();

    ourRequest.open(
        'GET', 
        `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);

    ourRequest.onload = function() {
        let ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    }

    ourRequest.send();
    pageCounter++;
    l(pageCounter)
});

const renderHTML = (data) => {
    let newHTML = data.map(animal => 
        `<p>${animal.name} is a ${animal.species} 
        is who dislikes ${animal.foods.dislikes.join(' and ')} 
        and likes ${animal.foods.likes.join(' and ')}.</p>`).join('');
    animalContainer.innerHTML += newHTML;
    l(data);
}