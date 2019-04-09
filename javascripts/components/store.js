import book from '../helpers/book.js';
import util from '../helpers/util.js';

const addCartEvent = (e) => {
    e.preventDefault();
    const bookInfo = book.getBook();
    console.log(bookInfo);
}; 

const makeStore = () => {
    const bookInfo = book.getBook();
    let domString = '<h2>Our Only Book:</h2>';
    domString += `<h3>${bookInfo.price}</h3>`;
    domString +=  `<img src="${bookInfo.image}"  class ="bookCover"alt="book cover">`;
    domString += `<button id="cart-button" class="btn btn-danger">Add To Cart</button>`;
    util.printToDom('store-container', domString);
    document.getElementById('cart-button').addEventListener('click', addCartEvent);
};

export default { makeStore };