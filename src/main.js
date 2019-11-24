import {createMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createSortTemplate} from './components/sort.js';
import {createBoardTemplate} from './components/board.js';
import {createCardTemplate} from './components/card.js';
import {createEditCardTemplate} from './components/edit-card.js';
import {createLoadButtonTemplate} from './components/load-button.js';

const CARD_COUNT = 3;

const render = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

const main = document.querySelector(`.main`);
const mainControl = main.querySelector(`.main__control`);

render(mainControl, createMenuTemplate());
render(main, createFilterTemplate());
render(main, createBoardTemplate());

const board = document.querySelector(`.board`);
render(board, createSortTemplate(), `afterBegin`);

const boardTasks = document.querySelector(`.board__tasks`);
render(boardTasks, createEditCardTemplate());

for (let i = 0; i < CARD_COUNT; i++) {
  render(boardTasks, createCardTemplate());
}

render(board, createLoadButtonTemplate());
