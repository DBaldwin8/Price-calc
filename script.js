'use strict'

const pageViews = function (pageCountValue) {
    if (pageCountValue === '10k') {
        return '10k PAGEVIEWS';
    } else if (pageCountValue ===  '50k') {
        return '50K PAGEVIEWS';
    } else if (pageCountValue === '100k') {
        return '100K PAGEVIEWS';
    } else if (pageCountValue === '500k') {
        return '500K PAGEVIEWS';
    } else if (pageCountValue === '1M') {
        return '1M PAGEVIEWS';
    }
}

let pageViewElement = document.querySelector('.slider');
let pageViewRetrieve = pageViewElement.addEventListener('change', () => {
    return pageViews(pageViewElement.getAttribute('value'));

})

let yearlyDiscountRetrieve = document.querySelector('.checkbox').checked;
const price = function (pageViewsSelected, yearlyDiscoutChecked) {
    let price = undefined;
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

    if (yearlyDiscoutChecked) {
        return price = (price*12)*0.75;
    } else {
        return price;
    }
}

console.log(pageViews('50k'));
console.log(price('50k', true));