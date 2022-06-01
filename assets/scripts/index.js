let switchEl = document.getElementById('switch')
let offBulb = document.getElementById('offbulb')
let onBulb =document.getElementById('onbulb')
let isOff = true
let isOn = false
switchEl.addEventListener('click', () => {
    if(isOff){
        onBulb.classList.remove('hide')
        offBulb.classList.add('hide')
        isOn = true
    }else if(isOn){
        onBulb.classList.add('hide')
        offBulb.classList.remove('hide')
    }
})