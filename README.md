# Sara Barnthouse

Sitio web desarrollado con Next.js 16, React 19 y TypeScript. Los estilos usan CSS global y CSS Modules; las fotografías WebP se renderizan con `next/image`, las fuentes con `next/font/local` y los iconos como componentes SVG de React.

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
src/components/   Secciones y elementos reutilizables con CSS Modules
src/hooks/        Interactividad y paralaje en React
src/lib/          Contenido y referencias de imágenes del sitio
public/images/    Fotografías WebP
public/fonts/     Fuentes locales
```

La licencia del código se conserva en [LICENSE](LICENSE). Las fotografías, fuentes, marcas y textos mantienen sus derechos correspondientes.

## Componentes

Las páginas son Server Components que componen `LandingHero`, `Header`, `BiographySection` y `ContactSection` a partir de los datos de `src/lib/site-content.ts`. Cada sección recibe su contenido por props. `ContactDetail`, `SectionHeading`, `SocialLinks` y `ResponsiveImage` también pueden reutilizarse por separado.

`ResponsiveImage` y `ParallaxBackground` utilizan `next/image` con importaciones estáticas, `fill`, `sizes` y variantes responsive generadas por el optimizador de Next.js. Las imágenes principales se precargan y el fondo de contacto se carga de forma diferida. Las fotografías originales PNG/JPEG se sustituyeron por WebP; Next.js también entrega WebP en sus variantes optimizadas.

Solo el menú, las transiciones de entrada y el paralaje requieren componentes de cliente. El menú usa un diálogo nativo con foco y cierre por Escape. Las animaciones respetan la preferencia de movimiento reducido. No se cargan scripts, estilos, componentes ni recursos desde Squarespace.
