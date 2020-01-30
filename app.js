
import { productData } from './products.js';





const productsData = productData.slice();

function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
}


//keep track of how many times a user has voted (up to 25)
//keep track of votes 

let totalVotes = 0;
let productVoteDetails = [];

const initializeState = () => {
    let totalVotes = 0;
    let productVoteDetail = [];

};

//display random products (no duplicates)
//display three new products and refresh products between votes 

const displayThreeProducts = () => {
    //get three random products from data 
    const product1 = getRandomProduct(productsData);
    let product2 = getRandomProduct(productsData);
    let product3 = getRandomProduct(productsData);

    //unique products by id 
    while (product1.id === product2.id
        || product2.id === product3.id
        || product1.id === product3.id
    ) {
        product2 = getRandomProduct(productsData);
        product3 = getRandomProduct(productsData);

    }
    //render these three items on the screen as radio buttons with the same name and different values 
    const radio1 = document.getElementById('product1');
    const radio2 = document.getElementById('product2');
    const radio3 = document.getElementById('product3');

    const randomProduct1 = document.getElementById('description1');
    const randomProduct2 = document.getElementById('description2');
    const randomProduct3 = document.getElementById('description3');

    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');

    // radio1.value = product1.id;
    // radio2.value = product2.id;
    // radio3.value = product3.id;

    image1.src = product1.image;
    image2.src = product2.image;
    image3.src = product3.image;

    randomProduct1.textContent = product1.name;
    randomProduct2.textContent = product2.name;
    randomProduct3.textContent = product3.name;


};
//console.log(form);

const form = document.querySelector('form');
const submit = document.getElementById('next-button');

form.addEventListener(submit, (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const selectProductId = formData.get('product');

    totalVotes++;

    const productInVotesArray = findById(productVoteDetails, selectProductId);

    if (productInVotesArray) {
        productInVotesArray.votes++;
    } else {
        productVoteDetails.push({
            id: selectProductId,
            votes: 1,
        });
    }

});


// document.querySelector('input[name = "product"]:checked').checked = false;

localStorage.setItem('votes', JSON.stringify(productVoteDetails));

if (totalVotes >= 3) {
    window.location = 'results.html';
}


function reset() {
    initializeState();
}

function getRandomProduct(someProducts) {
    const randomIndex = Math.floor(Math.random() * someProducts.length);
    const randomProduct = productsData[randomIndex];

    return randomProduct;
}

displayThreeProducts();


