export function handleSidebarNavigation(event, state, config) {
    const { sidebarItems } = config;
    if (event.key === "ArrowDown" && state.sidebarIndex < sidebarItems.length - 1) {
      state.sidebarIndex++;
    } else if (event.key === "ArrowUp" && state.sidebarIndex > 0) {
      state.sidebarIndex--;
    } else if (event.key === "ArrowRight" || event.key === "Escape") {
      state.currentState = "grid";
    }
  }
  
  export function handleTopbarNavigation(event, state, config) {
    const { topbarItems } = config;
    if (event.key === "ArrowRight" && state.topbarIndex < topbarItems.length - 1) {
      state.topbarIndex++;
    } else if (event.key === "ArrowLeft" && state.topbarIndex > 0) {
      state.topbarIndex--;
    } else if (event.key === "ArrowDown" || event.key === "Escape") {
      state.currentState = "grid";
    }
  }
  
  export function handleGridNavigation(event, state, config) {
    const { cols, totalItems } = config;
    if (event.key === "ArrowRight") {
      if ((state.gridIndex % cols) < (cols - 1)) {
        state.gridIndex++;
      }
    } else if (event.key === "ArrowLeft") {
      if ((state.gridIndex % cols) > 0) {
        state.gridIndex--;
      } else {
        state.currentState = "sidebar";
      }
    } else if (event.key === "ArrowDown") {
      if (state.gridIndex + cols < totalItems) {
        state.gridIndex += cols;
      }
    } else if (event.key === "ArrowUp") {
      if (state.gridIndex - cols >= 0) {
        state.gridIndex -= cols;
      } else {
        state.currentState = "topbar";
      }
    } else if (event.key === "Enter") {
      state.currentState = "nested";
      state.nestedIndex = 0;
    }
  }
  
  export function handleNestedNavigation(event, state, config) {
    const { nestedCols, grid } = config;
    const nestedItems = grid.children[state.gridIndex].querySelectorAll(".nested-item");
  
    if (event.key === "ArrowRight" && (state.nestedIndex + 1) % nestedCols !== 0) {
      state.nestedIndex++;
    } else if (event.key === "ArrowLeft" && state.nestedIndex % nestedCols !== 0) {
      state.nestedIndex--;
    } else if (event.key === "ArrowUp" && state.nestedIndex - nestedCols >= 0) {
      state.nestedIndex -= nestedCols;
    } else if (event.key === "ArrowDown" && state.nestedIndex + nestedCols < nestedItems.length) {
      state.nestedIndex += nestedCols;
    } else if (event.key === "Escape") {
      state.currentState = "grid";
      state.nestedIndex = -1;
    } else {
      state.currentState = "grid";
      state.nestedIndex = -1;
    }
  }