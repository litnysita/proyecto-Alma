const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    const abierto = menu.classList.toggle("abierto");

    menuBtn.setAttribute("aria-expanded", abierto);
    menuBtn.textContent = abierto ? "✕" : "☰";
});

menu.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        menu.classList.remove("abierto");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});

function mostrarHistoria(tipo) {
    const historias = {
        llorona: {
            titulo: "La leyenda de La Llorona",
            texto: "Desde hace mucho tiempo atrás, a lo largo y ancho de montañas, valles, ríos y paisajes de nuestro país, se dice que hay una mujer fantasma deambulando de aquí para allá, le llaman La Llorona. Quienes la han visto, cuentan que viste con un vestido de muchos colores que le tapa todo su cuerpo hasta los pies descalzos. Esta mujer tiene el cabello muy largo en una mezcla de colores negro, plateado y dorado. En su cabeza se paran grillos, luciérnagas y mariposas. Causa mucha impresión, miedo y espanto ver a La Llorona, pues su cara es como la de una calavera. La Llorona tiene las manos muy grandes, y en ellas carga un bebé muerto, su hijo, por quien llora todo el tiempo desconsoladamente. La gente comenta que fue ella misma quien lo mató y por eso su llanto interminable y el arrepentimiento que lleva. Esta mujer ataca sólo a las parteras, médicos y enfermeras que ayudan a las mujeres embarazadas a acabar con la vida de sus bebés antes de nacer. También ataca a los hombres que dejan embarazadas a mujeres jóvenes solteras y que luego las abandonan cuando nace su bebé. Cuando La Llorona habla, sólo pide que se respete la vida, sobretodo la de los que están por nacer..."
        },

        charro: {
            titulo: "La leyenda del Charro Negro",
            texto: " La leyenda cuenta que por las desoladas noches, en las oscuras carreteras de México se aparece un charro vestido con traje negro y sombrero, que cabalga un caballo del mismo color que sus elegantes prendas. No se sabe exactamente que es este personaje al que llaman El Charro Negro, si un alma en pena, un demonio proveniente del infierno, o incluso el mismo diablo. Para poder ver al misterioso Charro Negro, una persona tiene que caminar a solas durante la carretera a altas horas de la noche, el muy cordialmente se ofrecerá a cabalgar a su lado mientras la persona llega a donde desea. Si la persona llega a pasar cerca de una iglesia, si comienza a amanecer o si llega a su destino, el Charro Negro muy amablemente se despedirá y tomara su propio camino. Y aunque pareciera que la visita de este paranormal espectro puede ser muy grata, hay casos en los que las personas no corren la misma suerte, ya que en el transcurso del recorrido, el Charro Negro ha llegando a tentar a las personas. A los hombres, el Charro Negro les ofrece una bolsa de oro, si ellos aceptan, sería aceptar la muerte, pues el diablo en ese instante tomaría sus almas. A las mujeres, el charro las seduce para llevarlas en su caballo, si ellas aceptan y se suben, el caballo empezara a correr despavorido para evitar que ellas puedan bajar, y así el Charro Negro poder llevarlas consigo al infierno."
        },

        mictlan: {
            titulo: "La leyenda del Mictlán",
            texto: "En la tradición mexica, el Mictlán era el lugar de los muertos. Según ciertos relatos, el viaje para llegar allí implicaba atravesar distintos desafíos y estaba relacionado con Mictlantecuhtli y Mictecacíhuatl. Esta visión muestra que los pueblos antiguos tenían creencias complejas sobre la muerte y el destino después de ella."
        }
    };

    const historia = historias[tipo];

    if (!historia) return;

    document.getElementById("tituloModal").textContent = historia.titulo;
    document.getElementById("textoModal").textContent = historia.texto;

    const modal = document.getElementById("modalLeyenda");
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-abierto");

    document.querySelector(".cerrar-modal").focus();
}

function cerrarHistoria() {
    const modal = document.getElementById("modalLeyenda");

    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-abierto");
}

/* Cerrar al hacer clic fuera de la ventana */
document.getElementById("modalLeyenda").addEventListener("click", function(event) {
    if (event.target === this) {
        cerrarHistoria();
    }
});

/* Cerrar con la tecla Escape */
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        cerrarHistoria();
    }
});
