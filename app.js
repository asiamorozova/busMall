
import products from './products.js';


const productsData = products.slice();

function findById(items, id) {
    for (let i = 0; i < items.lenght; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
}


//keep track of how many times a user has voted (up to 25)
//keep track of votes 

let totalVotes

const initializeState = () => {
    let totalVotes = 0;
    let productVoteDetail = [];

};

initializeState();

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

    const randomProduct1 = document.getElementById('randomProduct1');
    const randomProduct2 = document.getElementById('randomProduct2');
    const randomProduct3 = document.getElementById('randomProduct3');

    radio1.value = product1.id;
    radio2.value = product2.id;
    radio3.value = product3.id;

    randomProduct1.textContent = product1.name;
    randomProduct2.textContent = product2.name;
    randomProduct3.textContent = product3.name;
};
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new formData(form);

    const selectProductId = formData.get('product');

    totalVotes++;
    //if an item has been voted for before 
    const productInVotesArray = findById(productVoteDetails, selectProductId);

    if (productInVotesArray) {
        productInVotesArray.votes++;
    } else {
        productVoteDetails.push({
            id: selectProductId,
            votes: 1,
        });
    }

    document.querySelector('input[name = "product"]:checked').checked = false;

    localStorage.setItem('votes', JSON.stringify(productVoteDetails));

    if (totalVotes >= 3) {
        window.location = 'results.html';
    }

    displayThreeProducts();

});

function reset() {
    initializeState();
}

function getRandomProduct(someProducts) {
    const randomIndex = Math.floor(Math.random() * someProducts.length);
    cont randomProduct = productsData[randomIndex];

    return randomProduct;

}










//if an item has been voted for before 


//event listener 
//when they select a product, update the total votes 
//update the productVoteDetails 
//if there are votes for an item, increment the votes in the array 
//if there's no votes for an item, push item into array 

//reset the whole app when finished 
    //set the votes array ([]) amd total votes (0) to their initial states 