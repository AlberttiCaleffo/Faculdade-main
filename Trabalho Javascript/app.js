function validarFormulario(formId, emailId, passwordId = null) {
  const form = document.getElementById(formId);
  const emailInput = document.getElementById(emailId);
  const passwordInput = document.getElementById(passwordId);

  if (emailInput.value.trim() === '' || (passwordInput && passwordInput.value.trim() === '')) {
    alert('Por favor, preencha todos os campos.');
    return false;
  }
  return true;
}

const formularios = document.querySelectorAll('.formulario');

formularios.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailId = form.dataset.email; 
    const passwordId = form.dataset.password; 

    if (validarFormulario(form.id, emailId, passwordId)) {
      alert('Formulário enviado com sucesso!');
    }
  });
});

const logins = document.querySelectorAll('.login');

logins.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailId = form.dataset.email; 
    const passwordId = form.dataset.password; 

    if (validarFormulario(form.id, emailId, passwordId)) {
      alert('Login efetuado com sucesso!');
    }
  });
});

const serviceCards = document.querySelectorAll('.produtos div');

serviceCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});