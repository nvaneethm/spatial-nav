export function createGrid(totalItems, nestedRows, nestedCols, gridContainer) {
    for (let i = 0; i < totalItems; i++) {
      const parentItem = document.createElement("div");
      parentItem.classList.add("grid-item");
      parentItem.setAttribute("tabindex", "0");
  
      // Create nested grid
      const nestedGrid = document.createElement("div");
      nestedGrid.classList.add("nested-grid");
  
      for (let j = 0; j < nestedRows * nestedCols; j++) {
        const nestedItem = document.createElement("div");
        nestedItem.classList.add("nested-item");
        nestedItem.textContent = `${i + 1}-${j + 1}`;
        nestedItem.setAttribute("tabindex", "0");
        nestedGrid.appendChild(nestedItem);
      }
      parentItem.appendChild(nestedGrid);
      gridContainer.appendChild(parentItem);
    }
  }