# Documentación CSS para el Sistema de Paginación BEM

Esta documentación describe la estructura y estilos CSS implementados siguiendo la metodología BEM (Bloque, Elemento, Modificador) para el sistema de paginación y visualización de publicaciones.

## Estructura BEM

### 1. Bloque: `.publicaciones`
El bloque principal que contiene todo el sistema de publicaciones.

**Propiedades:**
- `margin: 0 auto` - Centra el bloque horizontalmente
- `width: 80%` - Ocupa el 80% del ancho disponible
- `background-color: white` - Fondo blanco
- `padding: 1rem 2rem` - Espaciado interno (1rem arriba/abajo, 2rem izquierda/derecha)

### 2. Elementos del bloque `.publicaciones`

#### `.publicaciones__contenedor`
Contenedor flexible para los ítems de publicaciones.

**Propiedades:**
- `padding: 0rem` - Sin relleno interno
- `background-color: skyblue` - Color de fondo temporal
- `height: auto` - Altura automática según contenido
- `display: flex` - Activa el modelo flexbox
- `flex-wrap: wrap` - Permite que los ítems se envuelvan en múltiples líneas
- `align-items: stretch` - Los ítems se estiran para igualar la altura
- `column-gap: 10px` - Espacio horizontal entre ítems
- `row-gap: 10px` - Espacio vertical entre ítems

#### `.publicaciones__item`
Cada ítem individual de publicación.

**Propiedades:**
- `background-color: white` - Fondo blanco
- `border: 1px solid crimson` - Borde rojo
- `padding: 1rem` - Espaciado interno
- `border-radius: 4px` - Bordes redondeados
- `width: calc((100% - 20px)/3)` - Ancho calculado para 3 columnas (considerando gaps)
- `height: 100%` - Ocupa toda la altura disponible
- `box-sizing: border-box` - El padding y border se incluyen en el ancho/alto
- `display: flex` - Flex container
- `flex-direction: column` - Organización vertical de elementos internos

#### `.publicaciones__titulo`
Título de cada publicación.

**Propiedades:**
- `color: #333` - Color de texto oscuro
- `margin: 0` - Elimina márgenes por defecto
- `flex-shrink: 0` - Previene que el título se reduzca

#### `.publicaciones__imagen`
Imagen de cada publicación.

**Propiedades clave:**
- `flex: 1` - Ocupa todo el espacio disponible
- `min-height: 0` - Permite que la imagen se reduzca
- `max-height: 150px` - Altura máxima
- `object-fit: cover` - Ajuste de la imagen manteniendo relación de aspecto
- `aspect-ratio: 22/11` - Proporción fija (2:1)

#### `.publicaciones__contenido`
Contenido textual de cada publicación.

**Propiedades:**
- `color: #666` - Color de texto gris
- `flex-shrink: 0` - Previene que el contenido se reduzca

### 3. Bloque: `.paginacion`
Controles de navegación entre páginas.

**Propiedades:**
- `margin-top: 20px` - Espacio superior
- `display: flex` - Modelo flexbox
- `justify-content: flex-start` - Alineación a la izquierda
- `align-items: baseline` - Alineación vertical por línea base

#### Elementos del bloque `.paginacion`

##### `.paginacion__btn`
Botones de navegación genéricos.

**Propiedades:**
- `padding: 8px 16px` - Espaciado interno
- `background: #f0f0f0` - Color de fondo claro
- `border: 1px solid #ddd` - Borde sutil
- `border-radius: 4px` - Bordes redondeados
- `cursor: pointer` - Cambia el cursor al pasar el mouse

##### `.paginacion__indicador`
Texto que muestra la página actual/total.

**Propiedades:**
- `margin-left: auto` - Empuja el elemento a la derecha
- `padding-right: 1rem` - Espaciado derecho
- `font-weight: bold` - Texto en negrita
- `font-size: 1.3rem` - Tamaño de fuente aumentado

### 4. Modificadores

#### `.paginacion__btn--disabled`
Estado deshabilitado para botones.

**Propiedades:**
- `opacity: 0.5` - Reduce la opacidad
- `cursor: not-allowed` - Cambia el cursor para indicar no disponible

#### `.paginacion__btn--siguiente`
Modificador específico para el botón "Siguiente".

**Propiedad:**
- `margin-left: 10px` - Espacio adicional a la izquierda

## Responsive Design

El diseño utiliza Flexbox para crear un layout responsivo:
- Los ítems de publicación se organizan en 3 columnas (`width: calc((100% - 20px)/3)`)
- Se ajustan automáticamente cuando el espacio es insuficiente gracias a `flex-wrap: wrap`
- Las imágenes mantienen una proporción fija (`aspect-ratio: 22/11`) para consistencia visual

## Consideraciones

1. El color de fondo `skyblue` en `.publicaciones__contenedor` parece ser temporal para desarrollo.
2. Los botones de paginación tienen estados interactivos manejados por JavaScript (clase `--disabled`).
3. El sistema está diseñado para mostrar 6 publicaciones por página (configurable en JS).
4. Las imágenes esperan nombres en formato `citlaliX.jpg` donde X es el ID de publicación.