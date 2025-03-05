export function updateFocus(state, elements) {
    document.querySelectorAll(".focused").forEach(el => el.classList.remove("focused"));
    document.querySelectorAll(".sidebar-focused").forEach(el => el.classList.remove("sidebar-focused"));
    document.querySelectorAll(".topbar-focused").forEach(el => el.classList.remove("topbar-focused"));
    document.querySelectorAll(".nested-focused").forEach(el => el.classList.remove("nested-focused"));
    const { currentState, sidebarIndex, topbarIndex, gridIndex, nestedIndex } = state;
    const { sidebarItems, topbarItems, grid } = elements;

    if (currentState === "sidebar") {
        sidebarItems[sidebarIndex].classList.add("sidebar-focused");
    } else if (currentState === "topbar") {
        topbarItems[topbarIndex].classList.add("topbar-focused");
    } else if (currentState === "grid") {
        grid.children[gridIndex].classList.add("focused");
    } else if (currentState === "nested") {
        const nestedItems =
            grid.children[gridIndex].querySelectorAll(".nested-item");
        nestedItems[nestedIndex].classList.add("nested-focused");
    }
}
