let btn = document.querySelector('#add-time')
btn.addEventListener('click', cloneField)

function cloneField() {
  //duplicar os campos
  const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

  //pegar os campos?
  const fields = newFieldsContainer.querySelectorAll('input')

  //para cada campo limpar
  fields.forEach(field => console.log(field))
  //pegar o field do momento e limpa ele
    field.value = "";
  


  //inserir os dados duplicados na pagina
  document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}