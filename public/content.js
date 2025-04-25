
// Handle keyboard shortcut
document.addEventListener('keydown', (event) => {
  const isMac = navigator.platform.toLowerCase().includes('mac');
  const isModifierPressed = isMac ? event.metaKey : event.ctrlKey;
  
  if (isModifierPressed && event.key.toLowerCase() === 'e') {
    event.preventDefault();
    
    // Find and focus the search assets input
    const searchInput = document.querySelector('input[placeholder="Search assets"]');
    if (searchInput) {
      searchInput.focus();
    }
  }
});
