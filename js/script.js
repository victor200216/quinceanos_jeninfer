/* =====================================================================
   MIS 15 AÑOS — LÓGICA DE LA INVITACIÓN
   =====================================================================
   ÍNDICE RÁPIDO DE LO QUE PUEDES EDITAR:
   1. `configuracion`   -> datos generales del evento
   2. `invitados`       -> lista de invitados válidos para personalizar
   3. `fotosCarrusel`   -> fotografías del carrusel principal
   4. `fotosGaleria`    -> fotografías de la galería inferior
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. CONFIGURACIÓN GENERAL DEL EVENTO
   Cambia estos valores por los datos reales de la quinceañera.
   La fecha debe ir en formato "AAAA-MM-DDTHH:MM:00" (24 horas).
--------------------------------------------------------------------- */
const configuracion = {
  nombreQuinceanera: "Jennyfer Paola Bandera Araujo ",
  fechaEvento: "2026-09-01T19:00:00",      // Año-Mes-DíaTHora:Minuto:00
  fechaTextoLegible: "01 de septiembre de 2026", // Se muestra en la sección "Detalles del evento"
  horaTextoLegible: "7:00 p.m.",
  lugar: "Jardín de Eventos  Betania",
  direccion: "Calle 10 # 20-15, Aguachica, Cesar",
  // Pega aquí el enlace que te da Google Maps al presionar "Compartir" -> "Insertar un mapa" (para el iframe)
  googleMapsEmbed: "https://www.google.com/maps?q=Jard%C3%ADn+de+Eventos+Betania%2C+Calle+10+%23+20-15%2C+Aguachica%2C+Cesar%2C+Colombia&output=embed",
  // Pega aquí el enlace normal de Google Maps (el que abre la app / da direcciones)
  googleMapsEnlace: "https://www.google.com/maps/place/Jard%C3%ADn+de+Eventos+Betania/@8.305406,-73.606789,16z/data=!4m6!3m5!1s0x8e5d850061b991cb:0xcccc3a3ea746a4c7!8m2!3d8.3054064!4d-73.6067895!16s%2Fg%2F11zj9vrxyb?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
  // Número de WhatsApp del organizador, con código de país y SIN signos "+", espacios ni guiones. Ej: 573001234567
  whatsapp: "573152095841"
};

