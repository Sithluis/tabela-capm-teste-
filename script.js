// Função para calcular o total de pontos e corrigir os NaN
function calcularPontos() {
    const linhas = document.querySelectorAll("#tabela-campeonato tbody tr");

    linhas.forEach(linha => {
        const posicao1 = parseInt(linha.querySelector('[data-posicao1]').dataset.posicao1 || 0);
        const kills1 = parseInt(linha.querySelector('[data-kills1]').dataset.kills1 || 0);

        const posicao2 = parseInt(linha.querySelector('[data-posicao2]').dataset.posicao2 || 0);
        const kills2 = parseInt(linha.querySelector('[data-kills2]').dataset.kills2 || 0);

        const posicao3 = parseInt(linha.querySelector('[data-posicao3]').dataset.posicao3 || 0);
        const kills3 = parseInt(linha.querySelector('[data-kills3]').dataset.kills3 || 0);

        const posicao4 = parseInt(linha.querySelector('[data-posicao4]').dataset.posicao4 || 0);
        const kills4 = parseInt(linha.querySelector('[data-kills4]').dataset.kills4 || 0);

        const posicao5 = parseInt(linha.querySelector('[data-posicao5]').dataset.posicao5 || 0);
        const kills5 = parseInt(linha.querySelector('[data-kills5]').dataset.kills5 || 0);

        const posicao6 = parseInt(linha.querySelector('[data-posicao6]').dataset.posicao6 || 0);
        const kills6 = parseInt(linha.querySelector('[data-kills6]').dataset.kills6 || 0);

        const posicao7 = parseInt(linha.querySelector('[data-posicao7]').dataset.posicao7 || 0);
        const kills7 = parseInt(linha.querySelector('[data-kills7]').dataset.kills7 || 0);

        const posicao8 = parseInt(linha.querySelector('[data-posicao8]').dataset.posicao8 || 0);
        const kills8 = parseInt(linha.querySelector('[data-kills8]').dataset.kills8 || 0)

        // Cálculo da pontuação: soma das posições e kills
        const pontosTotais = calcularPontosPorPosicao(posicao1) + kills1 +
                             calcularPontosPorPosicao(posicao2) + kills2 +
                             calcularPontosPorPosicao(posicao3) + kills3 +
                             calcularPontosPorPosicao(posicao4) + kills4 +
                             calcularPontosPorPosicao(posicao5) + kills5 +
                             calcularPontosPorPosicao(posicao6) + kills6 + 
                             calcularPontosPorPosicao(posicao7) + kills7 +
                             calcularPontosPorPosicao(posicao8) + kills8;



        linha.querySelector('[data-total]').textContent = pontosTotais;
    });
}

// Função para calcular os pontos baseados na posição da partida
function calcularPontosPorPosicao(posicao) {
    switch (posicao) {
        case 1: return 12;
        case 2: return 9;
        case 3: return 8;
        case 4: return 7;
        case 5: return 6;
        case 6: return 5;
        case 7: return 4;
        case 8: return 3;
        case 9: return 2;
        case 10: return 1;
        default: return 0; // Se a posição for zero ou não preenchida
    }
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", calcularPontos);
