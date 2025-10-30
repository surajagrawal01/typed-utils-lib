import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            name: "TypedUtilsLib",
            formats: ["es"], // 👈 Force ESM-only output
            fileName: "index",
        },
    },
});
