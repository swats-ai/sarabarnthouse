# Sara Barnthouse

Sitio web desarrollado con Next.js 16, React 19 y TypeScript. Los estilos usan CSS global y CSS Modules; las imágenes, iconos y fuentes se sirven desde `public/`.

Repositorio: [swats-ai/sarabarnthouse](https://github.com/swats-ai/sarabarnthouse).

## Desarrollo

Requiere Node.js 24 o superior.

```sh
npm ci
npm run dev
```

Abre http://localhost:3000. Las rutas disponibles son `/` (portada) y `/home` (biografía y contacto).

Para escuchar en una dirección y un puerto concretos:

```sh
npm run dev -- --hostname 100.92.10.40 --port 3001
```

## Producción

```sh
npm run build
npm run start
```

## Comprobaciones

```sh
npm run check
```

Ejecuta ESLint, TypeScript y la compilación de producción. También están disponibles por separado `npm run lint`, `npm run typecheck` y `npm run build`.

## Estructura

```text
src/app/          Rutas, metadatos y estilos globales
src/components/   Cabecera, menú, animaciones y estilos del sitio
public/images/    Fotografías
public/fonts/     Fuentes locales
public/icons/     Iconos de redes sociales
```

La licencia del código se conserva en [LICENSE](LICENSE). Las fotografías, fuentes, marcas y textos mantienen sus derechos correspondientes.
