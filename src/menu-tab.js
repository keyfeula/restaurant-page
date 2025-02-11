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


    const entreesContainer = document.createElement("div");
    entreesContainer.classList.add("entrees", "menu-category");
    const entreesHeader = document.createElement("h3");
    entreesHeader.textContent = "Entrees";
    entreesContainer.append(entreesHeader);
    const itemContainerEntrees = document.createElement("div");
    itemContainerEntrees.classList.add("item-container");
    entreesContainer.append(itemContainerEntrees);

    const entreeItem1 = document.createElement("div");
    entreeItem1.classList.add("item");
    const entreeItem1Header = document.createElement("h4");
    entreeItem1Header.textContent = "Veggie Bowl";
    entreeItem1.append(entreeItem1Header);
    const entreeItem1Description = document.createElement("p");
    entreeItem1Description.textContent = "A medley of steamed veggies (cabbage, zucchini, broccoli, & carrots) served on a bed of rice";
    entreeItem1.append(entreeItem1Description);
    itemContainerEntrees.append(entreeItem1);

    const entreeItem2 = document.createElement("div");
    entreeItem2.classList.add("item");
    const entreeItem2Header = document.createElement("h4");
    entreeItem2Header.textContent = "Chicken Teriyaki Bowl";
    entreeItem2.append(entreeItem2Header);
    const entreeItem2Description = document.createElement("p");
    entreeItem2Description.textContent = "Grilled, all-natural chicken with our signature sauce and served on a bed of rice";
    entreeItem2.append(entreeItem2Description);
    itemContainerEntrees.append(entreeItem2);

    const entreeItem3 = document.createElement("div");
    entreeItem3.classList.add("item");
    const entreeItem3Header = document.createElement("h4");
    entreeItem3Header.textContent = "Yakitori";
    entreeItem3.append(entreeItem3Header);
    const entreeItem3Description = document.createElement("p");
    entreeItem3Description.textContent = "5 juicy grilled chicken swekers glazed with our signature sauce";
    entreeItem3.append(entreeItem3Description);
    itemContainerEntrees.append(entreeItem3);

    const entreeItem4 = document.createElement("div");
    entreeItem4.classList.add("item");
    const entreeItem4Header = document.createElement("h4");
    entreeItem4Header.textContent = "Tonkotsu Pork Ramen";
    entreeItem4.append(entreeItem4Header);
    const entreeItem4Description = document.createElement("p");
    entreeItem4Description.textContent = "Chashu, egg, black mushroom, crispy onion, green onion, black garlic oil";
    entreeItem4.append(entreeItem4Description);
    itemContainerEntrees.append(entreeItem4);

    const entreeItem5 = document.createElement("div");
    entreeItem5.classList.add("item");
    const entreeItem5Header = document.createElement("h4");
    entreeItem5Header.textContent = "Spicy Tuna Roll";
    entreeItem5.append(entreeItem5Header);
    const entreeItem5Description = document.createElement("p");
    entreeItem5Description.textContent = "8 spicy yellowfin tuna rolls served with a side of miso soup";
    entreeItem5.append(entreeItem5Description);
    itemContainerEntrees.append(entreeItem5);

    menuContainer.append(entreesContainer);


    const dessertsContainer = document.createElement("div");
    dessertsContainer.classList.add("desserts", "menu-category");
    const dessertsContainerHeader = document.createElement("h3");
    dessertsContainerHeader.textContent = "Desserts";
    dessertsContainer.append(dessertsContainerHeader);
    const itemContainerDesserts = document.createElement("div");
    itemContainerDesserts.classList.add("item-container");
    dessertsContainer.append(itemContainerDesserts);

    const dessertItem1 = document.createElement("div");
    dessertItem1.classList.add("item");
    const dessertItem1Header = document.createElement("h4");
    dessertItem1Header.textContent = "Matcha Ice Cream";
    const dessertItem1Description = document.createElement("p");
    dessertItem1Description.textContent = "Ice cream made from authentic Japanese matcha";
    dessertItem1.append(dessertItem1Header);
    dessertItem1.append(dessertItem1Description);
    itemContainerDesserts.append(dessertItem1);

    const dessertItem2 = document.createElement("div");
    dessertItem2.classList.add("item");
    const dessertItem2Header = document.createElement("h4");
    dessertItem2Header.textContent = "Japanese Cheesecake";
    const dessertItem2Description = document.createElement("p");
    dessertItem2Description.textContent = "Combining elements of a rich, velvety custard and a pillowy, cottony sponge cake with a slightly tart flavor";
    dessertItem2.append(dessertItem2Header);
    dessertItem2.append(dessertItem2Description);
    itemContainerDesserts.append(dessertItem2);

    const dessertItem3 = document.createElement("div");
    dessertItem3.classList.add("item");
    const dessertItem3Header = document.createElement("h4");
    dessertItem3Header.textContent = "Red Bean Bun";
    const dessertItem3Description = document.createElement("p");
    dessertItem3Description.textContent = "Soft, fluffy steamed buns filled with sweet, creamy red bean paste";
    dessertItem3.append(dessertItem3Header);
    dessertItem3.append(dessertItem3Description);
    itemContainerDesserts.append(dessertItem3);

    menuContainer.append(dessertsContainer);


    const beveragesContainer = document.createElement("div");
    beveragesContainer.classList.add("beverages", "menu-category");
    const beveragesContainerHeader = document.createElement("h3");
    beveragesContainerHeader.textContent = "Beverages";
    beveragesContainer.append(beveragesContainerHeader);
    const itemContainerBeverages = document.createElement("div");
    itemContainerBeverages.classList.add("item-container");
    beveragesContainer.append(itemContainerBeverages);

    const beverageItem1 = document.createElement("div");
    beverageItem1.classList.add("item");
    const beverageItem1Header = document.createElement("h4");
    beverageItem1Header.textContent = "Green Tea";
    const beverageItem1Description = document.createElement("p");
    beverageItem1Description.textContent = "Sencha green tea served iced or hot";
    beverageItem1.append(beverageItem1Header);
    beverageItem1.append(beverageItem1Description);
    itemContainerBeverages.append(beverageItem1);

    const beverageItem2 = document.createElement("div");
    beverageItem2.classList.add("item");
    const beverageItem2Header = document.createElement("h4");
    beverageItem2Header.textContent = "Sake";
    const beverageItem2Description = document.createElement("p");
    beverageItem2Description.textContent = "Premium junmai sake from Japan";
    beverageItem2.append(beverageItem2Header);
    beverageItem2.append(beverageItem2Description);
    itemContainerBeverages.append(beverageItem2);

    const beverageItem3 = document.createElement("div");
    beverageItem3.classList.add("item");
    const beverageItem3Header = document.createElement("h4");
    beverageItem3Header.textContent = "Fountain Drink";
    const beverageItem3Description = document.createElement("p");
    beverageItem3Description.textContent = "Coke, Sprite, Dr Pepper, or Fanta";
    beverageItem3.append(beverageItem3Header);
    beverageItem3.append(beverageItem3Description);
    itemContainerBeverages.append(beverageItem3);

    const beverageItem4 = document.createElement("div");
    beverageItem4.classList.add("item");
    const beverageItem4Header = document.createElement("h4");
    beverageItem4Header.textContent = "Yuzu Lemonade";
    const beverageItem4Description = document.createElement("p");
    beverageItem4Description.textContent = "Lemonade made from the Japanese yuzu fruit";
    beverageItem4.append(beverageItem4Header);
    beverageItem4.append(beverageItem4Description);
    itemContainerBeverages.append(beverageItem4);

    menuContainer.append(beveragesContainer);



    content.append(menuContainer);
};