const startLearningButton = document.querySelector('#start-learning');
const focusCards = document.querySelectorAll('.focus-card');

startLearningButton.addEventListener('click', () => {
	document.querySelector('#learning').scrollIntoView({ behavior: 'smooth' });
});

focusCards.forEach((card) => {
	card.addEventListener('click', () => {
		if (card.dataset.page) {
			window.location.href = card.dataset.page;
			return;
		}

		focusCards.forEach((focusCard) => {
			focusCard.setAttribute('aria-pressed', String(focusCard === card));
		});
	});
});
