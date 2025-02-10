export const loadMenuTab = () => {
    const content = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const appetizersContainer = document.createElement("div");
    appetizersContainer.classList.add("appetizers", "menu-category");
    const appetizersHeader = document.createElement("h3");
    appetizersHeader.textContent = "Appetizers";
    appetizersContainer.append(appetizersHeader);

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    appetizersContainer.append(itemContainer);

    const appItem1 = document.createElement("div");
    appItem1.classList.add("item");
    const appItem1Header = document.createElement("h4");
    appItem1Header.textContent = "Pork Gyoza";
    appItem1.append(appItem1Header);
    const appItem1Description = document.createElement("p");
    appItem1Description.textContent = "Pan-fried gyoza with pork, sesame oil, cabbage, and green onions";
    appItem1.append(appItem1Description);
    itemContainer.append(appItem1);

    const appItem2 = document.createElement("div");
    appItem2.classList.add("item");
    const appItem2Header = document.createElement("h4");
    appItem2Header.textContent = "Sweet Chili Edamame";
    appItem2.append(appItem2Header);
    const appItem2Description = document.createElement("p");
    appItem2Description.textContent = "Steamed soybeans stir-fried in sweet chili sauce";
    appItem2.append(appItem2Description);
    itemContainer.append(appItem2);

    const appItem3 = document.createElement("div");
    appItem3.classList.add("item");
    const appItem3Header = document.createElement("h4");
    appItem3Header.textContent = "Miso Soup";
    appItem3.append(appItem3Header);
    const appItem3Description = document.createElement("p");
    appItem3Description.textContent = "Traditional Japanese broth with seaweed and green onions";
    appItem3.append(appItem3Description);
    itemContainer.append(appItem3);

    const appItem4 = document.createElement("div");
    appItem4.classList.add("item");
    const appItem4Header = document.createElement("h4");
    appItem4Header.textContent = "Egg Rolls";
    appItem4.append(appItem4Header);
    const appItem4Description = document.createElement("p");
    appItem4Description.textContent = "Deep fried crispy vegetable spring rolls";
    appItem4.append(appItem4Description);
    itemContainer.append(appItem4);

    const appItem5 = document.createElement("div");
    appItem5.classList.add("item");
    const appItem5Header = document.createElement("h4");
    appItem5Header.textContent = "Deep-fried Shrimp";
    appItem5.append(appItem5Header);
    const appItem5Description = document.createElement("p");
    appItem5Description.textContent = "Crispy, seasoned shrimp covered in panko crumbs";
    appItem5.append(appItem5Description);
    itemContainer.append(appItem5);

    const appItem6 = document.createElement("div");
    appItem6.classList.add("item");
    const appItem6Header = document.createElement("h4");
    appItem6Header.textContent = "Chicken Karaage";
    appItem6.append(appItem6Header);
    const appItem6Description = document.createElement("p");
    appItem6Description.textContent = "Japanese-style fried chicken flavored with ginger, garlic and sake and soy sauce";
    appItem6.append(appItem6Description);
    itemContainer.append(appItem6);


    menuContainer.append(appetizersContainer);
    content.append(menuContainer);
};