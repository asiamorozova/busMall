in HTML:
Create a basic layout of the paige in HTML which contains 3 radio buttons with description/ name and images, hidden Next button that appears when user selects one of the 3 choices. 
Crate a section where results will be displayed 


in CSS: 
set up a layout for the images that are being selected 
all images should be the same size, aligned, next to the radio button 

in Javascript: 
create a products data page with id, image, and name

create an array that stores all the values for the product
set up a function that outputs three arrays with the values 
make those arrays random 
make it so that there are no duplicates as options for selection 

store user results data 


Class notes: 
////
import { productData } from './products.js';
// 
const productsData = products.slice();

//display three random products 
let totalVotes = 0;
// 
//display three new products  refresh products 
const displayThreeProducts = () =>{
   
   
   //randonm number 
    const randomINdex = math.floor(Math.random() * productsData.lenght);
    const randomProduct = productData[randomNumnber];
   

    function randomProduct (productData):
    //something to append it to 

    //some place to store products 

    //GET three random products from our data !

    //make sure the products are unique !

    //render three items on the screen as radio buttons with the same name and different values !

    ////select one of the three products =add event listener to select 

    //when selected a product, update the total votes and product vote details 

    //EVENT LISTENER 
const onSubmit = () => {

}
        //update productVoteDetails 
        //if there's coffee in the array, update the total votes 
        //if there's no coffee, push some coffee into the array 


};
// keep track of how many times user has voted, up to 25 
let totalVotes = 0;
// keep track of votes 
let productVoteDetail = [];
// initialize with all the data? 
//select one of the three products 

//keep track of how many times a product appears so we can build a percentage (times clicked/ times shown)

// reset the whole app 
    //reset the votes array ([]) and total votes (0) to their initial states aka set to the initial states 
    const initializeState = () => {
        totalVotes = 0;
        productVodeDetails = [];

        const reset = () => {
            initializeState();

        }
    }
//don't show data 




////


import products from './data.js';

const productsData = products.slice();

// keep track of how many times a user has voted, period (up to 25)
// keep track of votes for a given product
let totalVotes;
let productVoteDetails;


const initializeState = () => {
    totalVotes = 0;
    productVoteDetails = [];
};

initializeState();

// display three random NON-duplicated products
// display three NEW NON-duplicated poducts ***refresh products between votes***
const displayThreeProducts = () => {
    // GET three random products from our data
    const product1 = getRandomProduct(productsData);
    let product2 = getRandomProduct(productsData);
    let product3 = getRandomProduct(productsData);

    // make sure the products are unique/not the same
    while (product1.id === product2.id
        || product2.id === product3.id
        || product1.id === product3.id
    ) {
        product2 = getRandomProduct(productsData);
        product3 = getRandomProduct(productsData);
    }

    // render these three items on the screen as radio buttons with the same name and different values
    const radio1 = document.getElementById('product1');
    const radio2 = document.getElementById('product2');
    const radio3 = document.getElementById('product3');
    const radio1Span = document.getElementById('product1span');
    const radio2Span = document.getElementById('product2span');
    const radio3Span = document.getElementById('product3span');

    radio1.value = product1.id;
    radio2.value = product2.id;
    radio3.value = product3.id;
    radio1Span.textContent = product1.name;
    radio2Span.textContent = product2.name;
    radio3Span.textContent = product3.name;
};
const form = document.querySelector('form');
const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormaData (form);
    const selectedProductId()
;

    const formData = new FormData(form)
 console.log = (formData.get('product'));
 totalVotes++;

 



 form.assEventLIstener('submit', (e)+>
        e.preventDefault();


 )
    // EVENT LISTENER
    // add event listener to each radio button to select one of the three products
    // when they select a product, update the total votes
    // update the productVoteDetails
    // if theres coffee in the votes array, increment the votes for coffee in the array
    // if theres no coffee in the votes array, push some coffee into the array

};

const reset = () => {
    initializeState();
};

function getRandomProduct(someProducts) {
    const randomIndex = Math.floor(Math.random() * someProducts.length);
    const randomProduct = productsData[randomIndex];

    return randomProduct;
}

displayThreeProducts();

// reset the whole app when finished
    // set the votes array ([]) and total votes (0) to their initial states

// STRETCH keep track of how many times a product appears so we can build a percentage (times clicked / times shown)
// STRETCH: dont show the same product twice in a row
