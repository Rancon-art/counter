// On cherche les élements 
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// On suit le clik sur le bouton btnMibus
btnMinus.addEventListener('click', function () {

	// Проверяем чтобы счетчик был больше еденицы
	if ( parseInt(counter.innerText) > 1) {
		// Изменяем текст в счетчике уменьшая его на 1
		counter.innerText = --counter.innerText;
	}
	
});

// On suit le clik sur le bouton btnPlus
btnPlus.addEventListener('click', function () {
	//Изменяем текст в счетчике увеличивая его на 1
	counter.innerText = ++counter.innerText;
});




