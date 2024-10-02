'use strict'

const getPageViews = function (pageCountValue) {
    if (pageCountValue === 0) {
        return '10k PAGEVIEWS';
    } else if (pageCountValue ===  1) {
        return '50K PAGEVIEWS';
    } else if (pageCountValue === 2) {
        return '100K PAGEVIEWS';
    } else if (pageCountValue === 3) {
        return '500K PAGEVIEWS';
    } else if (pageCountValue === 4) {
        return '1M PAGEVIEWS';
    }
}

const pageViewSelector = document.querySelector('#page-views');

let pageViewElement = document.querySelector('#slider');

let pageViewRetrieve = pageViewElement.addEventListener('change', () => {
    let pageViews = getPageViews(pageViewElement.value);
    pageViewSelector.textContent = `${pageViews}`;
})

const PRICE = function (pageViewsSelected,) {
    let price;
    
    let yearlyDiscountRetrieve = document.querySelector('.checkbox').checked;

    if (pageViewsSelected === '10k') {
        price = 8;
    } else if (pageViewsSelected ===  '50k') {
        price = 12;
    } else if (pageViewsSelected === '100k') {
        price = 16;
    } else if (pageViewsSelected === '500k') {
        price = 24;
    } else if (pageViewsSelected === '1M') {
        price = 36;
    }

    if (yearlyDiscountRetrieve) {
        return price = (price*12)*0.75;
    } else {
        return price;
    }
}

console.log(getPageViews('50k'));
console.log(PRICE('50k', true));


let pricePerSelector = document.querySelector('.price-per');
pricePerSelector.textContent