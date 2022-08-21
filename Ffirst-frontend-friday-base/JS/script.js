
// Objects. 
const myInfoObject = {
    giraffe: { name: 'giraf', picture: '/img/ffcd.jpg', description: 'The giraffe is a tall African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant- hoofed herbivorous- on Earth.' },
    dog: { name: 'hund', picture: '/img/dog.jpg', description: 'The German Shepherd is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899.' },
    cat: { name: 'kat', picture: '/img/cat.jpg', description: 'The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family and is often referred to as the domestic cat to distinguish.' },
    mouse: { name: 'mus', picture: '/img/mus.jpeg', description: 'A mouse is a small mammal. Characteristically, mice are known to have a pointed snout, small rounded ears, and a high breeding rate.' },
};

let galleryCardClass = 'gallerycard';

// The app lives here
const myApp = document.getElementById('app');


buildGallery()

// The function is created inside a 'for in' loop .
function buildGallery() {
    for (let myIndex in myInfoObject) {
        let myName = myInfoObject[myIndex].name;
        let myUrl = myInfoObject[myIndex].picture;
        let myDescription = myInfoObject[myIndex].description;

       buildCard(myName, myUrl, myDescription) 
    }
}

function buildCard(myHeadline, myUrl, myDescription, clearParent) {
    if (clearParent) {
        myApp.innerHTML = ' ';
    }
    
    //The variables are created
    const myCard = document.createElement('figure');
    const cardHeadline = document.createElement('h2');
    const cardImage = document.createElement('img');
    const cardDescription = document.createElement('p');
    // console.log(cardImage);

    //Variables get attributes and new variables are created
    cardHeadline.innerText = myHeadline;
    cardImage.src = myUrl;
    cardDescription.innerText = myDescription;

     
    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);

    myCard.classList.add(galleryCardClass);

   // It will all be linked to our section which has the id myApp.
    myApp.appendChild(myCard);
}
