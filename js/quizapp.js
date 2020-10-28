const paragraphText = document.getElementById('subject')
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons'); 



let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})

function startGame(){
	startButton.classList.add('hide');
	paragraphText.classList.add('hide');
	shuffledQuestions = questions.sort(() => Math.random() - .5)
	console.log(shuffledQuestions)/***************/
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide');
	setNextQuestion()
}
 
function setNextQuestion(){
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
	questionElement.innerText = question.question;
	question.answers.forEach(answer => {
		const button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add('btn');
		if (answer.correct){
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click',selectAnswer);
		answerButtonsElement.appendChild(button);
	});
}

function resetState(){
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while(answerButtonsElement.firstChild){
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e){
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)

	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
		button.disabled = true;
	})
	console.log(currentQuestionIndex + 1)/***************/
	console.log(shuffledQuestions.length)/***************/

	if (shuffledQuestions.length > currentQuestionIndex + 1){

		nextButton.classList.remove('hide')
	}
	else{
		startButton.innerText = 'Restart'
		startButton.classList.remove('hide')
	}
	

}

function setStatusClass(element, correct){
	clearStatusClass(element)
	if (correct){
		element.classList.add('correct');

	}
	else{
		element.classList.add('wrong')
	}
}

function clearStatusClass(element){
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const questions = [
	{
		question:'Whats my name...',
		answers:[
		{text:'bob daddy', correct:true},
		{text:'Dj Khalid', correct:false},
		{text:'Don Baba J', correct:false},
		{text:'Otedola', correct:false}
		]
	},
	{
		question:'What random number am i thinking about',
		answers:[
		{text:'78', correct:false},
		{text:'Give no fuck', correct:true},
		{text:'21', correct:false},
		{text:'7', correct:false}
		]
	},
	{
		question:'An acronym for a past President of Nigeria',
		answers:[
		{text:'PSD', correct:false},
		{text:'BSC', correct:false},
		{text:'OPD', correct:false},
		{text:'GEJ', correct:true}
		]
	},
	{
		question:'States of matter',
		answers:[
		{text:'solid', correct:false},
		{text:'liquid', correct:false},
		{text:'molecular', correct:true},
		{text:'gaseous', correct:false}
		]
	},
	{
		question:'How many countries the African continent have?',
		answers:[
		{text:'51', correct:false},
		{text:'36', correct:false},
		{text:'31', correct:false},
		{text:'54', correct:true}
		]
	},
	{
		question:'Name a famous striker',
		answers:[
		{text:'ASUU', correct:true},
		{text:'ASUU', correct:true},
		{text:'ASUU', correct:true},
		{text:'ASUU', correct:true}
		]
	},
	{
		question:'The Earth is cylinderical',
		answers:[
		{text:'True', correct:false},
		{text:'False', correct:true}
		]
	},
	{
		question:"Who's your dady?",
		answers:[
		{text:'Otedola', correct:true},
		{text:'Dangote', correct:false},
		{text:'Babalow', correct:false},
		{text:'Osibanjo', correct:false}
		]
	}
]

