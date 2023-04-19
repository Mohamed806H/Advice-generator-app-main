const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumber = document.querySelector('.advice-number')
const adviceQuote= document.querySelector('.advice-quote')
const DataBtn = document.querySelector('.app__header-section-button')

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json();
    return advice
};

const renderAdvice = (adviceObject) => {
    const {id, advice} = adviceObject;
    adviceNumber.textContent = `${id}`;
    adviceQuote.textContent = advice;
};

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip;
    renderAdvice(advice);
};

window.addEventListener('DOMContentLoaded', () => {
    DataBtn.addEventListener('click', generateNewAdvice)
})