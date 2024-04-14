import { Counter } from './counter.js';
const counterInstance = new Counter(
	'Counter', 
	{
		value: 1, actions: ['minus', 'add'], 
		range: {
			use: true,
			minValue: 1,
			maxValue: 10,
		}
	}
);
counterInstance.render();
counterInstance.addEventListener('quantityChange', event => {
	console.log(event.detail);
;});