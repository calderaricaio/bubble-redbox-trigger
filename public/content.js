
// Create and inject our RedBox component's styles
const style = document.createElement('style');
style.textContent = `
  .redbox-trigger {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background-color: red;
    z-index: 10000;
    display: none;
    animation: fadeIn 0.3s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(style);

// Create the RedBox element
const redBox = document.createElement('div');
redBox.className = 'redbox-trigger';
document.body.appendChild(redBox);

// Handle keyboard shortcut
document.addEventListener('keydown', (event) => {
  const isMac = navigator.platform.toLowerCase().includes('mac');
  const isModifierPressed = isMac ? event.metaKey : event.ctrlKey;
  
  if (isModifierPressed && event.key.toLowerCase() === 'e') {
    event.preventDefault();
    redBox.style.display = redBox.style.display === 'none' ? 'block' : 'none';
  }
});
