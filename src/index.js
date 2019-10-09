console.log('%c HI', 'color: firebrick')

// CHALLENGE 1 
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function addImageToHtml(){
    fetch(imgUrl).then(response => response.json()).then(
        data => {
            let container = document.getElementById('dog-image-container');
            const imageUrls = data.message;
            for (const element of imageUrls){
                let newImage = document.createElement('img');
                newImage.setAttribute('src', element);
                container.appendChild(newImage);
            }  
        }        
    );
}

// CHALLENGE 2 & CHALLENGE 4
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let initialsObj = {};
function addBreedList(){
    fetch(breedUrl).then(response => response.json()).then(data => 
        {
            let container = document.getElementById('dog-breeds');
            const breeds = data.message;
            // let initialsObj = {};
            for (const key in breeds){
                let newLi = document.createElement('li');
                newLi.innerText = key;
                container.appendChild(newLi);
                let initial = key[0];
                if (initialsObj[initial] == undefined){
                    initialsObj[initial] = [];
                    initialsObj[initial].push(key);
                }else {
                    initialsObj[initial].push(key);
                }
            }
            // console.log(initialsObj);
        }
    );
}

//CHALLENGE 3
document.addEventListener('click', () =>{
    if (event.target.tagName == 'LI'){
        event.target.style.color = 'red';
    }
})

//CHALLENGE 4

document.addEventListener('change',()=>{
    if (event.target.tagName == 'SELECT'){
        for (const key in initialsObj){
            if (event.target.value === key){
                let array = initialsObj[key];
                console.log(array);
                let UlContainer = document.getElementById('dog-breeds');
                UlContainer.innerHTML = '';
                for (const item of array){
                    let newLi = document.createElement('li');
                    newLi.innerText = item;
                    UlContainer.appendChild(newLi);
                }  
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', () => {
    addImageToHtml();
    addBreedList();

});