/* ---------------------------------------------------------------------
   2. LISTA DE INVITADOS
   Cada invitado es un objeto: { slug: "identificador-en-la-url", nombre: "Nombre visible", tipo: "texto libre" }
   El "slug" es lo que va después de ?invitado= en el enlace.
   Ejemplo de enlace final:  index.html?invitado=maria
--------------------------------------------------------------------- */
const invitados = [
  { slug: "diego-kate",    nombre: "Diego , Kate",  tipo: "Diego y Kate", cupos: 2 },
  { slug: "hugo",          nombre: "Hugo",          tipo: "Hugo", cupos: 1 },
  { slug: "sergio",           nombre: "Sergio",           tipo: "Sergio", cupos: 1 },
  { slug: "estela-mello",          nombre: "Estela , Mello",          tipo: "Estela y Mello", cupos: 2 },
  { slug: "juana-yovani",         nombre: "Juana , Yovani",         tipo: "Juana y Yovani", cupos: 2 },
  { slug: "yeritza",              nombre: "Yeritza , Familia",      tipo: "Yeritza y Familia", cupos: 4 },
  { slug: "francisco",            nombre: "Francisco",              tipo: "Francisco", cupos: 1 },
  { slug: "jorgeluis",         nombre: "Jorge Luis",         tipo: "Jorge Luis", cupos: 1 },
  { slug: "claudia",         nombre: "Claudia",         tipo: "Claudia", cupos: 1 },
  { slug: "quito-nuvia",         nombre: "Quito , Nuvia",         tipo: "Quito y Nuvia", cupos: 2 },
  { slug: "lubis",         nombre: "Lubis",         tipo: "Lubis", cupos: 1 },
  { slug: "bercelis-oswaldo",         nombre: "Bercelis , Oswaldo",         tipo: "Bercelis y Oswaldo", cupos: 2 },
  { slug: "german",         nombre: "German",         tipo: "German", cupos: 1 },
  { slug: "lucho",         nombre: "Lucho, familia",         tipo: "Lucho y familia", cupos: 4 },
  { slug: "berlin",         nombre: "Berlín",         tipo: "Berlín", cupos: 1 },
  { slug: "carla",         nombre: "Carla",         tipo: "Carla", cupos: 1 },
  { slug: "lizardo",         nombre: "Lizardo",         tipo: "Lizardo", cupos: 1 },
  { slug: "mariaj",         nombre: "Maria José",         tipo: "Maria José", cupos: 1 },
  { slug: "sara",         nombre: "Sara",         tipo: "Sara", cupos: 1 },
  { slug: "emanuel",         nombre: "Emanuel",         tipo: "Emanuel", cupos: 1 },
  { slug: "andresf",         nombre: "Andrés Felipe",         tipo: "Andrés Felipe", cupos: 1 },
  { slug: "victor-michell",         nombre: "Victor , Michell",         tipo: "Victor y Michell", cupos: 2 },
  { slug: "diego-rosa",         nombre: "Diego , Rosa",         tipo: "Diego y Rosa", cupos: 2 },
  { slug: "zenaida",         nombre: "Zenaida",         tipo: "Zenaida", cupos: 1 },
  { slug: "yuber",         nombre: "Yuber",         tipo: "Yuber", cupos: 1 },
  { slug: "karen",         nombre: "Karen",         tipo: "Karen", cupos: 1 },
  { slug: "william",         nombre: "William",         tipo: "William", cupos: 1 },
  { slug: "silvio",         nombre: "Silvio",         tipo: "Silvio", cupos: 1 },
  { slug: "salome",         nombre: "Salome",         tipo: "Salome", cupos: 1 },
  { slug: "marlon",         nombre: "Marlon",         tipo: "Marlon", cupos: 1 },
  { slug: "maruja-gabriela",         nombre: "Maruja , Gabriela",         tipo: "Maruja y Gabriela", cupos: 2 },
  { slug: "marile",         nombre: "Marile",         tipo: "Marile", cupos: 1 },
  { slug: "shaily",         nombre: "Shaily",         tipo: "Shaily", cupos: 1 },
  { slug: "yulieht",         nombre: "Yulieht",         tipo: "Yulieht", cupos: 1 },
  { slug: "luis-familia",         nombre: "Luis, familia",         tipo: "Luis y familia", cupos: 3 },
  { slug: "nataliab",         nombre: "Natalia B.",         tipo: "Natalia B.", cupos: 1 },
  { slug: "andres",         nombre: "Andrés",         tipo: "Andrés", cupos: 1 },
  { slug: "dioni",         nombre: "Dioni",         tipo: "Dioni", cupos: 1 },
  { slug: "aleidy",         nombre: "Aleidy , Ariana",         tipo: "Aleidy y Ariana", cupos: 2 },
  { slug: "yericel",         nombre: "Yericel",         tipo: "Yericel", cupos: 1 },
  { slug: "ledis",         nombre: "Ledis",         tipo: "Ledis", cupos: 1 },
  { slug: "claudina",         nombre: "Claudina",         tipo: "Claudina", cupos: 1 },
  { slug: "jhoana",         nombre: "Jhoana",         tipo: "Jhoana", cupos: 1 },
  { slug: "nicolas",         nombre: "Nicolás",         tipo: "Nicolás", cupos: 1 },
  { slug: "mariag",         nombre: "María Guebara.",         tipo: "María Guebara.", cupos: 1 }
  

];

let invitadoActual = { nombre: "", cupos: 1 };

/* ---------------------------------------------------------------------
   3. FOTOGRAFÍAS DEL CARRUSEL PRINCIPAL ("Momentos especiales")
   Reemplaza los "src" por las rutas reales dentro de la carpeta /img.
--------------------------------------------------------------------- */
const fotosCarrusel = [
  { src: "img/foto1.jpeg", alt: "Foto 1 de la quinceañera" },
  { src: "img/foto2.jpeg", alt: "Foto 2 de la quinceañera" },
  { src: "img/foto3.jpeg", alt: "Foto 3 de la quinceañera" }
];

