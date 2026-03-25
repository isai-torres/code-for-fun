// Que es un Evento del DOM: "Algo" que ocurre en el sitio web como resultado de
// interacción con el usuario o por otra causa como cambios en el estado del
// dispositivo o de la ventana.

// Eventos del DOM mas comunes:
// - Cursor: click, mouseover, mouseout, mousemove, mousedown, mouseup
// - Teclado: keydown, keyup, keypress

const infoEvento = document.getElementById("info-evento");

function mostrarInfo(mensaje) {
  infoEvento.textContent = mensaje;
}

// ─── EVENTOS DE CURSOR ───────────────────────────────────────────────────────

// click: se activa al hacer clic (presionar y soltar) sobre el elemento.
function mostrarClic() {
  mostrarInfo("✅ click → ¡Hiciste clic en la Albahaca!");
}

// Topping Cebolla.
// mouseover: se activa cuando el cursor entra al área del elemento.
const cebolla = document.getElementById("cebolla");

cebolla.addEventListener("mouseover", function () {
  mostrarInfo("👆 mouseover → El cursor entró a la Cebolla");
  cebolla.style.opacity = "0.6";
});

// mouseout: se activa cuando el cursor sale del área del elemento.
cebolla.addEventListener("mouseout", function () {
  mostrarInfo("👋 mouseout → El cursor salió de la Cebolla");
  cebolla.style.opacity = "1";
});

// Topping Champiñones.
// mousedown: se activa en el momento en que se presiona el botón del ratón.
const champi = document.getElementById("champinones");

champi.addEventListener("mousedown", function () {
  mostrarInfo("⬇️ mousedown → Botón del ratón presionado en Champiñones");
  champi.style.transform = "scale(0.95)";
});

// mouseup: se activa cuando se suelta el botón del ratón.
champi.addEventListener("mouseup", function () {
  mostrarInfo("⬆️ mouseup → Botón del ratón soltado en Champiñones");
  champi.style.transform = "scale(1)";
});

// Topping Aceitunas.
// mousemove: se activa cada vez que el cursor se mueve dentro del elemento.
const aceitunas = document.getElementById("aceitunas");

aceitunas.addEventListener("mousemove", function (evento) {
  mostrarInfo(`🎯 mousemove → Posición dentro del elemento — X: ${evento.offsetX}px, Y: ${evento.offsetY}px`);
});

// ─── EVENTOS DE TECLADO ──────────────────────────────────────────────────────

const campoTexto = document.getElementById("campo-texto");

// keydown: se activa cuando se presiona una tecla (antes de que el carácter aparezca).
campoTexto.addEventListener("keydown", function (evento) {
  mostrarInfo(`⬇️ keydown → Tecla presionada: "${evento.key}"`);
});

// keyup: se activa cuando se suelta una tecla (después de que el carácter aparece).
campoTexto.addEventListener("keyup", function (evento) {
  mostrarInfo(`⬆️ keyup → Tecla soltada: "${evento.key}"`);
});

// keypress: se activa al presionar una tecla que produce un carácter imprimible.
// Nota: este evento está obsoleto (deprecated) en navegadores modernos; se prefiere keydown.
campoTexto.addEventListener("keypress", function (evento) {
  mostrarInfo(`⌨️ keypress → Carácter: "${evento.key}" (código: ${evento.charCode})`);
});
