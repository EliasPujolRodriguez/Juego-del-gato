const d = document,
    w = window,
    n = navigator;

export function juegoGato(btnX, btnO, btnReiniciar) {
    const $btnX = d.getElementById(btnX), /*Declaramos las variables a usar */
        $btnO = d.getElementById(btnO),
        $btnReiniciar = d.getElementById(btnReiniciar),
        $c1 = d.getElementById("c1"),
        $c2 = d.getElementById("c2"),
        $c3 = d.getElementById("c3"),
        $c4 = d.getElementById("c4"),
        $c5 = d.getElementById("c5"),
        $c6 = d.getElementById("c6"),
        $c7 = d.getElementById("c7"),
        $c8 = d.getElementById("c8"),
        $c9 = d.getElementById("c9"),
        $mensajeTurnoX = d.querySelector(".mensaje-turno-x"),
        $mensajeTurnoO = d.querySelector(".mensaje-turno-o"),
        $mensajeGanadorX = d.querySelector(".mensaje-ganador-x"),
        $mensajeGanadorO = d.querySelector(".mensaje-ganador-o"),
        $mensajeEmpate = d.querySelector(".mensaje-empate"),
        $tabPositions = [$c1, $c2, $c3, $c4, $c5, $c6, $c7, $c8, $c9];

    //$btnIniciar.setAttribute('class', 'borrar');
    let btnValorJugador,
        btnValorOponente, posicionActual

    //$btnX.classList.add("btnXBackground")
    d.addEventListener("click", e => {
        if (e.target === $btnX) {
            btnValorJugador = "X", btnValorOponente = "O"
            $btnX.value = btnValorJugador, $btnO.value = btnValorOponente
            $mensajeTurnoX.classList.remove("none")
            $mensajeTurnoX.classList.add("mensaje-turno-x")
        } else if (e.target === $btnO) {
            btnValorJugador = "O", btnValorOponente = "X"
            $btnO.value = btnValorJugador, $btnX.value = btnValorOponente
            $mensajeTurnoO.classList.remove("none")
            $mensajeTurnoO.classList.add("mensaje-turno-o")
        }

        if (e.target === $c1) {
            // $mensajeTurnoX.classList.remove("mensaje-turno-x")
            console.log($c1.innerHTML === "")
            $c1.innerHTML = btnValorJugador
            posicionActual = $tabPositions.findIndex(e => e === $c1)

            if ($tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)] !== undefined) {
                setTimeout(() => {
                    //$mensajeTurnoX.classList.remove("none")
                    //$mensajeTurno.querySelector("p").innerText += ` ${btnValorOponente}`
                    $tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)].innerHTML = btnValorOponente
                }, 3000);
            }
        }

        if (e.target === $c2) {
            $c2.innerHTML = btnValorJugador
            posicionActual = $tabPositions.findIndex(e => e === $c2)
            if ($tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)] !== undefined) {
                setTimeout(() => {
                    //$mensajeTurno.classList.remove("none")
                    //$mensajeTurno.querySelector("p").innerText += ` ${btnValorOponente}`
                    $tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)].innerHTML = btnValorOponente
                }, 3000);
            }
        }

        if (e.target === $c3) {
            $c3.innerHTML = btnValorJugador
            posicionActual = $tabPositions.findIndex(e => e === $c3)
            if ($tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)] !== undefined) {
                setTimeout(() => {
                    //$mensajeTurno.classList.remove("none")
                    //$mensajeTurno.querySelector("p").innerText += ` ${btnValorOponente}`
                    $tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)].innerHTML = btnValorOponente
                }, 3000);
            }
        }

        if (e.target === $c4) {
            $c4.innerHTML = btnValorJugador
            posicionActual = $tabPositions.findIndex(e => e === $c4)
            if ($tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)] !== undefined) {
                setTimeout(() => {
                    //$mensajeTurno.classList.remove("none")
                    //$mensajeTurno.querySelector("p").innerText += ` ${btnValorOponente}`
                    $tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)].innerHTML = btnValorOponente
                }, 3000);
            }
        }

        if (e.target === $c5) {
            $c5.innerHTML = btnValorJugador
            posicionActual = $tabPositions.findIndex(e => e === $c5)
            if ($tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)] !== undefined) {
                setTimeout(() => {
                    //$mensajeTurno.classList.remove("none")
                    // $mensajeTurno.querySelector("p").innerText += ` ${btnValorOponente}`
                    $tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)].innerHTML = btnValorOponente
                }, 3000);
            }
        }

        if (e.target === $c6) {
            $c6.innerHTML = btnValorJugador
            posicionActual = $tabPositions.findIndex(e => e === $c6)
            if ($tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)] !== undefined) {
                setTimeout(() => {
                    // $mensajeTurno.classList.remove("none")
                    //$mensajeTurno.querySelector("p").innerText += ` ${btnValorOponente}`
                    $tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)].innerHTML = btnValorOponente
                }, 3000);
            }

        }

        if (e.target === $c7) {
            $c7.innerHTML = btnValorJugador
            posicionActual = $tabPositions.findIndex(e => e === $c7)
            if ($tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)] !== undefined) {
                setTimeout(() => {
                    //$mensajeTurno.classList.remove("none")
                    //$mensajeTurno.querySelector("p").innerText += ` ${btnValorOponente}`
                    $tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)].innerHTML = btnValorOponente
                }, 3000);
            }
        }

        if (e.target === $c8) {
            $c8.innerHTML = btnValorJugador
            posicionActual = $tabPositions.findIndex(e => e === $c8)
            if ($tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)] !== undefined) {
                setTimeout(() => {
                    //$mensajeTurno.classList.remove("none")
                    //$mensajeTurno.querySelector("p").innerText += ` ${btnValorOponente}`
                    $tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)].innerHTML = btnValorOponente
                }, 3000);
            }
        }

        if (e.target === $c9) {
            $c9.innerHTML = btnValorJugador
            posicionActual = $tabPositions.findIndex(e => e === $c9)
            if ($tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)] !== undefined) {
                setTimeout(() => {
                    $tabPositions.filter(e => e !== $tabPositions[posicionActual])[Math.floor(Math.random() * (8 - 0) + 0)].innerHTML = btnValorOponente
                }, 3000);
            }
        }

        const reiniciar = () => $tabPositions.forEach(e => e.innerHTML = "") /*método para reiniciar juego */


        if (e.target === $btnReiniciar) {
            reiniciar()
            location.reload();
        }


        //validacion de patrones de quién ganó en el juego
      

        if ($c1.innerHTML === "X" && $c2.innerHTML === "X" && $c3.innerHTML === "X") {   /*fila 1 */
            setTimeout(() => {
                $mensajeGanadorX.classList.remove("none")
                $mensajeGanadorX.classList.add("mensaje-ganador-x")

            }, 3000);
        } else if ($c1.innerHTML === "O" && $c2.innerHTML === "O" && $c3.innerHTML === "O") {
            setTimeout(() => {
                $mensajeGanadorO.classList.remove("none")
                $mensajeGanadorO.classList.add("mensaje-ganador-o")

            }, 3000);
        } else if ($c1.innerHTML === "O" && $c2.innerHTML === "X" && $c3.innerHTML === "O" || $c1.innerHTML === "X" && $c2.innerHTML === "O" && $c3.innerHTML === "X" || $c1.innerHTML === "X" && $c2.innerHTML === "O" && $c3.innerHTML === "O" || $c1.innerHTML === "O" && $c2.innerHTML === "X" && $c3.innerHTML === "X") {
            setTimeout(() => {
                $mensajeEmpate.classList.remove("none");
                $mensajeEmpate.classList.add("mensaje-empate")
            }, 3000);
        }

        /*fila 2 */
        if ($c4.innerHTML === "X" && $c5.innerHTML === "X" && $c6.innerHTML === "X") {
            setTimeout(() => {
                $mensajeGanadorX.classList.remove("none")
                $mensajeGanadorX.classList.add("mensaje-ganador-x")
            }, 3000);

        } else if ($c4.innerHTML === "O" && $c5.innerHTML === "O" && $c6.innerHTML === "O") {
            setTimeout(() => {
                $mensajeGanadorO.classList.remove("none")
                $mensajeGanadorO.classList.add("mensaje-ganador-o")
            }, 3000);
        } else if ($c4.innerHTML === "O" && $c5.innerHTML === "X" && $c6.innerHTML === "O" || $c4.innerHTML === "X" && $c5.innerHTML === "O" && $c6.innerHTML === "X" || $c4.innerHTML === "X" && $c5.innerHTML === "O" && $c6.innerHTML === "O" || $c4.innerHTML === "O" && $c5.innerHTML === "X" && $c6.innerHTML === "X") {
            setTimeout(() => {
                $mensajeEmpate.classList.remove("none");
                $mensajeEmpate.classList.add("mensaje-empate")
            }, 3000);
        }

        /*Fila 3 */
        if ($c7.innerHTML === "X" && $c8.innerHTML === "X" && $c9.innerHTML === "X") {
            setTimeout(() => {
                $mensajeGanadorX.classList.remove("none")
                $mensajeGanadorX.classList.add("mensaje-ganador-x")
            }, 3000);


        } else if ($c7.innerHTML === "O" && $c8.innerHTML === "O" && $c9.innerHTML === "O") {
            setTimeout(() => {
                $mensajeGanadorO.classList.remove("none")
                $mensajeGanadorO.classList.add("mensaje-ganador-o")
            }, 3000);

        } else if ($c7.innerHTML === "O" && $c8.innerHTML === "X" && $c9.innerHTML === "O" || $c7.innerHTML === "X" && $c8.innerHTML === "O" && $c9.innerHTML === "X" || $c7.innerHTML === "X" && $c8.innerHTML === "O" && $c9.innerHTML === "O" || $c7.innerHTML === "O" && $c8.innerHTML === "X" && $c9.innerHTML === "X") {
            setTimeout(() => {
                $mensajeEmpate.classList.remove("none");
                $mensajeEmpate.classList.add("mensaje-empate")
            }, 3000);
        }
        /*columna 1 */
        if ($c1.innerHTML === "X" && $c4.innerHTML === "X" && $c7.innerHTML === "X") { 
            setTimeout(() => {
                $mensajeGanadorX.classList.remove("none")
                $mensajeGanadorX.classList.add("mensaje-ganador-x")
            }, 3000);


        } else if ($c1.innerHTML === "O" && $c4.innerHTML === "O" && $c7.innerHTML === "O") {
            setTimeout(() => {
                $mensajeGanadorO.classList.remove("none")
                $mensajeGanadorO.classList.add("mensaje-ganador-o")

            }, 3000);

        } else if ($c1.innerHTML === "O" && $c4.innerHTML === "X" && $c7.innerHTML === "O" || $c1.innerHTML === "X" && $c4.innerHTML === "O" && $c7.innerHTML === "X" || $c1.innerHTML === "X" && $c4.innerHTML === "O" && $c7.innerHTML === "O" || $c1.innerHTML === "O" && $c4.innerHTML === "X" && $c7.innerHTML === "X") {
            setTimeout(() => {
                $mensajeEmpate.classList.remove("none");
                $mensajeEmpate.classList.add("mensaje-empate")
            }, 3000);
        }

        if ($c2.innerHTML === "X" && $c5.innerHTML === "X" && $c8.innerHTML === "X") { /*columna 2 */
            setTimeout(() => {
                $mensajeGanadorX.classList.remove("none")
                $mensajeGanadorX.classList.add("mensaje-ganador-x")
            }, 3000);

        } else if ($c2.innerHTML === "O" && $c5.innerHTML === "O" && $c8.innerHTML === "O") {
            setTimeout(() => {
                $mensajeGanadorO.classList.remove("none")
                $mensajeGanadorO.classList.add("mensaje-ganador-o")
            }, 3000);
        } else if ($c2.innerHTML === "O" && $c5.innerHTML === "X" && $c8.innerHTML === "O" || $c2.innerHTML === "X" && $c5.innerHTML === "O" && $c8.innerHTML === "X" || $c2.innerHTML === "X" && $c5.innerHTML === "O" && $c8.innerHTML === "O" || $c2.innerHTML === "O" && $c5.innerHTML === "X" && $c8.innerHTML === "X") {
            setTimeout(() => {
                $mensajeEmpate.classList.remove("none");
                $mensajeEmpate.classList.add("mensaje-empate")
            }, 3000);
        }
        /*Columna 3 */
        if ($c3.innerHTML === "X" && $c6.innerHTML === "X" && $c9.innerHTML === "X") { 
            setTimeout(() => {
                $mensajeGanadorX.classList.remove("none")
                $mensajeGanadorX.classList.add("mensaje-ganador-x")
            }, 3000);


        } else if ($c3.innerHTML === "O" && $c6.innerHTML === "O" && $c9.innerHTML === "O") {
            setTimeout(() => {
                $mensajeGanadorO.classList.remove("none")
                $mensajeGanadorO.classList.add("mensaje-ganador-o")
            }, 3000);
        } else if ($c3.innerHTML === "O" && $c6.innerHTML === "X" && $c9.innerHTML === "O" || $c3.innerHTML === "X" && $c6.innerHTML === "O" && $c9.innerHTML === "X" || $c3.innerHTML === "X" && $c6.innerHTML === "O" && $c9.innerHTML === "O" || $c3.innerHTML === "O" && $c6.innerHTML === "X" && $c9.innerHTML === "X") {
            setTimeout(() => {
                $mensajeEmpate.classList.remove("none");
                $mensajeEmpate.classList.add("mensaje-empate")
            }, 3000);
        }

        /*diagonal 1 */
        if ($c1.innerHTML === "X" && $c5.innerHTML === "X" && $c9.innerHTML === "X") { 
            setTimeout(() => {
                $mensajeGanadorX.classList.remove("none")
                $mensajeGanadorX.classList.add("mensaje-ganador-x")
            }, 3000);


        } else if ($c1.innerHTML === "O" && $c5.innerHTML === "O" && $c9.innerHTML === "O") {
            setTimeout(() => {
                $mensajeGanadorO.classList.remove("none")
                $mensajeGanadorO.classList.add("mensaje-ganador-o")
            }, 3000);

        }
        else if ($c1.innerHTML === "O" && $c5.innerHTML === "X" && $c9.innerHTML === "O" || $c1.innerHTML === "X" && $c5.innerHTML === "O" && $c9.innerHTML === "X" || $c1.innerHTML === "X" && $c5.innerHTML === "O" && $c9.innerHTML === "O" ||  $c1.innerHTML === "O" && $c5.innerHTML === "X" && $c9.innerHTML === "X ") {
            setTimeout(() => {
                $mensajeEmpate.classList.remove("none");
                $mensajeEmpate.classList.add("mensaje-empate")
            }, 3000);
        }


        if ($c7.innerHTML === "X" && $c5.innerHTML === "X" && $c3.innerHTML === "X") { /*diagonal 2 */
            setTimeout(() => {
                $mensajeGanadorX.classList.remove("none")
                $mensajeGanadorX.classList.add("mensaje-ganador-x")
            }, 3000);


        } else if ($c7.innerHTML === "O" && $c5.innerHTML === "O" && $c3.innerHTML === "O") {
            setTimeout(() => {
                $mensajeGanadorO.classList.remove("none")
                $mensajeGanadorO.classList.add("mensaje-ganador-o")
            }, 3000);
        } else if ($c7.innerHTML === "O" && $c5.innerHTML === "X" && $c3.innerHTML === "O" || $c7.innerHTML === "X" && $c5.innerHTML === "O" && $c3.innerHTML === "X" || $c7.innerHTML === "X" && $c5.innerHTML === "O" && $c3.innerHTML === "O") {
            setTimeout(() => {
                $mensajeEmpate.classList.remove("none");
                $mensajeEmpate.classList.add("mensaje-empate")
            }, 3000);
        }


        //validaciones para prevenir compartamientos extraños en el tablero




    })







}