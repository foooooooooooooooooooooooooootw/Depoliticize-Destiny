const delay = ms => new Promise(res => setTimeout(res, ms));

window.onload = async function() {
    await delay(1000)
    console.log(document.body.getAttribute("data-theme"))
    document.body.setAttribute("data-theme", "purple")

    const divToRemove = document.querySelector('.masonry__item.masonry__item--span70.card.animate--appear');
    const divToRemove2 = document.querySelector('.badge.badge--blm.ng-star-inserted');
    
    if (divToRemove) {
        // Remove the div from the DOM
        divToRemove.parentNode.removeChild(divToRemove);
      } else {
        console.log('Div not found');
      }


    if (divToRemove2) {
        // Remove the div from the DOM
        divToRemove2.parentNode.removeChild(divToRemove2);
      } else {
        console.log('Div not found');
      }

    console.log('executed')
};
