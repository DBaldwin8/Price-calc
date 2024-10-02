'use strict'

const pageViewStrings = [
    '10k PAGEVIEWS',
    '50K PAGEVIEWS',
    '100K PAGEVIEWS',
    '500K PAGEVIEWS',
    '1M PAGEVIEWS',
]

const pricesArr = [
    8,
    12,
    16,
    25,
    36
]

const pageViewSelector = document.querySelector('#page-views');
const pageViewElement = document.querySelector('#slider');

const pricePerSelector = document.querySelector('#price-per');
const monthOrYearSelector = document.querySelector('#month-or-year');

const yearlyDiscountRetrieve = document.querySelector('#toggle')

pageViewElement.addEventListener('change', () => {
    let arrayIndex = pageViewElement.value
    let pageViews = pageViewStrings[arrayIndex];
    console.log(pageViews);
    pageViewSelector.textContent = `${pageViews}`;
    let pricePer = pricesArr[arrayIndex];
    pricePerSelector.textContent = `$${pricePer}.00`

    /*
    if (!yearlyDiscountRetrieve.checked) {
        pricePerSelector.textContent = `$${pricePer}.00`
        monthOrYearSelector.textContent = '/month'
    } else {
        pricePer = (pricePer*12)*0.75;
        pricePerSelector.textContent = `$${pricePer}.00`
        monthOrYearSelector.textContent = '/year'
    }
    */
}) 


yearlyDiscountRetrieve.addEventListener('change', () => {
    let arrayIndex = pageViewElement.value
    let pricePer = pricesArr[arrayIndex]
    if (!yearlyDiscountRetrieve.checked) {
        pricePerSelector.textContent = `$${pricePer}.00`
        monthOrYearSelector.textContent = '/month'
    } else {
        pricePer = (pricePer*12)*0.75;
        pricePerSelector.textContent = `$${pricePer}.00`
        monthOrYearSelector.textContent = '/year'
    }
})