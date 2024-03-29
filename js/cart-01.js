// Div внутри корзины, в которой мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper')

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {

		// Находим карточку с товаром, внутри которой был совершен клик
		const card = event.target.closest('.card');

		//Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box]').innerText,
			weight: card.querySelector('[data-price-weight]').innerText,
			price: card.querySelector('[data-price-currency]').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		}

		// Собранные данные подставим в шаблон для товара в корзине
		const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
		<div class="cart-item__top">
			<div class="cart-item__img">
				<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
			</div>
			<div class="cart-item__desc">
				<div class="cart-item__title">${productInfo.title}</div>
				<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

				<!-- cart-item__details -->
				<div class="cart-item__details">

					<div class="items items--small counter-wrapper">
						<div class="items__control" data-action="minus">-</div>
						<div class="items__current" data-counter="">${productInfo.counter}</div>
						<div class="items__control" data-action="plus">+</div>
					</div>

					<div class="price">
						<div class="price__currency" data-price-weight>${productInfo.price}</div>
					</div>

				</div>
				<!-- // cart-item__details -->

			</div>
		</div>
	</div>`

	//Отобразим товар в корзине
	cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)

	}
})