if (this.reminderContent.childNodes.length > 2) {
    var ionCard = document.createElement("ion-card");
    var ionCardHeader = document.createElement("ion-card-header");
    var image = document.createElement("img");
    var ptag = document.createElement("p");
    var divider = document.createElement("div");
    var ionCardContent = document.createElement("ion-card-content");
    var viewmap = document.createElement("h1");
    var remove = document.createElement("h1");

    image.src = this.activitesData[0].animals[0].asset;
    ptag.innerHTML = this.activitesData[0].animals[0].activity;

    divider.classList.add("card-divider");
    viewmap.classList.add("view-map");
    remove.classList.add("remove");
    viewmap.innerHTML = "View Map";
    remove.innerHTML = "Remove from Reminder";
    remove.setAttribute("id", "remover1");

    clock9.classList.add("feeding-time-bar");
    text.innerHTML = this.activitesData[0].time;

    /* ionic attribute */
    ionCard.classList.add("card");
    ionCard.classList.add("card-ios");
    ionCard.classList.add("card-md");
    ionCardHeader.classList.add("card-header");
    ionCardHeader.classList.add("card-header-ios");
    ionCardHeader.classList.add("card-header-md");
    ionCardContent.classList.add("card-content");
    ionCardContent.classList.add("card-content-ios");
    ionCardContent.classList.add("card-content-md");

    ionCard.appendChild(ionCardHeader);
    ionCard.appendChild(divider);
    ionCard.appendChild(ionCardContent);
    ionCardHeader.appendChild(image);
    ionCardHeader.appendChild(ptag);
    ionCardContent.appendChild(viewmap);
    ionCardContent.appendChild(remove);

    this.elementRef.nativeElement.querySelector("#feedingtime09").appendChild(ionCard);
    this.elementRef.nativeElement.querySelector("#remover1").addEventListener(
        'click', this.onRemoveReminder.bind(this, this.activitesData[0].animals[0].id)
    );

    this.remind1Text.style.color = "#ccc";
    this.remind1Text.innerHTML = "Added to Reminder";
} else {
    var feedingTime = document.createElement("div");
    var clock9 = document.createElement("div");
    var text = document.createElement("span");

    var ionCard = document.createElement("ion-card");
    var ionCardHeader = document.createElement("ion-card-header");
    var image = document.createElement("img");
    var ptag = document.createElement("p");
    var divider = document.createElement("div");
    var ionCardContent = document.createElement("ion-card-content");
    var viewmap = document.createElement("h1");
    var remove = document.createElement("h1");

    image.src = this.activitesData[0].animals[0].asset;
    ptag.innerHTML = this.activitesData[0].animals[0].activity;

    divider.classList.add("card-divider");
    viewmap.classList.add("view-map");
    remove.classList.add("remove");
    viewmap.innerHTML = "View Map";
    remove.innerHTML = "Remove from Reminder";
    remove.setAttribute("id", "remover1");

    clock9.classList.add("feeding-time-bar");
    text.innerHTML = this.activitesData[0].time;

    /* ionic attribute */
    ionCard.classList.add("card");
    ionCard.classList.add("card-ios");
    ionCard.classList.add("card-md");
    ionCardHeader.classList.add("card-header");
    ionCardHeader.classList.add("card-header-ios");
    ionCardHeader.classList.add("card-header-md");
    ionCardContent.classList.add("card-content");
    ionCardContent.classList.add("card-content-ios");
    ionCardContent.classList.add("card-content-md");

    feedingTime.setAttribute("id", "feedingtime09");
    feedingTime.appendChild(clock9);
    feedingTime.appendChild(ionCard);
    clock9.appendChild(text);

    ionCard.appendChild(ionCardHeader);
    ionCard.appendChild(divider);
    ionCard.appendChild(ionCardContent);
    ionCardHeader.appendChild(image);
    ionCardHeader.appendChild(ptag);
    ionCardContent.appendChild(viewmap);
    ionCardContent.appendChild(remove);

    this.reminderContent.appendChild(feedingTime);

    this.elementRef.nativeElement.querySelector("#remover1").addEventListener(
        'click', this.onRemoveReminder.bind(this, this.activitesData[0].animals[0].id)
    );

    this.remind1Text.style.color = "#ccc";
    this.remind1Text.innerHTML = "Added to Reminder";
}