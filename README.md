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

import Image from 'next/image' // En pages/index.js ya no se usa el componente Image!
import styles from '../styles/Home.module.css'
import {Carousel, Slide } from "../components/carousel";

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
```

components\carousel.js:

```bash
import Glide from "@glidejs/glide";
import { useImperativeHandle, useEffect, useRef, forwardRef } from "react";
import Image from 'next/image'
import "@glidejs/glide/dist/css/glide.core.css";

export const Carousel = forwardRef(({ options, children }, ref) => {
  const sliderRef = useRef();
  useImperativeHandle(ref, () => sliderRef.current);
  useEffect(() => {
    const slider = new Glide(sliderRef.current, options);
    slider.mount();
    return () => slider.destroy();
  }, [options]);

  return (
    <div className="glide" ref={sliderRef}>
        <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">{children}</ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--prev" data-glide-dir="<">prev</button>
            <button className="glide__arrow glide__arrow--next" data-glide-dir=">">next</button> 
        </div>
    </div>
  );
});

export const Slide = forwardRef(({ options }, ref) => {
    if (options.src){
        const captionDescription = options.captionDescription.map(value => <p>{value}</p>);
        return (
            <li className="glide__slide" ref={ref}>
                <figure>
                    <Image
                        alt=''
                        src={options.src}
                        width={options.width}
                        height={options.height}
                        layout='fill'
                        objectFit='cover'
                        priority
                    />
                    <figcaption>
                        <h3>{options.captionTitle}</h3>
                        {captionDescription}
                    </figcaption>
                </figure>
            </li>
        );
    }else{
        return <></>
    }
});
```

styles\globals.css:

```bash
/** Carousel - glide **/

.glide { 
  border: 1px solid #eaeaea;
  border-radius: 10px;
  max-width: 600px;
  margin: 1rem;
  overflow: hidden;
}

.glide figcaption {
  background-color: rgba(0,0,0,.2);
  padding: .5rem 1rem;
  bottom: 0;
  width: 100%;
  position: absolute;
  left: 0;
}
.glide figcaption h3,
.glide figcaption p { margin: .5rem 0; }
/*
.glide .glide__slide span { width: 100% !important;height: 100% !important; }
.glide .glide__slide img { object-fit: cover; }
*/

.glide ul { 
  background-color: #464646;
  color: #ffffff;
  height: 300px; 
}

.glide ul li {
  display: flex;
  align-items: center;
	justify-content: center;
  position: relative;
}

.glide__arrow {
  position: absolute;
  top: 50%;
}
.glide__arrow--prev {
  left: 0;
}
.glide__arrow--next {
  right: 0;
}
```
