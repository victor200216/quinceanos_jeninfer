# Invitación digital — Mis 15 Años

Proyecto listo para abrir en el navegador. Estructura de carpetas:

```
invitacion-15/
├── index.html
├── css/styles.css
├── js/script.js
├── img/           (foto1.jpg … foto6.jpg — reemplázalas por las fotos reales)
└── music/         (coloca aquí musica.mp3)
```

## Cómo personalizar

Todo lo editable está al inicio de `js/script.js`.

### 1. Cambiar el nombre de la quinceañera, fecha, lugar, mapa y WhatsApp
Edita el objeto `configuracion` en `js/script.js`:

```js
const configuracion = {
  nombreQuinceanera: "Isabella",
  fechaEvento: "2027-06-15T19:00:00",
  fechaTextoLegible: "15 de junio de 2027",
  horaTextoLegible: "7:00 p.m.",
  lugar: "Salón de Eventos Jardín Real",
  direccion: "Calle 10 # 5-20, Aguachica, Cesar",
  googleMapsEmbed: "...",   // enlace para el mapa incrustado (iframe)
  googleMapsEnlace: "...",  // enlace normal para el botón "Cómo llegar"
  whatsapp: "573001234567"  // código de país + número, sin + ni espacios
};
```

- `fechaEvento` alimenta la cuenta regresiva: debe tener el formato `AAAA-MM-DDTHH:MM:00`.
- Para `googleMapsEmbed`: en Google Maps, busca el lugar → botón "Compartir" → pestaña "Insertar un mapa" → copia solo la URL que está dentro de `src="..."`.
- Para `googleMapsEnlace`: copia el enlace normal que aparece en la barra de direcciones al buscar el lugar en Google Maps.

### 2. Cambiar las fotografías
- Copia tus imágenes reales dentro de la carpeta `img/`.
- Actualiza los arreglos `fotosCarrusel` (fotos del carrusel principal) y `fotosGaleria` (fotos de la galería inferior) en `js/script.js` con los nombres de tus archivos.

### 3. Cambiar la música
- Coloca tu archivo de audio en `music/musica.mp3` (o cambia el nombre y actualiza el `src` dentro de la etiqueta `<audio>` en `index.html`).
- La música nunca se reproduce automáticamente sin que el usuario interactúe primero (al presionar "Abrir invitación" o el botón flotante 🔊).

### 4. Agregar o eliminar invitados
Edita el arreglo `invitados` en `js/script.js`:

```js
const invitados = [
  { slug: "maria", nombre: "María", tipo: "María y acompañante" },
  { slug: "carlos", nombre: "Carlos", tipo: "Carlos y acompañante" },
  // agrega tantos como necesites...
];
```

- `slug`: identificador que va en la URL (sin espacios ni tildes, minúsculas).
- `nombre`: cómo se muestra en el saludo.
- `tipo`: texto que acompaña la invitación (ej. "María y familia").

### 5. Generar el enlace personalizado de cada invitado
El formato es:

```
index.html?invitado=SLUG
```

Ejemplos:
- `index.html?invitado=maria` → "María, estás cordialmente invitada…"
- `index.html?invitado=familia-gomez` → "Familia Gómez, están cordialmente invitados…"

Si el `slug` no coincide con ningún invitado de la lista, la página muestra un saludo genérico en vez de fallar.

## Notas técnicas
- No usa frameworks: HTML5 + CSS3 + JavaScript puro.
- Totalmente responsive (mobile-first, pensado para abrirse desde WhatsApp).
- Respeta la preferencia del sistema "reducir movimiento".
- El botón "Confirmar asistencia" abre WhatsApp con un mensaje ya redactado, listo para enviar.
- El botón "Agregar a mi calendario" descarga un archivo `.ics` que se puede abrir con Google Calendar, Apple Calendar u Outlook.
