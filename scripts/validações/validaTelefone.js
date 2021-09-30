export function maskTelefone(inputTelefone) {
    if(inputTelefone.value.length === 2) {
        inputTelefone.value += " "
    }
    if (inputTelefone.value.length === 8) {
        inputTelefone.value += "-";
    }
}