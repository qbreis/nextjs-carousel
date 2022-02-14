Integración de un *Carousel* o *Pase de diapositivas* en [Next.js](https://nextjs.org/) para poder integrar posteriormente al proyecto [Anonymath](https://github.com/isfegu/anonymath).

En este caso se propone la librería [Glide](https://glidejs.com/).

```bash
npm install @glidejs/glide
```

Para este ejercicio me he ayudado de la [discusión en Github](https://github.com/glidejs/glide/issues/366), concretamente la respuesta / solución que da [jedrzejchalubek](https://github.com/jedrzejchalubek).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Apuntes de desarrollo

Este es un proyecto de [Next.js](https://nextjs.org/) iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

```bash
node -v
6.13.6

npm -v
v13.7.0

npx create-next-app nextjs-carousel
[...]

cd nextjs-carousel

git config --local user.name "username"

git config --local user.email "username@gmail.com"

ssh-keygen -t ed25519 -C "username@gmail.com"

npm install @glidejs/glide
```

## Para importar el componente Image de NextJs

pages\index.js:

```bash
        <Carousel options={{ 
            type: 'carousel',
            animationDuration: 500,
            //autoplay: 4500,
            focusAt: '1',
            startAt: 1,
            perView: 1,
        }}>
          <Slide options={{ 
            captionTitle: 'Primer paso',
            captionDescription: ['Coloca la hoja sobre una superficie plana con la parte impresa hacia abajo. De esta forma tu manuscrito quedaría a la vista.'],
            src: slide_1.src, 
            width: '500', 
            height: '375' 
          }} />
          <Slide options={{ 
            captionTitle: 'Segundo paso',
            captionDescription: ['Haz el primer pliegue a lo largo de la línea punteada que hay en el dorso.'],
            src: slide_2.src, 
            width: '500', 
            height: '375' 
          }} />
          <Slide options={{ 
            captionTitle: 'Tercer paso',
            captionDescription: ['Te quedará a la vista el aviso de "no tirar a la basura".'],
            src: slide_3.src, 
            width: '500', 
            height: '375' 
          }} />
          <Slide options={{ 
            captionTitle: 'Cuarto paso',
            captionDescription: ['Pliega ahora el otro lado de la hoja, también por la línea punteada.'],
            src: slide_4.src, 
            width: '500', 
            height: '375' 
          }} />
          <Slide options={{ 
            captionTitle: 'Quinto paso',
            captionDescription: ['Este pliego tapará en anterior.'],
            src: slide_5.src, 
            width: '500', 
            height: '375' 
          }} />
          <Slide options={{ 
            captionTitle: 'Sexto paso',
            captionDescription: ['Ahora quedará a la vista sólo la URL de ANONYMATH.'],
            src: slide_6.src, 
            width: '500', 
            height: '375' 
          }} />
          <Slide options={{ 
            captionTitle: 'Séptimo paso',
            captionDescription: ['Este es el último plegado. No tiene líneas punteadas. Se trata de introducir un extremo del papel doblado dentro del otro. El de la derecha hace de sobre y el de la izquierda es el que se introduce dentro del otro.'],
            src: slide_7.src, 
            width: '500', 
            height: '375' 
          }} />
          <Slide options={{ 
            captionTitle: 'Octavo paso',
            captionDescription: ['Se debe introducir hasta la línea de puntos.'],
            src: slide_8.src, 
            width: '500', 
            height: '375' 
          }} />
          <Slide options={{ 
            captionTitle: 'Noveno paso',
            captionDescription: ['Aplástalo contra la superficie plana para acabar el plegado, de manera que la línea de puntos quede más o menos centrada.'],
            src: slide_9.src, 
            width: '500', 
            height: '375' 
          }} />
          <Slide options={{ 
            captionTitle: 'Décimo paso',
            captionDescription: ['El plagado ya está hecho y por este lado la superficie es blanca. Al darle la vuelta sólo se ve el logo de ANONYMATH.', 'Ya puedes dejar tu mensaje matemático en donde quieras.'],
            src: slide_10.src, 
            width: '500', 
            height: '375' 
          }} />
            
        </Carousel>
```bash
