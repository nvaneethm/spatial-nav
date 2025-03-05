# Sample Spatial Nav 
Sample TV navigation system using keyboard and state management
# State management 
State is maintained using a JS object that keeps track of 
- currentState : represents the current active component, which can be any of "grid", "sidebar", "topbar", "nested"
- sidebarIndex : currently focussed index in the sidebar
- topbarIndex : the currently focused index in the top bar
- gridIndex : the currently focused grid cell index in the main grid
- nestedIndex : the currently focused nested item index inside the selected grid

# Navigation 
- Sidebar :
  1. Up/Down : moves within sidebar
  2. Right/Esc : Switches focus to main grid
- Topbar :
  1. Right/Left : moves within topbar
  2. Down/Esc : Switches focus to main grid
- Main Grid
  1. Arrow keys: moves amoung the grid items, adjusting gridIndex
  2. Enter : switches it to nested
- Nested Grid
  1. Arrow keys: moves within the nested grid
  2. Esc/Out of bounds: returns focus to main grid


