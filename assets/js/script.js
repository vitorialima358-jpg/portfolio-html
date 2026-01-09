const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoNome = document.getElementById("name");
  const errNome = document.getElementById("errNome");

  if (campoNome.value.length < 3) {
    errNome.innerText = "O nome deve ter no mínimo 3 caracteres.";
    campoNome.focus();
    return;
  } else {
    errNome.innerText = "";
  }

  const campoEmail = document.getElementById("email");
  const errEmail = document.getElementById("errEmail");

  if (!campoEmail.value.match(emailRegex)) {
    errEmail.innerText = "Digite um e-mail válido. Ex: teste@email.com";
    campoEmail.focus();
    return;
  } else {
    errEmail.innerText = "";
  }

  const campoSubject = document.getElementById("subject");
  const errSubject = document.getElementById("errSubject");

  if (campoSubject.value.length < 5) {
    errSubject.innerText = "O assunto deve ter no mínimo 5 caracteres.";
    campoSubject.focus();
    return;
  } else {
    errSubject.innerText = "";
  }

  const campoMessage = document.getElementById("message");

  alert("Formulário enviado com sucesso!");

  campoNome.value = "";
  campoEmail.value = "";
  campoSubject.value = "";
  campoMessage.value = "";
});