/* ---------------------------------------------------------------------
   4. FOTOGRAFÍAS DE LA GALERÍA INFERIOR
--------------------------------------------------------------------- */
const fotosGaleria = [
  { src: "img/foto1.jpeg", alt: "Momento 1" },
  { src: "img/foto2.jpeg", alt: "Momento 2" },
  { src: "img/foto3.jpeg", alt: "Momento 3" },
  { src: "img/foto4.jpeg", alt: "Momento 4" },
  { src: "img/foto5.jpeg", alt: "Momento 5" },
  { src: "img/foto6.jpeg", alt: "Momento 6" }
];

/* =====================================================================
   A PARTIR DE AQUÍ ES LÓGICA DE FUNCIONAMIENTO.
   No es necesario tocar nada más abajo, salvo que quieras personalizar
   el comportamiento de la página.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  aplicarConfiguracionGeneral();
  aplicarInvitadoDesdeURL();
  inicializarCarrusel();
  inicializarGaleriaYLightbox();
  inicializarCuentaRegresiva();
  inicializarMusica();
  inicializarPortada();
  inicializarRevelacionAlScroll();
  inicializarRSVP();
  inicializarBotonCalendario();
});

/* ---------------------------------------------------------------------
   Vuelca los datos de `configuracion` en los elementos del HTML
--------------------------------------------------------------------- */
function aplicarConfiguracionGeneral() {
  const nombre = configuracion.nombreQuinceanera;

  document.title = `Mis 15 Años · ${nombre}`;
  setTexto("nombrePortada", nombre);
  setTexto("selloInicial", nombre.charAt(0).toUpperCase());
  setTexto("pieNombre", nombre);

  setTexto("infoFecha", configuracion.fechaTextoLegible);
  setTexto("infoHora", configuracion.horaTextoLegible);
  setTexto("infoLugar", configuracion.lugar);
  setTexto("infoDireccion", configuracion.direccion);
  setTexto("ubicacionDireccion", configuracion.direccion);

  const iframe = document.getElementById("mapaIframe");
  if (iframe) iframe.src = configuracion.googleMapsEmbed;

  const botonComoLlegar = document.getElementById("btnComoLlegar");
  if (botonComoLlegar) botonComoLlegar.href = configuracion.googleMapsEnlace;
}

function setTexto(id, valor) {
  const el = document.getElementById(id);
  if (el) el.textContent = valor;
}

/* ---------------------------------------------------------------------
   Lee "?invitado=slug" de la URL y personaliza el saludo.
   Si el slug no existe en la lista `invitados`, muestra un mensaje genérico.
--------------------------------------------------------------------- */
function aplicarInvitadoDesdeURL() {
  const params = new URLSearchParams(window.location.search);
  const slug = (params.get("invitado") || "").trim().toLowerCase();

  const invitadoEncontrado = invitados.find(i => i.slug.toLowerCase() === slug);

  const dedicatoria = document.getElementById("dedicatoriaInvitado");
  const saludo = document.getElementById("saludoInvitado");
  const mensaje = document.getElementById("mensajeInvitado");
  const campoNombreRSVP = document.getElementById("rsvpNombre");
  const textoCuposRSVP = document.getElementById("rsvpCupos");

  if (invitadoEncontrado) {
    invitadoActual = invitadoEncontrado;
    dedicatoria.textContent = `Esta invitación es especialmente para ti, ${invitadoEncontrado.nombre} 💕`;
    saludo.textContent = `Querido/a ${invitadoEncontrado.nombre}`;
    mensaje.textContent =
      `${invitadoEncontrado.tipo}, están cordialmente invitados a celebrar mis 15 años. ` +
      `Nos encantaría contar con ustedes para vivir juntos este momento tan especial.`;
    if (campoNombreRSVP && !campoNombreRSVP.value) {
      campoNombreRSVP.value = invitadoEncontrado.nombre;
    }
  } else {
    invitadoActual = { nombre: "", cupos: 1 };
    dedicatoria.textContent = "Esta invitación es especialmente para ti 💕";
    saludo.textContent = "Querido invitado";
    mensaje.textContent = "Nos encantaría contar contigo para celebrar este momento tan especial.";
  }

  if (textoCuposRSVP) {
    textoCuposRSVP.textContent = `Esta invitación incluye ${invitadoActual.cupos} cupo(s) / pase(s)`;
  }
}

