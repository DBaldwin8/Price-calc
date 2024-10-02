'use strict'

const getPageViews = function (pageCountValue) {
    if (pageCountValue == 0) {
        return '10k PAGEVIEWS';
    } else if (pageCountValue ==  1) {
        return '50K PAGEVIEWS';
    } else if (pageCountValue == 2) {
        return '100K PAGEVIEWS';
    } else if (pageCountValue == 3) {
        return '500K PAGEVIEWS';
    } else if (pageCountValue == 4) {
        return '1M PAGEVIEWS';
    }
}

const pageViewStrings = [
    '10k PAGEVIEWS',
    '50K PAGEVIEWS',
    '100K PAGEVIEWS',
    '500K PAGEVIEWS',
    '1M PAGEVIEWS',
]

const pageViewSelector = document.querySelector('#page-views');

let pageViewElement = document.querySelector('#slider');
/*
let pageViews = getPageViews(pageViewElement.value);
console.log(pageViewElement.value);
*/
pageViewElement.addEventListener('change', () => {
    let arrayIndex = pageViewElement.value
    let pageViews = pageViewStrings[arrayIndex];
    console.log(pageViews);
    pageViewSelector.textContent = `${pageViews}`;
})

const PRICE = function (pageViewsSelected) {
    let price;
    
    let yearlyDiscountRetrieve = document.querySelector('#toggle').checked;

    if (pageViewsSelected === 0) {
        price = 8;
    } else if (pageViewsSelected ===  1) {
        price = 12;
    } else if (pageViewsSelected === 2) {
        price = 16;
    } else if (pageViewsSelected === 3) {
        price = 24;
    } else if (pageViewsSelected === 4) {
        price = 36;
    }

    if (yearlyDiscountRetrieve) {
        return price = (price*12)*0.75;
    } else {
        return price;
    }
}



let pricePerSelector = document.querySelector('.price-per');