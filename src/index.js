const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    reason: e.target.reason.value,
    message: e.target.message.value,
  };

  renderConfirmation(formData);
});

const renderConfirmation = (formData) => {
  const heading = document.createElement("h1");
  heading.innerText = "Submission Confirmation";

  const uName = document.createElement("p");
  uName.textContent = formData.name;

  const uEmail = document.createElement("p");
  uEmail.textContent = formData.email;

  const uPhone = document.createElement("p");
  uPhone.textContent = formData.phone;

  const uReason = document.createElement("p");

  const uMessage = document.createElement("p");
  uMessage.textContent = formData.message;

  const section = document.querySelector("section");
  section.innerHTML = '';

  section.append(heading, uName, uEmail, uPhone, uReason, uMessage);
};
