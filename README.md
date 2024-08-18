This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project focuses on implementing Tailwind to create a UI using tailwind classes.

## Getting Started

To get started, first clone the repo in your IDE of choice or download a copy and open the project folder. 

To run the development server, use any of the following commands (this project uses yarn):

```bash
npm run dev
# or
yarn dev 
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file. All code that was worked is located in this page.tsx file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Specifics

This project focused on create, using and modifying tailwind classes. Located in the tailwind.config.ts are tailwind system changes and extensions to color, border radius, and the backgroundImage. In addition are breakpoints to help chaneg the styliing of the page based on screen size. This is used for the header as a starting point and is not implemented fully and/or correctly, but its a start. A button is also used to demonstrate an animation using tailwind. The button is using basic javascript to change text when clicked. The globals contains a color change for links when hovering over.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
