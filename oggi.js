const myForm = document.getElementById("myForm");
const button = myForm.querySelector("button");
const firstNameField = myForm.querySelector("#first-name"); 
const lastNameField = myForm.querySelector("#last-name"); 
const messageField = myForm.querySelector("#message"); 
const errorMessage = document.querySelector("#error-message");
const commentList = document.querySelector("#comment-list");

 // Empêcher le comportement par défaut de l'envoi du formulaire
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

button.addEventListener("click", (e) => {
  const firstName = firstNameField.value;
  const lastName = lastNameField.value;
  const message = messageField.value;

  if (firstName === "" || lastName === "" || message === "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    addComment(firstName, lastName, message);
    clearForm();
  }
});
  // Ajouter un commentaire
function addComment(firstName, lastName, message) { 
  const sampleComment = document.querySelector("#comment-list .flex-1.py-10").cloneNode(true);
  const commentName = sampleComment.querySelector(".font-medium.text-gray-900");
  const commentText = sampleComment.querySelector(".prose.prose-sm.mt-4.max-w-none.text-gray-500");

  commentName.textContent = `${firstName} ${lastName}`;
  commentText.textContent = message;

  commentList.appendChild(sampleComment);
}
  // Vider les champs du formulaire
function clearForm() {
  firstNameField.value = ""; 
  lastNameField.value = ""; 
  messageField.value = ""; 
}