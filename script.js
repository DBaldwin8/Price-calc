'use strict'

let element = document.querySelector('slider');
element.addEventListener('change', () => {
    return element.getAttribute('value');
})

const pageViews = function() {
    if (radio toggle id is 10k) {
        return '10k PAGEVIEWS';
    } ifelse (radio toggle id is 50k) {
        return '50K PAGEVIEWS';
    } ifelse (radio toggle id is 100k) {
        return '50K PAGEVIEWS';
    } ifelse (radio toggle id is 500k) {
        return '50K PAGEVIEWS';
    } ifelse (radio toggle id is 1M) {
        return '1M PAGEVIEWS';
    }
}

const price = function() {
    let price = null;
    if (radio toggle id is 10k) {
        price = 8;
    } elseif (radio toggle id is 50k) {
        price = 12;
    } elseif (radio toggle id is 100k) {
        price = 16;
    } elseif (radio toggle id is 500k) {
        price = 24;
    } elseif (radio toggle id is 1M) {
        price = 36;
    }

    if (yearly billing is true) {
        return price = (price*12)*0.75;
    } else {
        return price;
    }
}