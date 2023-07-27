// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {
	// Объявляем переменную для счетчика
	let counter

	// Проверяем клик строго по кнопкам Плюс или Минус

	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter-wrapper')
		counter = counterWrapper.querySelector('[data-counter]')

	}

	//Проверяем явл ли эл по кот мы кликнули кнопкой Плюс
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	//Проверяем явл ли эл по кот мы кликнули кнопкой Минус
	if (event.target.dataset.action === 'minus') {

		//Проверяем чтобы счетчик был больше 1
		if (parseInt(counter.innerText) > 1) {
			// Изменяем текст в счетчике уменьшая его на 1
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			// Проверка на товар кот нах в корзине
			console.log('IN CART!!')
			//Удаляем товар из корзины
			event.target.closest('.cart-item').remove()

			//Отображение статуса корзины Пустая / Полная
			toggleCartStatus()

			//Перерасчет общей стоимости товаров в корзине
			calcCartPriceAndDelivery() 
		}
	}

		//Проверяем клик на + или - внутри корзины
		if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
			//Перерасчет общей стоимости товаров в корзине
			calcCartPriceAndDelivery() 
			
		}

})