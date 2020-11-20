const txtElement = ['Web Developer masa depan yang sedang belajar di Haktiv8'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})();