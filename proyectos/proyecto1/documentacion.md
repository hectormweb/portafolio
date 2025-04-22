# Documentación del JavaScript para el Sistema de Paginación

## Descripción General
El código JavaScript implementa un sistema de paginación para mostrar publicaciones en una página web. Permite navegar entre páginas usando botones "Anterior", "Siguiente" e "Indice" (primera página), mostrando 6 publicaciones por página.

## Variables Principales

```javascript
const publicaciones = [ /* array de objetos con publicaciones */ ];
let paginaActual = 1;
const publicacionesPorPagina = 6;
const totalPaginas = Math.ceil(publicaciones.length / publicacionesPorPagina);
```

- `publicaciones`: Array que contiene todas las publicaciones a mostrar
- `paginaActual`: Almacena el número de página actual (inicia en 1)
- `publicacionesPorPagina`: Cantidad fija de publicaciones a mostrar por página (6)
- `totalPaginas`: Calcula el total de páginas necesarias

## Función Principal: `mostrarPublicaciones()`

Esta función es el núcleo del sistema de paginación:

1. **Calcula el rango de publicaciones a mostrar**:
   ```javascript
   const inicio = (paginaActual - 1) * publicacionesPorPagina;
   const fin = inicio + publicacionesPorPagina;
   const publicacionesPagina = publicaciones.slice(inicio, fin);
   ```

2. **Genera el HTML** para las publicaciones de la página actual:
   - Usa un template string para crear elementos HTML con clases BEM
   - Incluye título, imagen (con nombre dinámico `citlaliX.jpg`) y contenido

3. **Actualiza el DOM**:
   - Inserta las publicaciones en el contenedor (`#contenido`)
   - Actualiza el indicador de página (ej: "Página 1/2")

4. **Controla el estado de los botones**:
   - Deshabilita botones "Anterior" e "Indice" cuando está en la primera página
   - Deshabilita botón "Siguiente" cuando está en la última página

## Event Listeners

### Botón "Indice" (Primera página)
```javascript
document.getElementById("btnPrimeraPagina").addEventListener("click", () => {
  if (paginaActual > 1) {
    paginaActual = 1;
    mostrarPublicaciones();
  }
});
```
- Vuelve a la primera página si no está ya en ella

### Botón "Anterior"
```javascript
document.getElementById("btnAnterior").addEventListener("click", () => {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarPublicaciones();
  }
});
```
- Disminuye el número de página si no está en la primera

### Botón "Siguiente"
```javascript
document.getElementById("btnSiguiente").addEventListener("click", () => {
  if (paginaActual < totalPaginas) {
    paginaActual++;
    mostrarPublicaciones();
  }
});
```
- Aumenta el número de página si no está en la última

## Inicialización
La función `mostrarPublicaciones()` se llama al final para mostrar la primera página al cargar el documento.

## Estructura BEM en JavaScript
El código mantiene consistencia con la metodología BEM usada en CSS:
- Las clases CSS usadas en el JavaScript coinciden con las definidas en el estilo
- Los modificadores como `paginacion__btn--disabled` se aplican dinámicamente

## Notas adicionales
- El sistema asume que existen imágenes con nombres `citlali1.jpg`, `citlali2.jpg`, etc.
- La paginación es completamente cliente-side (no requiere servidor)
- El diseño responsivo se maneja principalmente desde el CSS

Esta implementación proporciona una paginación funcional y accesible con retroalimentación visual clara del estado actual de navegación.
