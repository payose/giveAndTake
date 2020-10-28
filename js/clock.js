setInterval(setClock, 2)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const hourDisplay = document.getElementById('hourDisplay')
const minuteDisplay = document.getElementById('minuteDisplay')
const secondsDisplay = document.getElementById('secondsDisplay')
const milliSecondsDisplay = document.getElementById('milliSecondsDisplay')

const timeFormat = document.getElementById('timeFormat')
const nameFooter = document.getElementsByClassName('name')
const display = document.getElementsByClassName('display')

function setClock() {
	currentDate = new Date()
	secondsRatio = currentDate.getSeconds()/60
	minutesRatio = (secondsRatio + currentDate.getMinutes())/60
	hoursRatio = (minutesRatio + currentDate.getHours())/12

	hourDisplay.innerHTML = currentDate.getHours()
	minuteDisplay.innerHTML = currentDate.getMinutes()
	secondsDisplay.innerHTML = currentDate.getSeconds()
	milliSecondsDisplay.innerHTML = currentDate.getMilliseconds()

	setRotation(secondHand, secondsRatio)
	setRotation(minuteHand, minutesRatio)
	setRotation(hourHand, hoursRatio)

	timeFormat.addEventListener('click', () => {
		toggle()
		})
}

function toggle(){
	hourDisplay.innerHTML = currentDate.getHours() - 12;
		document.querySelectorAll('[data-display]').classList.remove('display24');
		document.querySelectorAll('[data-display]').classList.add('display12');
		nameFooter.classList.remove('name24');
		nameFooter.classList.add('name12');
}
	

function setRotation(element, rotationRatio){
	element.style.setProperty('--rotation',rotationRatio * 360);
}

setClock()

/*timeFormat.addEventListener('click', () => {
		hourDisplay.innerHTML = currentDate.getHours() - 12
	})*/
