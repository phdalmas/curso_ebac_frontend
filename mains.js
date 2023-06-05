const form = document.getElementById('form-numeros');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const mensagemSucesso = `O número <b>${numeroB.value}</b> é maior que o número <b>${numeroA.value}</b>`
    const mensagemErro = 'O número A precisa ser menor que o número B!'
    
    
    if(numeroB.value>numeroA.value) {
        const containerMensagemSucesso = document.querySelector('.success-menssage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        numeroA.style.border = '';
        numeroA.value = '';
        numeroB.value = '';
        document.querySelector('.error-menssage').style.display = '';
        const containerMensagemErro = document.querySelector('.error-menssage');

    } else {
        document.querySelector('.error-menssage').style.display = 'block';
        const containerMensagemErro = document.querySelector('.error-menssage');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        numeroA.style.border = '1px solid red';
        numeroA.value = '';
        numeroB.value = '';
        document.querySelector('.success-menssage').style.display = '';
        const containerMensagemSucesso = document.querySelector('.success-menssage');
    }
})