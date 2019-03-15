/* V1: Instructions are executed as soon as the JS file is read
  Consequences: If the file is misplaced at the top of the page, the webpage will stay blank as long as the script runs.

  console.log(data);

*/

/* V2: Instructions are executed when the webpage is loaded (when the <body> tag triggers the "load" event).
  Consequences: Wherever the file is called, it won't slow down the initial load.
*/
document.body.onload = ()=>{
    //console.log(data);

    const rootElement = document.getElementById('heroes-gallery');
    for(let i=0;i<data.length;i++) {
        console.log(data[i]);

        /*
        let newP = document.createElement('p');
        newP.innerHTML = data[i].title;
        rootElement.appendChild(newP);
        */


        const newImg = document.createElement('img');
        newImg.classList.add("card-img-top");
        newImg.src = data[i].imgUrl;
        newImg.alt = data[i].imgAlt;

        const newCardTitle = document.createElement('h5');
        newCardTitle.classList.add("card-title");
        newCardTitle.innerHTML = data[i].title;

        const newCardP = document.createElement('p');
        newCardP.classList.add("card-text");
        newCardP.innerHTML = data[i].shortText;

        const newCardButton = document.createElement('button');
        newCardButton.classList.add("btn","btn-primary");
        newCardButton.innerHTML = data[i].shortText;

        const newCardBody = document.createElement('div');
        newCardBody.classList.add("card-body");
        newCardBody.append(newCardTitle);
        newCardBody.append(newCardP);
        newCardBody.append(newCardButton);
        
        const newCard = document.createElement('div');
        newCard.classList.add("col-12","col-sm-6","col-md-4","col-lg-3","col-xl-2","card");
        newCard.append(newImg);
        newCard.append(newCardBody);

        rootElement.append(newCard);
    }

}