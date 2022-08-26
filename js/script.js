let alien = 0, bullets = 3, won = false
// SORTEIA UMA POSIÇÃO PARA O ALIEN FICAR ESCONDIDO
// ASSIM QUE A PÁGINA É CARREGADA
window.onload = () => {
    alien = Math.floor(Math.random() * 5 + 1)
    console.log("O alien está em: " + alien)
}

// FUNÇÃO PARA ATIRAR
function shoot(num) {
    // Variáveis chamando os elementos HTML
    let tree1 = document.getElementById('tree1');
    let tree2 = document.getElementById('tree2');
    let tree3 = document.getElementById('tree3');
    let tree4 = document.getElementById('tree4');
    let tree5 = document.getElementById('tree5');
    let hint = document.getElementById('hint');
    let btn = num

    // verifica se ainda há balas para atirar
    if (bullets >= 1) {
        // verifica em todas as posições se acertou o alien ou não
        // posição 1
        if (btn === 1) {
            if (alien === 1) {
                tree1.src = "img/alien.png"
                won = true;
            } else {
                tree1.src = "img/wrong-tree.png"
                hint.textContent = "Estou mais para a direita!"
                bullets--
            }
        }
        // posição 2
        if (btn === 2) {
            if (alien === 2) {
                tree2.src = "img/alien.png"
                won = true;
            } else {
                tree2.src = "img/wrong-tree.png"
                if (alien < 2) {
                    hint.textContent = "Estou mais para a esquerda!"
                }
                else {
                    hint.textContent = "Estou mais para a direita!"
                }
                bullets--
            }
        }
        // posição 3
        if (btn === 3) {
            if (alien === 3) {
                tree3.src = "img/alien.png"
                won = true;
            } else {
                tree3.src = "img/wrong-tree.png"
                if (alien < 3) {
                    hint.textContent = "Estou mais para a esquerda!"
                }
                else {
                    hint.textContent = "Estou mais para a direita!"
                }
                bullets--
            }
        }
        // posição 4
        if (btn === 4) {
            if (alien === 4) {
                tree4.src = "img/alien.png"
                won = true;
            } else {
                tree4.src = "img/wrong-tree.png"
                if (alien < 4) {
                    hint.textContent = "Estou mais para a esquerda!"
                }
                else {
                    hint.textContent = "Estou mais para a direita!"
                }
                bullets--
            }
        }
        // posição 5
        if (btn === 5) {
            if (alien === 5) {
                tree5.src = "img/alien.png"
                won = true;
            } else {
                tree5.src = "img/wrong-tree.png"
                hint.textContent = "Estou mais para a esquerda!"
                bullets--
            }
        }
        // Apaga as balas da caixinha conforme elas são gastas
        if (bullets === 2) {
            document.getElementById('bullet3').style.visibility = "hidden"
        }
        if (bullets === 1) {
            document.getElementById('bullet2').style.visibility = "hidden"
        }
        if (bullets === 0) {
            document.getElementById('bullet1').style.visibility = "hidden"
        }
    }
    if (bullets === 0) {
        // Se acabarem as balas, o jogador perde e aparece a tela de GAME OVER
        document.getElementById('lose').style.visibility = "visible"
    }
    // Se o alien for atingido, o jogador ganha e aparece a tela de VITÓRIA
    if (won === true) {

        setTimeout(() => {
            document.getElementById('win').style.visibility = "visible"
        }, 700)
    }

}