let alien = 0, bullets = 3, won = false
window.onload = () => {
    alien = Math.floor(Math.random() * 5 + 1)
    console.log("O alien está em: " + alien)
}

function shoot(num) {
    let tree1 = document.getElementById('tree1');
    let tree2 = document.getElementById('tree2');
    let tree3 = document.getElementById('tree3');
    let tree4 = document.getElementById('tree4');
    let tree5 = document.getElementById('tree5');
    let btn = num

    if (bullets > 1) {
        if (btn === 1) {
            if (alien === 1) {
                tree1.src = "img/alien.png"
                won = true;
            } else {
                tree1.src = "img/wrong-tree.png"
                bullets--
            }
        }
        if (btn === 2) {
            if (alien === 2) {
                tree2.src = "img/alien.png"
                won = true;
            } else {
                tree2.src = "img/wrong-tree.png"
                bullets--
            }
        }
        if (btn === 3) {
            if (alien === 3) {
                tree3.src = "img/alien.png"
                won = true;
            } else {
                tree3.src = "img/wrong-tree.png"
                bullets--
            }
        }
        if (btn === 4) {
            if (alien === 4) {
                tree4.src = "img/alien.png"
                won = true;
            } else {
                tree4.src = "img/wrong-tree.png"
                bullets--
            }
        }
        if (btn === 5) {
            if (alien === 5) {
                tree5.src = "img/alien.png"
                won = true;
            } else {
                tree5.src = "img/wrong-tree.png"
                bullets--
            }
        }
    } else {
        document.getElementById('lose').style.visibility = "visible"
    }

    if (won === true) {
        document.getElementById('win').style.visibility = "visible"
    }

}