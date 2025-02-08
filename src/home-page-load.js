import restaurantImg from "./img/restaurant.jpg";

export const loadInitialPage = () => {
    const content = document.querySelector("#content");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-section");
    const img = document.createElement("img");
    img.src = restaurantImg;
    imgContainer.append(img);

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-section");
    const reservationsSection = document.createElement("div");
    reservationsSection.classList.add("reservations");
    const reservationsHeader = document.createElement("h3");
    reservationsHeader.textContent = "Dinner Reservations";
    const reservationsContent = document.createElement("p");
    reservationsContent.textContent = `We are now open for dinner service Thursday through Sunday! 
        We’ll be accepting limited walk-ins and reservations on OpenTable.`;
    reservationsSection.append(reservationsHeader);
    reservationsSection.append(reservationsContent);
    textContainer.append(reservationsSection);

    const parkingInfoContainer = document.createElement("div");
    parkingInfoContainer.classList.add("parking-info");
    const parkingInfoHeader = document.createElement("h3");
    parkingInfoHeader.textContent = "Parking Info";
    const parkingInfoContent = document.createElement("p");
    parkingInfoContent.textContent = `Parking is in back of restaurant. If lot is full
        there is an overflow lot across the street`;
    parkingInfoContainer.append(parkingInfoHeader);
    parkingInfoContainer.append(parkingInfoContent);
    textContainer.append(parkingInfoContainer);

    const businessHoursContainer = document.createElement("div");
    businessHoursContainer.classList.add("business-hours");
    const businessHoursHeader = document.createElement("h3");
    businessHoursHeader.textContent = "Business Hours";
    const mondayToThursdayText = document.createElement("p");
    mondayToThursdayText.textContent = "Monday-Thursday: 12pm-9pm";
    const fridayAndSatText = document.createElement("p");
    fridayAndSatText.textContent = "Friday and Saturday: 12pm-11pm";
    const sundayText = document.createElement("p");
    sundayText.textContent = "Sunday: Closed";
    businessHoursContainer.append(businessHoursHeader);
    businessHoursContainer.append(mondayToThursdayText);
    businessHoursContainer.append(fridayAndSatText);
    businessHoursContainer.append(sundayText);
    textContainer.append(businessHoursContainer);

    content.append(imgContainer);
    content.append(textContainer);
};