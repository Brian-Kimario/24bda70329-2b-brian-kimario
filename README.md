# 2b Project – Product Filter App

A simple **Next.js** application that displays a list of products with category filtering and price sorting using Shadcn UI, Tailwind CSS, and TypeScript.

## Features

- Product list with name, price, and category.
- Filter by category: All, Electronics, Clothing.
- Sort by price: Default, Low to High, High to Low.
- Clean UI using Shadcn components and Tailwind CSS.
- Typed with TypeScript for safer code.

## Tech Stack

- Next.js 14+ (App Router, `use client`)
- React + TypeScript
- Shadcn UI (Card, Select, Badge, Button)
- Tailwind CSS
- pnpm (package manager)

## Project Structure

```text
2b/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage with product filtering
├── components/
│   ├── ui/                  # Shadcn UI components
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   └── select.tsx
│   ├── product-card.tsx     # Product display card component
│   └── select-control.tsx   # Reusable select dropdown component
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── types/
│   └── index.ts             # TypeScript type definitions
├── components.json          # Shadcn UI configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies
├── pnpm-lock.yaml           # Lock file
├── pnpm-workspace.yaml      # pnpm workspace config
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## How It Works

- `types/index.ts` defines shared types used across the app, such as `SelectOption` and `Product`.
- `components/select-control.tsx` implements a reusable select dropdown built with Shadcn Select.
- `components/product-card.tsx` renders each product inside a styled card with a category badge.
- `app/page.tsx`:
  - Manages state for `filterCategory` and `sortBy`.
  - Filters the product list based on the selected category.
  - Sorts products by price (default, low to high, high to low).
  - Displays the resulting products in a responsive grid layout.

## Scripts

Common scripts (run with `pnpm <script>`):

- `dev` – Start the development server.
- `build` – Build the production bundle.
- `start` – Run the production server (after `build`).
- `lint` – Lint and check the codebase.

## Future Improvements

- Add search functionality by product name.
- Introduce additional product categories.
- Connect the app to a real backend or external API.
- Implement pagination or infinite scroll for larger product lists.
