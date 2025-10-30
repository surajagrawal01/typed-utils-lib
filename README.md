# 🧩 Typed Utils Lib

A **TypeScript-based utility library** that provides a collection of reusable helper functions for JavaScript and TypeScript projects.  
Built using **[tsup](https://github.com/egoist/tsup)** — supports both **CommonJS (CJS)** and **ES Modules (ESM)**, so it works seamlessly in both **Node.js** and **browser-based (React/Vite)** environments.

> ⚠️ **Note:** This is a learning project built for exploring TypeScript, tsup, and utility function design patterns.

---

## 🚀 Features

- ✅ Fully **TypeScript-typed** — includes `.d.ts` definitions  
- 🔄 Supports **CJS** (`require`) and **ESM** (`import`)  
- ⚙️ Fast and lightweight builds with **tsup**  
- 🧠 Simple, reusable, and extendable utility functions  
- 🧩 Works in **Node.js**, **React**, or any frontend project  

---

## 🧰 Available Utility Functions

| Function Name | Description |
|----------------|-------------|
| **`debounce(fn, delay)`** | Delays execution of `fn` until after a given delay has passed since the last call. Useful for search inputs or resize events. |
| **`throttle(fn, delay)`** | Ensures `fn` is executed at most once every given delay period. Great for scroll or resize events. |
| **`deepClone(value)`** | Creates a deep copy of an object or array — useful to avoid unintended mutations. |
| **`flattenArray(arr)`** | Flattens a nested array into a single-level array. |
| **`memoize(fn)`** | Caches the result of a function based on its input arguments to improve performance. |

---

## 📦 Local Setup & Usage

If you want to use this library locally (before publishing to npm), follow these steps 👇

### 🧱 Step 1 — Build the library

Inside the `typed-utils-lib` folder:

```bash
npm install
npm run build
```
### 🧱 Step 2 — Run this command inside your library project
``` bash
npm link
```

### 🧱 Step 2 — Run command on your main project
```bash
npm link typed-utils-lib
```

## 🛠️ How to Utilize

You can use the library with both **ES Modules (import)** and **CommonJS (require)** syntax depending on your project setup.

### ✅ ES Modules (import)
```typescript
import { debounce, flattenArray } from "typed-utils-lib";

debounce(() => console.log("Hello from ES Module!"), 500);
```

### ✅ CommonJS (require)
```typescript
const { debounce, flattenArray } = require("typed-utils-lib");

debounce(() => console.log("Hello from CJS!"), 500);
```
