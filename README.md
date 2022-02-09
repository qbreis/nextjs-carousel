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

git config --local user.name "qbreis"

git config --local user.email "qbreis@gmail.com"

ssh-keygen -t ed25519 -C "qbreis@gmail.com"

npm install @glidejs/glide
```