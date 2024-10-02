'use strict'

let pageViewElement = document.querySelector('.slider');
let pageViewRetrieve = pageViewElement.addEventListener('change', () => {
    return pageViewElement.getAttribute('value');
})

const pageViews = function(pageViewRetrieve) {
    if (pageViewRetrieve === '10k') {
        return '10k PAGEVIEWS';
    } else if (pageViewRetrieve ===  '50k') {
        return '50K PAGEVIEWS';
    } else if (pageViewRetrieve === '100k') {
        return '100K PAGEVIEWS';
    } else if (pageViewRetrieve === '500k') {
        return '500K PAGEVIEWS';
    } else if (pageViewRetrieve === '1M') {
        return '1M PAGEVIEWS';
    }
}

let yearlyDiscountRetrieve = document.querySelector('.checkbox').checked;

const price = function(pageViewRetrieve, yearlyDiscountRetrieve) {
    let price = undefined;
    if (pageViewRetrieve === '10k') {
        price = 8;
    } else if (pageViewRetrieve ===  '50k') {
        price = 12;
    } else if (pageViewRetrieve === '100k') {
        price = 16;
    } else if (pageViewRetrieve === '500k') {
        price = 24;
    } else if (pageViewRetrieve === '1M') {
        price = 36;
    }

    if (yearlyDiscountRetrieve) {
        return price = (price*12)*0.75;
    } else {
        return price;
    }
}

console.log(pageViews);
console.log(price);