/* ---------------------------------------------------------------------
   PORTADA — botón "Abrir invitación"
--------------------------------------------------------------------- */
function inicializarPortada() {
  const portada = document.getElementById("portada");
  const contenido = document.getElementById("contenidoPrincipal");
  const boton = document.getElementById("btnAbrirInvitacion");

  boton.addEventListener("click", () => {
    portada.classList.add("portada--oculta");
    contenido.classList.add("contenido-principal--visible");
    document.body.style.overflow = "auto";
    // Intenta iniciar la música tras la interacción del usuario (algunos navegadores lo permiten aquí)
    const musica = document.getElementById("musicaFondo");
    const btnMusica = document.getElementById("btnMusica");
    musica.play().then(() => {
      btnMusica.setAttribute("aria-pressed", "true");
    }).catch(() => {
      // Si el navegador bloquea la reproducción automática, el usuario puede activarla con el botón flotante
    });
    revelarSeccionesVisibles();
  }, { once: true });

  document.body.style.overflow = "hidden";
}

/* ---------------------------------------------------------------------
   ANIMACIONES AL HACER SCROLL (aparición progresiva de secciones)
--------------------------------------------------------------------- */
function inicializarRevelacionAlScroll() {
  const secciones = document.querySelectorAll(".reveal");
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("reveal--activo");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  secciones.forEach(seccion => observador.observe(seccion));
}

function revelarSeccionesVisibles() {
  // Revela de inmediato cualquier sección ya visible al abrir la invitación
  document.querySelectorAll(".reveal").forEach(seccion => {
    const rect = seccion.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      seccion.classList.add("reveal--activo");
    }
  });
}

/* ---------------------------------------------------------------------
   CARRUSEL DE "MOMENTOS ESPECIALES"
--------------------------------------------------------------------- */
function inicializarCarrusel() {
  const pista = document.getElementById("carruselPista");
  const puntosContenedor = document.getElementById("carruselPuntos");
  const btnAnterior = document.getElementById("carruselAnterior");
  const btnSiguiente = document.getElementById("carruselSiguiente");

  if (!pista || fotosCarrusel.length === 0) return;

  fotosCarrusel.forEach(foto => {
    const img = document.createElement("img");
    img.src = foto.src;
    img.alt = foto.alt;
    img.loading = "lazy";
    pista.appendChild(img);
  });

  fotosCarrusel.forEach((_, indice) => {
    const punto = document.createElement("button");
    punto.className = "carrusel__punto" + (indice === 0 ? " carrusel__punto--activo" : "");
    punto.setAttribute("aria-label", `Ir a la foto ${indice + 1}`);
    punto.addEventListener("click", () => irAFoto(indice));
    puntosContenedor.appendChild(punto);
  });

  let indiceActual = 0;
  let temporizador = null;

  function irAFoto(indice) {
    indiceActual = (indice + fotosCarrusel.length) % fotosCarrusel.length;
    pista.style.transform = `translateX(-${indiceActual * 100}%)`;
    document.querySelectorAll(".carrusel__punto").forEach((p, i) => {
      p.classList.toggle("carrusel__punto--activo", i === indiceActual);
    });
  }

  function iniciarAutoplay() {
    temporizador = setInterval(() => irAFoto(indiceActual + 1), 4500);
  }
  function reiniciarAutoplay() {
    clearInterval(temporizador);
    iniciarAutoplay();
  }

  btnAnterior.addEventListener("click", () => { irAFoto(indiceActual - 1); reiniciarAutoplay(); });
  btnSiguiente.addEventListener("click", () => { irAFoto(indiceActual + 1); reiniciarAutoplay(); });

  iniciarAutoplay();
}

/* ---------------------------------------------------------------------
   GALERÍA + LIGHTBOX
--------------------------------------------------------------------- */
function inicializarGaleriaYLightbox() {
  const galeria = document.getElementById("galeria");
  const lightbox = document.getElementById("lightbox");
  const lightboxImagen = document.getElementById("lightboxImagen");
  const btnCerrar = document.getElementById("lightboxCerrar");

  if (!galeria) return;

  fotosGaleria.forEach(foto => {
    const boton = document.createElement("button");
    boton.className = "galeria__item";
    boton.setAttribute("aria-label", `Ampliar ${foto.alt}`);

    const img = document.createElement("img");
    img.src = foto.src;
    img.alt = foto.alt;
    img.loading = "lazy";

    boton.appendChild(img);
    boton.addEventListener("click", () => abrirLightbox(foto.src, foto.alt));
    galeria.appendChild(boton);
  });

  function abrirLightbox(src, alt) {
    lightboxImagen.src = src;
    lightboxImagen.alt = alt;
    lightbox.hidden = false;
  }
  function cerrarLightbox() {
    lightbox.hidden = true;
    lightboxImagen.src = "";
  }

  btnCerrar.addEventListener("click", cerrarLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) cerrarLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarLightbox(); });
}

