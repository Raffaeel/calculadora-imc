const calcular = document.getElementById('calcular'); 
        calcular.addEventListener('click', calcularIMC);

        function calcularIMC() {
            const nome = document.getElementById('nome').value;
            const altura = parseFloat(document.getElementById('altura').value);
            const peso = parseFloat(document.getElementById('peso').value);
            const resultado = document.getElementById('resultado');

            if (nome && altura && peso) {
                const valorImc = (peso / (altura * altura)).toFixed(2);// peso divido pela altura elevado ao quadrado
                resultado.textContent = `IMC de ${nome}: ${valorImc}`;

                if (valorImc >= 18.5 && valorImc < 25) {
                    resultado.textContent += ' - Peso normal';
                } else if (valorImc >= 25 && valorImc < 30) {
                    resultado.textContent += ' - Acima do peso';
                } else if (valorImc >= 30 && valorImc < 40) {
                    resultado.textContent += ' - Obeso';
                } else {
                    resultado.textContent += ' - Super obeso';
                }
            } else {
                resultado.textContent = "Por favor, preencha todos os campos.";
            }
        }