function getFocus(){
	document.getElementById("firstname").focus() ;

}


function Predict(){
	var firstname = document.getElementById('firstname').value;
	var middlename = document.getElementById('middlename').value;
	var surname = document.getElementById('surname').value;

	var name = (`your full name is 
		${firstname} ${middlename} ${surname}`);

	document.getElementById("fullName").innerHTML = name;

	document.getElementById("modal").style.display = "block";

}

function Close(){
	document.getElementById("modal").style.display = "none";
}

var next = document.getElementById("surname");
next.addEventListener("keypress", function(event){
	if (event.keyCode === 13) {
	   	event.preventDefault();
	   	document.getElementById("predictBtn").click();
	}
})


function NextFocus(event){
	IdArray = ["firstname", "middlename", "surname"];
	for(var i = 0; i < IdArray.length; i++){
		if (event.keyCode === 13) {
		   	event.preventDefault();
		   	document.getElementById(IdArray[i]).focus();
		   	console.log(IdArray[i])
		}
	}
}


//document.getElementById("demo").onkeypress = function() {myFunction()};



/*****MODIFIYING THIS BLOCKvar IdArray = ["firstname", "middlename", "surname"];



for(var i = 0; i < IdArray.length; i++){
	var nextInput = document.getElementById(IdArray[i])
	nextInput.addEventListener("keypress", function(key)){

		if(key.keyCode === 13) && (key.target.id === IdArray[i]){
			key.preventDefault();
			document.getElementById(IdArray[i++]).focus();	
		}
		}

}
******/


































/*class User{
	constructor(firstname, middlename, surname){
		this.firstname = firstname;
		this.middlename = middlename;
		this.surname = surname;

	}

	getfullName(){
		let fullName = `you must be ${this.firstname} ${this.middlename} ${this.surname}`;
		return fullName;
	}
}

const userName = new User("Pius", "Samuel", "Daniel");

const fullname = document.querySelector('#fullName');
fullname.innerText = userName.getfullName();

console.log(userName.getfullName());

console.log(userName);
console.log(userName.firstname)*/