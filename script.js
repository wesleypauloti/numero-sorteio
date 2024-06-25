document.addEventListener('DOMContentLoaded', () => {
    let maxNumber;
    let availableNumbers = [];

    const rangeForm = document.getElementById('rangeForm');
    const sortearBtn = document.getElementById('sortearBtn');
    const resultadoDiv = document.getElementById('resultado');
    const resultadoDiv2 = document.getElementById('resultado2');

    rangeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        maxNumber = parseInt(document.getElementById('maxNumber').value);
        availableNumbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
        sortearBtn.disabled = false;
        resultadoDiv.innerText = '';
    });

    sortearBtn.addEventListener('click', () => {
        if (availableNumbers.length === 0) {
            resultadoDiv2.innerText = 'Todos os números já foram sorteados!';            
            return;
        } else {
            resultadoDiv2.innerText = '';
        }

        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const numeroSorteado = availableNumbers.splice(randomIndex, 1)[0];
        resultadoDiv.innerText = `${numeroSorteado}`;
    });
});
