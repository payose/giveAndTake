class calcultor{
	constructor(previousButton, currentButton){
		this.previousButton = previousButton
		this.currentButton = currentButton
	}

	clear(){
		this.current = ''
		this.previous = ""
		this.operation = undefined

	}

	delete(){

	}

	appendNumber(number){
		this.current = number
	}

	chooseOperation(operation){

	}

	compute(){

	}


	updateDisplay(){
		this.currentOperandTextElement.innerText = this.current
	}
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operators]')
const eqaulsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allclearButton = document.querySelectorAll('[data-allclear]')
const previousButton = document.querySelectorAll('[data-delete]')
const currentButton = document.querySelectorAll('[data-current']) 

const calcultor = new calculator(previousButton,currentButton) 

numberButtons.forEach(button =>{
	button.addEventListener('click', () =>{
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay()
	})
})