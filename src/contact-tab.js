export const loadContactTab = () => {
    const content = document.querySelector("#content");
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact Us";
    contactContainer.append(contactHeader);

    const contactForm = document.createElement("form");
    contactContainer.append(contactForm);

    const nameField = document.createElement("div");
    nameField.classList.add("name-field");
    const firstNameContainer = document.createElement("div");
    firstNameContainer.classList.add("first-name-container");
    const firstNameLabel = document.createElement("label");
    firstNameLabel.setAttribute("for", "firstName");
    firstNameLabel.textContent = "First Name";
    const firstNameInput = document.createElement("input");
    firstNameInput.setAttribute("id", "firstName");

    const lastNameContainer = document.createElement("div");
    lastNameContainer.classList.add("last-name-container");
    const lastNameLabel = document.createElement("label");
    lastNameLabel.setAttribute("for", "lastName");
    lastNameLabel.textContent = "Last Name";
    const lastNameInput = document.createElement("input");
    lastNameInput.setAttribute("id", "lastName");

    contactForm.append(nameField);
    nameField.append(firstNameContainer);
    firstNameContainer.append(firstNameLabel);
    firstNameContainer.append(firstNameInput);
    nameField.append(lastNameContainer);
    lastNameContainer.append(lastNameLabel);
    lastNameContainer.append(lastNameInput);

    const emailField = document.createElement("div");
    emailField.classList.add("email-field");
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("type", "email");
    emailField.append(emailLabel);
    emailField.append(emailInput);
    contactForm.append(emailField);

    const subjectField = document.createElement("div");
    subjectField.classList.add("subject-field");
    const subjectLabel = document.createElement("label");
    subjectLabel.setAttribute("for", "subject");
    subjectLabel.textContent = "Subject";
    const subjectInput = document.createElement("input");
    subjectInput.setAttribute("id", "subject");
    subjectField.append(subjectLabel);
    subjectField.append(subjectInput);
    contactForm.append(subjectField);

    const messageField = document.createElement("div");
    messageField.classList.add("message-field");
    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message";
    const messageInput = document.createElement("textarea");
    messageInput.setAttribute("id", "message");
    messageField.append(messageLabel);
    messageField.append(messageInput);
    contactForm.append(messageField);

    content.append(contactContainer);
};