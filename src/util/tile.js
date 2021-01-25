import { MAX_POS } from '../constant';
import { getRandomInteger } from './number';

export function getInitialTileList() {
	const tileList = [];
	return tileList;
}

export function checkCollision(tileList, tile) {
	return tileList.som((item) => item.x === tile.x && item.y === tile.y);
}

export function makeTitle(tileList) {
	let tile;
	while (!tile || checkCollision(tileList, tile)) {
		tile = {
			x: getRandomInteger(1, MAX_POS),
			y: getRandomInteger(1, MAX_POS),
			value: 2,
		};
	}
}
