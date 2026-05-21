# EUROPEOS — Viaja Seguro Este Verano

Landing estática para GitHub / Cloudflare Pages.

## Cambios incluidos

- Hero preparado para video background en loop.
- Paleta visual reducida a blanco, azul marino y azul claro.
- Tipografía configurada como `Avenir Next` con fallbacks del sistema.
- Tarjetas con botón alineado al fondo.
- WhatsApp actualizado a `+52 55 4361 9902`.
- Botón de cada unidad: `Contactar`.

## Video del hero

Coloca el video en:

```txt
assets/hero-video.mp4
```

Opcionalmente agrega una imagen poster en:

```txt
assets/hero-poster.jpg
```

## Fotos de unidades

Editar `inventory.js` y agregar la URL o ruta local en el campo `image` de cada unidad:

```js
image: 'assets/cars/suburban-2019.jpg'
```

No se incluyen fuentes en el ZIP por licenciamiento. El CSS usa `Avenir Next` si está instalada o disponible en el sistema.


## Actualización de imágenes

Las imágenes entregadas por Jordi se integraron en:

assets/cars/

Las unidades que todavía quedan sin foto porque no venían en el ZIP son:
- Ford Expedition 2019
- Jeep Grand Cherokee 2017 gris
- Range Rover Sport HSE Dynamic 2019
- Honda Odyssey 2020
- Chevrolet Tahoe 2022
- Range Rover Sport HSE Dynamic 2020

Para agregar una foto nueva:
1. Guardar la imagen en assets/cars/
2. Abrir inventory.js
3. Buscar la unidad
4. Reemplazar image:'' por image:'assets/cars/nombre-del-archivo.jpg'
