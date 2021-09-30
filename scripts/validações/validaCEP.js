export function recuperarCEP(input) {
    const cep = input.value.replace(/\D/g, '');
    console.log(cep);
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            'content-type': 'application/json;charset=utf-8',
        }
    }
    if(!input.validity.patternMismatch && !input.validity.valueMissing) {
        fetch(url, options).then(
            response => response.json()
        ).then(
            data => {
                const inputLougradouro = document.querySelector("[data-tipo='logradouro']")
                const inputCidade = document.querySelector("[data-tipo='cidade']")
                const inputEstado = document.querySelector("[data-tipo='estado']")
                console.log(data.localidade);
                inputLougradouro.value = data.logradouro;
                inputCidade.value = data.localidade;
                inputEstado.value = data.uf;

            }
        ).catch(
            erro => console.log(erro)
        )
    }
}

// Mascara

export function maskCEP(inputCEP) {
    if(inputCEP.value.length === 5) {
        inputCEP.value+='-';
    }
}