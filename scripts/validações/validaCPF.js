export function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '');
    let mensagem = '';
    if(!cpfRepetido(cpfFormatado) ||
    !cpfEsturtura(cpfFormatado)) {
        mensagem = 'CPF Invalido';
    }
    input.setCustomValidity(mensagem);
}

function cpfRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true;
    valoresRepetidos.forEach(valor => {
        if(valor==cpf) cpfValido = false;
    }) 
    return cpfValido;
}

function cpfEsturtura(cpf) {
    const multiplicador = 10;
    
    return checaDigitoVerificador(cpf, multiplicador);
}
function checaDigitoVerificador(cpf, multiplicador) {
    if(multiplicador>=12) return true;
    let multiplicadorInicial = multiplicador;
    let soma = 0;
    let contador = 0;
    const cpfSemDigitosVer = cpf.substring(0, multiplicador - 1).split('');
    const digitoVerificador = cpf.charAt(multiplicador - 1);

    for(let i = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
        soma = soma + cpfSemDigitosVer[contador] * multiplicadorInicial;
        contador++;
    }

    if(digitoVerificador == confirmaDigito(soma)) {
        return checaDigitoVerificador(cpf, multiplicador + 1);
    }
    return false;
}

function confirmaDigito(soma) {
    if(11 - (soma % 11)>=10) {
        return 0;
    }
    return 11 - (soma % 11);
}

// MASCARA

export function maskCPF(inputCPF) {
    if(inputCPF.value.length == 3 ||
        inputCPF.value.length == 7) {
            inputCPF.value += '.';
        }
    if(inputCPF.value.length == 11) {
        inputCPF.value += '-';
    }
}