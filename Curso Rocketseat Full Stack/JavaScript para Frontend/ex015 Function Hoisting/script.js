// function hoisting

sayMyName()

function sayMyName() {
	console.log('Rick')
}

const sayMyCatName = function() {
	console.log('Alvin')
}

sayMyCatName()
