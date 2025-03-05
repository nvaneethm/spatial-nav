import { createGrid } from "./Grid/index.js";
const grid = document.getElementById("grid");

const config = {
  grid,
  rows: 3,
  cols: 4,
  totalItems: 3 * 4,
  nestedRows: 2,
  nestedCols: 2,
};

createGrid(config.totalItems, config.nestedRows, config.nestedCols, grid);
