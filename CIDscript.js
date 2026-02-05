const scriptURL = 'https://script.google.com/macros/s/AKfycbyVxWD4OAGLp5X84wAYxae3HJwMN66alDTXntRXrHPSPjxPFe_JENtsh3Wdad0vOChqSg/exec'

const form = document.forms['register-form']

document.querySelectorAll('.uppercase').forEach(input => {
  input.addEventListener('input', () => {
    input.value = input.value.toUpperCase();
  });
});

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => alert('Thank you! You have successfully registered the instructor.'))
	.then(() => { window.location.reload(); })
	.catch(error => console.error('Error!', error.message))

})
