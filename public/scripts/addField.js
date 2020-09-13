//procura o botão 
document.querySelector("#add-time")

//quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField(){
    console.log("")
    //Duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos. que campos??
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ""
    });

    //colocar na pagina. onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}