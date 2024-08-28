window.navigation.addEventListener("navigate", () => {
  console.log(document.body.getAttribute("data-theme"));

  // Update the theme attribute
  document.body.setAttribute("data-theme", "purple");

  // Interval to periodically check for the div and remove it
  const checkInterval = setInterval(checkForDiv, 100);

  function checkForDiv() {
    const divToRemove = document.querySelectorAll('.masonry__item');

    divToRemove.forEach(item => {
      // Check if the item contains the additional classes we are interested in
      if (item.classList.contains('masonry__item--span70') && 
          item.classList.contains('card') &&
          item.classList.contains('animate--appear')) {
        // Remove the item from the DOM
        item.remove();
        clearInterval(checkInterval); // Stop the interval once the item is removed
      }
    });
  }

  // Define the class names you want to detect
  const targetClassNames = ['badge--blm'];

  // Function to check if an element has the target class names
  const hasTargetClassName = (element) => {
    return targetClassNames.some(className => element.classList.contains(className));
  };

  // Callback function to handle mutations
  const handleMutation = (mutationsList) => {
    mutationsList.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && hasTargetClassName(node)) {
          node.remove();
          console.log('Node deleted');
        }
      });
    });
  };

  // Create a MutationObserver instance
  const observer = new MutationObserver(handleMutation);

  // Start observing the body for mutations
  observer.observe(document.body, { childList: true, subtree: true });
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'restartContentScript') {
    console.log("Restart message received");
    document.querySelectorAll('.masonry__item--span70').forEach(e => e.remove());
  }
});
