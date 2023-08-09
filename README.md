# Audiophile e-commerce website

This project is a self built solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx).

## Table of contents

- [Overview](#overview)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Other libraries and modules](#other-libraries-and-modules)

## Overview

### Features

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Add/Remove products from the cart
- Edit product quantities in the cart
- Keep track of what's in the cart, even after refreshing the browser
- Fill in fields in the checkout and receive form validations if fields are missed or incorrect
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary

Back-end:

- Products data and pictures are fetched from remote database and storage
- Orders are sent and registered in database

### Screenshot

Desktop view:

![](./screenshots/screenshot-desktop-01.png)

![](./screenshots/screenshot-desktop-02.png)

Tablet view:

![](./screenshots/screenshot-tablet-01.png)

![](./screenshots/screenshot-tablet-02.png)

Mobile view:

![](./screenshots/screenshot-mobile-01.png)

![](./screenshots/screenshot-mobile-02.png)

### Links

- Live Site URL: [PENDING](https://your-live-site-url.com)

## My process

### Built with

- [Nuxt.js](https://nuxt.com/) - Web framework built on Vue.js
- [Tailwind Css](https://tailwindcss.com/) - Css framework
- [Prisma](https://www.prisma.io/) - Node.js ORM
- [Supabase](https://supabase.com/) - Open source Postgres backends

### Other libraries and modules

- [Pinia](https://pinia.vuejs.org/) - Store for Vue.js
- [VueUse](https://vueuse.org/) - Composition utilities
- [Formkit](https://formkit.com/) - Form framework for Vue.js
- [Joi](https://joi.dev/) - Data validator for JS
