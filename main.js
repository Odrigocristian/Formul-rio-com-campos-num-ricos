    function validarFormulario() {
        var campoA = parseFloat(document.getElementById('campoA').value);
        var campoB = parseFloat(document.getElementById('campoB').value);
    
        if (isNaN(campoA) || isNaN(campoB)) {
        alert('Por favor, insira números válidos.');
        return false;
        }
    
        if (campoB <= campoA) {
        alert('O número B deve ser maior que o número A.');
        return false;
        }
    
        return true;
    }
    