/* ---------------------------------------------------------------------
   CUENTA REGRESIVA EN TIEMPO REAL
--------------------------------------------------------------------- */
function inicializarCuentaRegresiva() {
  const fechaEvento = new Date(configuracion.fechaEvento).getTime();
  const bloque = document.getElementById("cuentaRegresiva");
  const mensajeFinal = document.getElementById("mensajeHoyEsElDia");

  const elDias = document.getElementById("crDias");
  const elHoras = document.getElementById("crHoras");
  const elMinutos = document.getElementById("crMinutos");
  const elSegundos = document.getElementById("crSegundos");

  function actualizar() {
    const ahora = Date.now();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
      bloque.hidden = true;
      mensajeFinal.hidden = false;
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    elDias.textContent = String(dias).padStart(2, "0");
    elHoras.textContent = String(horas).padStart(2, "0");
    elMinutos.textContent = String(minutos).padStart(2, "0");
    elSegundos.textContent = String(segundos).padStart(2, "0");
  }

  actualizar();
  const intervalo = setInterval(actualizar, 1000);
}

/* ---------------------------------------------------------------------
   MÚSICA DE FONDO (no autoplay sin interacción)
--------------------------------------------------------------------- */
function inicializarMusica() {
  const musica = document.getElementById("musicaFondo");
  const boton = document.getElementById("btnMusica");

  boton.addEventListener("click", () => {
    if (musica.paused) {
      musica.play();
      boton.setAttribute("aria-pressed", "true");
    } else {
      musica.pause();
      boton.setAttribute("aria-pressed", "false");
    }
  });
}

/* ---------------------------------------------------------------------
   FORMULARIO DE CONFIRMACIÓN (RSVP) -> genera mensaje de WhatsApp
--------------------------------------------------------------------- */
function inicializarRSVP() {
  const formulario = document.getElementById("formRSVP");
  if (!formulario) return;

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("rsvpNombre").value.trim();
    const asistencia = formulario.querySelector('input[name="asistencia"]:checked').value;
    const mensajeOpcional = document.getElementById("rsvpMensaje").value.trim();

    let texto =
      `Hola, soy ${nombre}. Confirmo mi asistencia a los 15 años de ${configuracion.nombreQuinceanera}. ` +
      `Respuesta: ${asistencia}. Utilizaremos ${invitadoActual.cupos} cupo(s) asignado(s).`;

    if (mensajeOpcional) {
      texto += ` Mensaje: ${mensajeOpcional}`;
    }

    const url = `https://wa.me/${configuracion.whatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener");
  });
}

/* ---------------------------------------------------------------------
   BOTÓN "AGREGAR A MI CALENDARIO" (genera un archivo .ics descargable)
--------------------------------------------------------------------- */
function inicializarBotonCalendario() {
  const boton = document.getElementById("btnAgregarCalendario");
  if (!boton) return;

  boton.addEventListener("click", () => {
    const inicio = new Date(configuracion.fechaEvento);
    const fin = new Date(inicio.getTime() + 4 * 60 * 60 * 1000); // duración estimada: 4 horas

    const formatoICS = (fecha) => fecha.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const contenidoICS = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `SUMMARY:Mis 15 Años - ${configuracion.nombreQuinceanera}`,
      `DTSTART:${formatoICS(inicio)}`,
      `DTEND:${formatoICS(fin)}`,
      `LOCATION:${configuracion.lugar} - ${configuracion.direccion}`,
      `DESCRIPTION:Celebración de los 15 años de ${configuracion.nombreQuinceanera}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([contenidoICS], { type: "text/calendar;charset=utf-8" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "mis-15-anos.ics";
    enlace.click();
    URL.revokeObjectURL(enlace.href);
  });
}
