# Hydrogen template: Hello World

Hydrogen is Shopify’s stack for headless commerce. Hydrogen is designed to dovetail with [Remix](https://remix.run/), Shopify’s full stack web framework. This template contains a **minimal setup** of components, queries and tooling to get started with Hydrogen.

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- Remix
- Hydrogen
- Oxygen
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Minimal setup of components and routes

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher

```bash
npm create @shopify/hydrogen@latest -- --template hello-world
```

Remember to update `.env` with your shop's domain and Storefront API token!

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```

## Project structure

```
root.tsx.              # special entry point file that represents the root of the application's route structure. 
|
entry.client.tsx.      # 
|
entry.server.tsx.      #
|
app/
|
+-- assets/            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components/        # shared components used across the entire application.
|
+-- config/            # all the global configuration, env variables etc. get exported from here and used in the app.
|
+-- hooks/             # custom hooks used across the entire application.
|
+-- libs/              # re-exporting different libraries preconfigured for the application. E.g. Axios, React Query
|
+-- providers/         # all of the application providers
|
+-- routes/            # routes configuration
|
+-- stores/            # global state stores if needed
|
+-- test/              # test utilities and mock server
|
+-- types/             # base and share types or interfaces used across the application
|
+-- utils/             # common utility functions that can be reused accross the application.
|
+-- styles/            # tailwindcss configuration in case using tailwindcss for styling.
```


## Routing structure 

```
routes/
|
+-- _index/
  |
  +--route.tsx                  # entry point of a route.
  |
  +--api/                       # this folder should contain all API-related operations (GraphQL is used in this example)
    |
    +-- queries.ts.             # graphQL queries
    |
    +-- mutation.tsx            # graphQL mutations
  |
  +--intefaces/                 # this sub-folder contains all interfaces that used in this routes
    |
    +-- example.interface.ts.   # interface that defines the shape of fetched or return data or props.
```