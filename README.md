# 🩺 Calculadora de IMC (Índice de Massa Corporal)

## 🚀 Sobre o Projeto

Este projeto é uma aplicação web simples e responsiva desenvolvida para calcular o Índice de Massa Corporal (IMC) de um usuário com base em seu peso e altura.

O IMC é uma medida internacional usada para avaliar se uma pessoa está em seu peso ideal, com sobrepeso ou obesidade. A aplicação fornece o resultado exato do IMC e uma classificação com feedback visual (que depende da implementação no `style.css`).

## ✨ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica do formulário. |
| **CSS3** | Estilização  |
| **JavaScript (Puro)** | Lógica de cálculo, validação de dados e manipulação do DOM. |

## ⚙️ Como Funciona o Cálculo

A lógica da aplicação, implementada no `main.js`, segue os seguintes passos:

1.  **Captura de Dados:** Obtém os valores de Peso (kg) e Altura (m) do formulário.
2.  **Validação:** Verifica se os campos estão preenchidos, se os valores são números e se são positivos.
3.  **Cálculo:** Aplica a fórmula: `IMC = Peso / (Altura * Altura)`.
4.  **Classificação:** O resultado é comparado às faixas de IMC para determinar a classificação (Peso ideal, Sobrepeso, Obesidade, etc.) e atribuir uma classe CSS específica para feedback visual.

## 🖥️ Instalação e Execução

Como se trata de uma aplicação puramente *front-end* (HTML, CSS e JavaScript), a execução é muito simples.

1.  **Clone o Repositório:**
    ```bash
    git clone [https://www.youtube.com/watch?v=351MZvGXpnY](https://www.youtube.com/watch?v=351MZvGXpnY)
    ```
2.  **Abra o Arquivo:**
    Navegue até a pasta do projeto e abra o arquivo `index.html` diretamente no seu navegador.

### Estrutura de Arquivos

Certifique-se de que a estrutura de arquivos no seu projeto está correta para que os links funcionem:
