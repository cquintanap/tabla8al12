const tablero = document.getElementById("tablero");

let resueltas = 0;
const total = 55; // 5 filas x 11 columnas

for (let fila = 8; fila <= 12; fila++) {

    for (let columna = 2; columna <= 12; columna++) {

        let operacion = `${fila} × ${columna}`;
        let respuesta = fila * columna;

        let div = document.createElement("div");
        div.className = "casilla";

        // Posición de la imagen
        let indice = (fila - 3) * 11 + (columna - 2);

        div.style.backgroundPosition =
            `${-(indice % 11) * 100}px ${-Math.floor(indice / 11) * 100}px`;

        let texto = document.createElement("span");
        texto.textContent = operacion;

        let caja = document.createElement("input");
        caja.type = "number";

        let boton = document.createElement("button");
        boton.textContent = "OK";

        boton.onclick = function () {

            if (parseInt(caja.value) === respuesta) {

                div.classList.add("correcto");

                resueltas++;

                if (resueltas === total) {
                    document.getElementById("mensaje").innerHTML =
                        "🎉 ¡Excelente! Has descubierto toda la imagen.";
                }

            } else {

                alert("Respuesta incorrecta");

            }

        };

        div.appendChild(texto);
        div.appendChild(caja);
        div.appendChild(boton);

        tablero.appendChild(div);

    }

}