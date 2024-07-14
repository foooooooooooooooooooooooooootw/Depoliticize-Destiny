const delay = ms => new Promise(res => setTimeout(res, ms));

window.navigation.addEventListener("navigate", async (event) => {

  console.log('location changed!')
  
  //race condition, will change soon
  await delay(1000)

  console.log(document.body.getAttribute("data-theme"))
  //The default theme's name has changed to "default" but purple works for some reason, so it'll stay as it is in case they decide to change the default to something else.
  document.body.setAttribute("data-theme", "purple")

  const divToRemove = document.querySelector('.masonry__item.masonry__item--span70.card.animate--appear');
  let divToRemove2 = document.querySelectorAll('.badge.badge--blm.ng-star-inserted');
  
  if (window.location.href === "https://trials.report/") {
    if (divToRemove) {
      divToRemove.parentNode.removeChild(divToRemove);
    } 
 } else{

  if (divToRemove2) {
      divToRemove2.forEach(function(element) {
        element.parentNode.removeChild(element);
    });

  console.log('executed')
 }
}
}
)
