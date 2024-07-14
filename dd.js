window.navigation.addEventListener("navigate", async (event) => {

  console.log(document.body.getAttribute("data-theme"))
  //The default theme's name has changed to "default" but purple works for some reason, so it'll stay as it is in case they decide to change the default to something else.
  document.body.setAttribute("data-theme", "purple")

  // Define the class names you want to detect
  const targetClassNames = ['badge--blm'];

  // Function to check if an element has the target class names
  const hasTargetClassName = (element) => {
    return targetClassNames.some(className => element.classList.contains(className));
  };

  // Callback function to handle mutations
  const handleMutation = (mutationsList) => {
    mutationsList.forEach((mutation) => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && hasTargetClassName(node)) {
          node.remove();
          console.log('Node deleted')
        }
      });
    });
  };

  function checkForDiv() {
    const divToRemove = document.querySelector('.masonry__item.masonry__item--span70.card.animate--appear.ng-tns-c720736328-4');
    if(divToRemove) {
      console.log('div found')
      // Div found, delete it
      divToRemove.remove();
      clearInterval(checkInterval);
      console.log('cancelling interval checks')
    }
  }
  
  // Check for the div every 100 milliseconds
  const checkInterval = setInterval(checkForDiv, 100);

  // Create a MutationObserver instance
  const observer = new MutationObserver(handleMutation);

  // Start observing the target element for mutations
  observer.observe(document.body, { childList: true, subtree: true });
  }
)
