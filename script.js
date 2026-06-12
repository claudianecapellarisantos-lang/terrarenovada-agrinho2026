// Selecionando os elementos do simulador
const btnTransformar = document.getElementById('btn-transformar');
const statusSolo = document.getElementById('status-solo');
const textoStatus = document.getElementById('texto-status');

// Variável para controlar o estado atual do solo
let soloSaudavel = false;

// Função para alternar o estado do solo
btnTransformar.addEventListener('click', () => {
    if (!soloSaudavel) {
        // Transforma em solo orgânico
        statusSolo.classList.remove('status-quimico');
        statusSolo.classList.add('status-organico');
        textoStatus.innerText = "Solo Renovado: Rico em nutrientes, microrganismos ativos e livre de química!";
        btnTransformar.innerText = "Resetar Solo";
        soloSaudavel = true;
    } else {
        // Reseta para o estado com agrotóxicos
        statusSolo.classList.remove('status-organico');
        statusSolo.classList.add('status-quimico');
        textoStatus.innerText = "Solo Atual: Saturado com Agrotóxicos (Fraco e Poluído)";
        btnTransformar.innerText = "Aplicar Adubo Orgânico";
        soloSaudavel = false;
    }
});

