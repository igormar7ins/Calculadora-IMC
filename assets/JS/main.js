const form = document.getElementById('formulario')
const inputAltura = document.querySelector('#alturaUsuario')
const inputPeso = document.querySelector('#pesoUsuario')
const resultado = document.querySelector('.resultado')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const alturaStr = inputAltura.value.trim();
    const pesoStr = inputPeso.value.trim();

    // 1. VALIDAÇÃO DE CAMPOS VAZIOS
    if (!alturaStr && !pesoStr) {
        resultado.innerHTML = '<p class="erro"> Por favor, digite sua Altura e seu Peso. </p>';
        return;
    }
    else if (!alturaStr) {
        resultado.innerHTML = '<p class="erro"> Por favor, digite sua Altura. </p>';
        return;
    }
    else if (!pesoStr) {
        resultado.innerHTML = '<p class="erro"> Por favor, digite seu Peso. </p>';
        return;
    }

    // Tenta converter para número, após a validação de string vazia
    const altura = parseFloat(alturaStr.replace(',', '.'));
    const peso = parseFloat(pesoStr.replace(',', '.'));

    // 2. Validação Numérica e Positiva
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.innerHTML = '<p class="erro"> O valor inserido deve ser um número válido e maior que zero. </p>';
        return;
    }

    // 3. Cálculo e Classificação
    const imc = peso / (altura * altura);

    // Array de classificação 
    const classificacaoArray = ['Abaixo do peso', 'Peso ideal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III (Mórbida)'];
    let classificacaoTexto = '';
    let classificacaoClasse = ''; // NOVA VARIÁVEL para a classe CSS

    // Lógica de classificação 
    if (imc < 18.5) {
        classificacaoTexto = classificacaoArray[0];
        classificacaoClasse = 'imc-low';        // ATENÇÃO (Laranja)
    } else if (imc < 25) {
        classificacaoTexto = classificacaoArray[1];
        classificacaoClasse = 'imc-normal';     // IDEAL (Verde)
    } else if (imc < 30) {
        classificacaoTexto = classificacaoArray[2];
        classificacaoClasse = 'imc-overweight'; // ALERTA LEVE (Amarelo)
    } else if (imc < 35) {
        classificacaoTexto = classificacaoArray[3];
        classificacaoClasse = 'imc-obesity-1';  // RISCO MODERADO (Laranja Escuro)
    } else if (imc < 40) {
        classificacaoTexto = classificacaoArray[4];
        classificacaoClasse = 'imc-obesity-2';  // RISCO ALTO (Vermelho Claro)
    } else {
        classificacaoTexto = classificacaoArray[5];
        classificacaoClasse = 'imc-obesity-3';  // PERIGO (Vermelho Forte)
    }

    // 4. Cria e Exibe a mensagem final formatada 
    const mensagemFinal = `Seu IMC é: <strong>${imc.toFixed(2)}</strong>. <br> Classificação: <strong>${classificacaoTexto}</strong>`;

    // Usa a classe específica para a classificação de cor
    resultado.innerHTML = `<p class="${classificacaoClasse}">${mensagemFinal}</p>`;
});
