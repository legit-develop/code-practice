const counterEl = document.querySelector('.counter');
console.log(counterEl);
const barEl = document.querySelector('.loading-bar-front');
console.log(barEl);

let idx = 0;
updateNum()

function updateNum() {
    counterEl.innerText = `${idx}%`
    barEl.style.width = `${idx}%`
    idx++
    if(idx < 101) {
        setTimeout(updateNum, 20)
    }
}