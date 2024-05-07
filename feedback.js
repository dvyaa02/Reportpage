const scriptURL = 'https://script.google.com/macros/s/AKfycbyPq3y3MsfjIheFGbMfHkaq5NTge-1M7LonCkwoZhNhpNHh0sJK3D95Jek6zlOrSl1-/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})